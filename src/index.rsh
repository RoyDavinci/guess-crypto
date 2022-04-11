'reach 0.1';

const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);
const [ isComparison, TOO_LOW, IS_CORRECT, TOO_HIGH ] = makeEnum(3);

/**
 * 
 * @param timeAlice Total amount of time it took Alice to finish all three rounds
 * @param timeBob Total amount of time it took Bob to finish all three rounds
 * @returns integer that maps onto outcome enum
 */
const winner = (pointsAlice, pointsBob) => {
  if(pointsAlice == pointsBob) {
    return DRAW;
  } else if(pointsAlice > pointsBob){
    return A_WINS;
  } else return B_WINS;
}

/**
 * @description computes number of points left for a player at the end of a round
 * @param (currentNumberOfPoints) current number of points player has
 * @param (guessOutcome) outcome of guesses made by player during round
 * @param (playOutcome) outcome of guesses made by opponent during round
 */
const computePoints = (currentNumberOfPoints, guessOutcome, playOutcome) => {
  if( (guessOutcome == IS_CORRECT) && ( playOutcome != IS_CORRECT) ){  //player wins his guess and his opponent loses his guess
    return (currentNumberOfPoints + 20);
  }
  else if(
    ( (guessOutcome == IS_CORRECT) && ( playOutcome == IS_CORRECT) ) || 
    ( (guessOutcome != IS_CORRECT) && ( playOutcome != IS_CORRECT))){
      return currentNumberOfPoints;
  } 
  else return (currentNumberOfPoints - 20);
}

/**
 *
 * @param guess Guess made by Participant
 * @param correctValue number published by other participant
 * returns integer that maps onto comparison enum
 */
const compare = (guess, correctValue) => {
  if(guess == correctValue){
    return IS_CORRECT;
  }
  else if(guess > correctValue){
    return TOO_HIGH; 
  }
  else return TOO_LOW;
}

/**
 *@description converts comparison enum(integer) to characters 'h', 'l, or 'c'
 *  which stand for TOO_HIGH, TOO_LOW and IS_CORRECT respectively
 */
const parseCompareToChar = ( comparison ) => {
  if(comparison == TOO_LOW){
    return 'l';
  }
  else if(comparison == TOO_HIGH){
    return 'h';
  }
  else return 'c';
}

/**
 * 
 * @param outcome 
 * @param wager 
 * @param Alice 
 * @param Bob 
 */
const payWinner = (outcome, wager, Alice, Bob) => {
  if (outcome == DRAW) {
    each([Alice, Bob], () => {
      interact.showWinner("d");
    });
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);
  }
  else if(outcome == A_WINS) {
    transfer(2*wager).to(Alice);
    each([Alice, Bob], () => {
      interact.showWinner("a");
    });
  }
  else {
    transfer(2*wager).to(Bob);
    each([Alice, Bob], () => {
      interact.showWinner("b");
    });
  }
}

const Player = {
  ...hasRandom,
  guessHand: Fun([], UInt),
  playHand: Fun([], UInt),
  viewGuess: Fun([UInt], Null),
  compareGuessOutcome: Fun([Bytes(1)], Null),
  informTimeout: Fun([], Null),
  showWinner: Fun([Bytes(1)], Null),
  informNewRound: Fun([], Null),
  informNewTrial: Fun([], Null)
}

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
    informAcceptedWager: Fun([], Null),
    informWaitingForAttacher: Fun([], Null)
  });
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  /**
   * @description A function that calls the informTimeout interact interface function
   * on both Participants
   */
  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  /**
   * @description A function that calls the informNewRound interact interface function 
   * on both Participants
   */
  const informNewRound = () => {
    each([Alice, Bob], () => {
      interact.informNewRound();
    });
  };

  const informNewTrial = () => {
    each([Alice, Bob], () => {
      interact.informNewTrial();
    });
  };

  //Alice inputs and publishes wager and deadline duration. Then she pays the wager
  Alice.only(() =>{
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();

  Alice.interact.informWaitingForAttacher();

  //Bob on joining the contract accepts wager before deadline.
  Bob.only(() => {
    interact.acceptWager(wager);
  })
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  
  Alice.interact.informAcceptedWager();

  //While loop that terminates after two iterations
  var [ round, pointsAlice, pointsBob ] = [0, 50, 50];
  invariant (balance() == 2 * wager);
  while(round < 2) {
    commit();

    informNewRound();

    //Bob plays his turn (has to publish it because of comparison computation)
    Bob.only(() => {
      const handBob = declassify(interact.playHand());
    });
    Bob.publish(handBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    //Alice has three trials to guess Bob's hand
    var [ trial, comparisonOutcomeAlice ] = [0, TOO_LOW];
    invariant(balance() == 2 * wager);
    while( (trial < 3) && (comparisonOutcomeAlice != IS_CORRECT) ){
      commit();

      informNewTrial();

      Alice.only(() => {
        const guessAlice = declassify(interact.guessHand());
      })
      Alice.publish(guessAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
      
      Bob.interact.viewGuess(guessAlice);
      const outcome = compare(guessAlice, handBob);

      Alice.interact.compareGuessOutcome( parseCompareToChar(outcome) );    //Shows Alice whether her guess was too high, too low or correct
      
      [ trial, comparisonOutcomeAlice ] = [ trial + 1, outcome ];
      continue;
    }
    commit();




    //Alice plays her turn
    Alice.only(() => {
      const handAlice = declassify(interact.playHand());
    });
    Alice.publish(handAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));

    //Bob has three trials to guess Alice's hand
    var [ trials, comparisonOutcomeBob ] = [0, TOO_LOW];
    invariant(balance() == 2 * wager);
    while( (trials < 3) && (comparisonOutcomeBob != IS_CORRECT) ){
      commit();

      informNewTrial();

      Bob.only(() => {
        const guessBob = declassify(interact.guessHand());
      })
      Bob.publish(guessBob)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
      
      Alice.interact.viewGuess(guessBob);
      const outcome = compare(guessBob, handAlice);

      Bob.interact.compareGuessOutcome( parseCompareToChar(outcome) );    //Shows Bob whether his guess was too high, too low or correct
      
      [ trials, comparisonOutcomeBob ] = [ trials + 1, outcome ];
      continue;
    } 

    [ round, pointsAlice, pointsBob ] = [ round + 1, computePoints(pointsAlice, comparisonOutcomeAlice, comparisonOutcomeBob), computePoints(pointsBob, comparisonOutcomeBob, comparisonOutcomeAlice) ];
    continue;
  }

  const outcome = winner(pointsAlice, pointsBob);

  payWinner(outcome, wager, Alice, Bob);
  
  commit();
});