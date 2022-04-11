// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (d3fd55fe)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v470 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v471 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v471, v470],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:154:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v471, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v475, v476], secs: v478, time: v477, didSend: v31, from: v474 } = txn1;
      
      sim_r.txns.push({
        amt: v475,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v487 = stdlib.add(v477, v476);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v475, v476], secs: v478, time: v477, didSend: v31, from: v474 } = txn1;
  ;
  const v487 = stdlib.add(v477, v476);
  stdlib.protect(ctc1, await interact.informWaitingForAttacher(), {
    at: './index.rsh:158:42:application',
    fs: ['at ./index.rsh:158:42:application call to [unknown function] (defined at: ./index.rsh:158:42:function exp)', 'at ./index.rsh:158:42:application call to "liftedInteract" (defined at: ./index.rsh:158:42:application)'],
    msg: 'informWaitingForAttacher',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v487],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v474, v475, v476, v487],
      evt_cnt: 0,
      funcNum: 2,
      lct: v477,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v807, time: v806, didSend: v418, from: v805 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v475,
          kind: 'from',
          to: v474,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v807, time: v806, didSend: v418, from: v805 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:129:29:application',
      fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:165:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v494, time: v493, didSend: v44, from: v492 } = txn2;
    const v496 = stdlib.add(v475, v475);
    ;
    stdlib.protect(ctc1, await interact.informAcceptedWager(), {
      at: './index.rsh:167:37:application',
      fs: ['at ./index.rsh:167:37:application call to [unknown function] (defined at: ./index.rsh:167:37:function exp)', 'at ./index.rsh:167:37:application call to "liftedInteract" (defined at: ./index.rsh:167:37:application)'],
      msg: 'informAcceptedWager',
      who: 'Alice'
      });
    
    let v498 = stdlib.checkedBigNumberify('./index.rsh:170:47:decimal', stdlib.UInt_max, 50);
    let v499 = stdlib.checkedBigNumberify('./index.rsh:170:51:decimal', stdlib.UInt_max, 50);
    let v500 = stdlib.checkedBigNumberify('./index.rsh:170:44:decimal', stdlib.UInt_max, 0);
    let v501 = v493;
    let v508 = v496;
    
    while (await (async () => {
      const v512 = stdlib.lt(v500, stdlib.checkedBigNumberify('./index.rsh:172:17:decimal', stdlib.UInt_max, 2));
      
      return v512;})()) {
      const v520 = stdlib.add(v501, v476);
      stdlib.protect(ctc1, await interact.informNewRound(), {
        at: './index.rsh:139:30:application',
        fs: ['at ./index.rsh:138:9:application call to [unknown function] (defined at: ./index.rsh:138:27:function exp)', 'at ./index.rsh:175:19:application call to "informNewRound" (defined at: ./index.rsh:137:29:function exp)'],
        msg: 'informNewRound',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: ['time', v520],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v474, v475, v476, v492, v498, v499, v500, v508, v520],
          evt_cnt: 0,
          funcNum: 5,
          lct: v501,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v739, time: v738, didSend: v339, from: v737 } = txn4;
            
            ;
            const v740 = stdlib.addressEq(v474, v737);
            const v741 = stdlib.addressEq(v492, v737);
            const v742 = v740 ? true : v741;
            ;
            sim_r.txns.push({
              amt: v508,
              kind: 'from',
              to: v474,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v739, time: v738, didSend: v339, from: v737 } = txn4;
        ;
        const v740 = stdlib.addressEq(v474, v737);
        const v741 = stdlib.addressEq(v492, v737);
        const v742 = v740 ? true : v741;
        stdlib.assert(v742, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:182:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:129:29:application',
          fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:182:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v530], secs: v532, time: v531, didSend: v74, from: v529 } = txn3;
        ;
        const v533 = stdlib.addressEq(v492, v529);
        stdlib.assert(v533, {
          at: './index.rsh:181:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        let v534 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        let v535 = stdlib.checkedBigNumberify('./index.rsh:185:46:decimal', stdlib.UInt_max, 0);
        let v536 = v531;
        let v543 = v508;
        
        while (await (async () => {
          const v547 = stdlib.lt(v535, stdlib.checkedBigNumberify('./index.rsh:187:21:decimal', stdlib.UInt_max, 3));
          const v548 = stdlib.eq(v534, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
          const v549 = v548 ? false : true;
          const v550 = v547 ? v549 : false;
          
          return v550;})()) {
          const v558 = stdlib.add(v536, v476);
          stdlib.protect(ctc1, await interact.informNewTrial(), {
            at: './index.rsh:145:30:application',
            fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)', 'at ./index.rsh:190:21:application call to "informNewTrial" (defined at: ./index.rsh:143:29:function exp)'],
            msg: 'informNewTrial',
            who: 'Alice'
            });
          
          const v566 = stdlib.protect(ctc0, await interact.guessHand(), {
            at: './index.rsh:193:57:application',
            fs: ['at ./index.rsh:192:17:application call to [unknown function] (defined at: ./index.rsh:192:21:function exp)'],
            msg: 'guessHand',
            who: 'Alice'
            });
          
          const txn4 = await (ctc.sendrecv({
            args: [v474, v475, v476, v492, v498, v499, v500, v530, v535, v543, v558, v566],
            evt_cnt: 1,
            funcNum: 12,
            lct: v536,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:195:13:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v568], secs: v570, time: v569, didSend: v103, from: v567 } = txn4;
              
              ;
              const v571 = stdlib.addressEq(v474, v567);
              ;
              let v573;
              const v574 = stdlib.eq(v568, v530);
              if (v574) {
                v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                }
              else {
                const v575 = stdlib.gt(v568, v530);
                if (v575) {
                  v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                }
              let v576;
              const v577 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              if (v577) {
                const v578 = 'l';
                v576 = v578;
                }
              else {
                const v579 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                if (v579) {
                  const v580 = 'h';
                  v576 = v580;
                  }
                else {
                  const v581 = 'c';
                  v576 = v581;
                  }
                }
              
              const v583 = stdlib.add(v535, stdlib.checkedBigNumberify('./index.rsh:203:53:decimal', stdlib.UInt_max, 1));
              const cv534 = v573;
              const cv535 = v583;
              const cv536 = v569;
              const cv543 = v543;
              
              await (async () => {
                const v534 = cv534;
                const v535 = cv535;
                const v536 = cv536;
                const v543 = cv543;
                
                if (await (async () => {
                  const v547 = stdlib.lt(v535, stdlib.checkedBigNumberify('./index.rsh:187:21:decimal', stdlib.UInt_max, 3));
                  const v548 = stdlib.eq(v534, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                  const v549 = v548 ? false : true;
                  const v550 = v547 ? v549 : false;
                  
                  return v550;})()) {
                  const v558 = stdlib.add(v536, v476);
                  sim_r.isHalt = false;
                  }
                else {
                  const v608 = stdlib.add(v536, v476);
                  sim_r.isHalt = false;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v558],
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv({
              args: [v474, v475, v476, v492, v498, v499, v500, v530, v535, v543, v558],
              evt_cnt: 0,
              funcNum: 13,
              lct: v536,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v586, time: v585, didSend: v141, from: v584 } = txn5;
                
                ;
                const v587 = stdlib.addressEq(v474, v584);
                const v588 = stdlib.addressEq(v492, v584);
                const v589 = v587 ? true : v588;
                ;
                sim_r.txns.push({
                  amt: v543,
                  kind: 'from',
                  to: v492,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v586, time: v585, didSend: v141, from: v584 } = txn5;
            ;
            const v587 = stdlib.addressEq(v474, v584);
            const v588 = stdlib.addressEq(v492, v584);
            const v589 = v587 ? true : v588;
            stdlib.assert(v589, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:196:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:129:29:application',
              fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:196:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v568], secs: v570, time: v569, didSend: v103, from: v567 } = txn4;
            ;
            const v571 = stdlib.addressEq(v474, v567);
            stdlib.assert(v571, {
              at: './index.rsh:195:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            let v573;
            const v574 = stdlib.eq(v568, v530);
            if (v574) {
              v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              }
            else {
              const v575 = stdlib.gt(v568, v530);
              if (v575) {
                v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                }
              }
            let v576;
            const v577 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            if (v577) {
              const v578 = 'l';
              v576 = v578;
              }
            else {
              const v579 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
              if (v579) {
                const v580 = 'h';
                v576 = v580;
                }
              else {
                const v581 = 'c';
                v576 = v581;
                }
              }
            stdlib.protect(ctc1, await interact.compareGuessOutcome(v576), {
              at: './index.rsh:201:41:application',
              fs: ['at ./index.rsh:201:41:application call to [unknown function] (defined at: ./index.rsh:201:41:function exp)', 'at ./index.rsh:201:41:application call to "liftedInteract" (defined at: ./index.rsh:201:41:application)'],
              msg: 'compareGuessOutcome',
              who: 'Alice'
              });
            
            const v583 = stdlib.add(v535, stdlib.checkedBigNumberify('./index.rsh:203:53:decimal', stdlib.UInt_max, 1));
            const cv534 = v573;
            const cv535 = v583;
            const cv536 = v569;
            const cv543 = v543;
            
            v534 = cv534;
            v535 = cv535;
            v536 = cv536;
            v543 = cv543;
            
            continue;}
          
          }
        const v608 = stdlib.add(v536, v476);
        const v612 = stdlib.protect(ctc0, await interact.playHand(), {
          at: './index.rsh:213:53:application',
          fs: ['at ./index.rsh:212:15:application call to [unknown function] (defined at: ./index.rsh:212:19:function exp)'],
          msg: 'playHand',
          who: 'Alice'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v474, v475, v476, v492, v498, v499, v500, v534, v543, v608, v612],
          evt_cnt: 1,
          funcNum: 7,
          lct: v536,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:215:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v614], secs: v616, time: v615, didSend: v165, from: v613 } = txn4;
            
            ;
            const v617 = stdlib.addressEq(v474, v613);
            ;
            const v618 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
            const v619 = stdlib.checkedBigNumberify('./index.rsh:219:45:decimal', stdlib.UInt_max, 0);
            const v620 = v615;
            const v627 = v543;
            
            if (await (async () => {
              const v631 = stdlib.lt(v619, stdlib.checkedBigNumberify('./index.rsh:221:22:decimal', stdlib.UInt_max, 3));
              const v632 = stdlib.eq(v618, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v633 = v632 ? false : true;
              const v634 = v631 ? v633 : false;
              
              return v634;})()) {
              const v642 = stdlib.add(v620, v476);
              sim_r.isHalt = false;
              }
            else {
              const v686 = stdlib.add(v500, stdlib.checkedBigNumberify('./index.rsh:241:51:decimal', stdlib.UInt_max, 1));
              let v687;
              const v688 = stdlib.eq(v534, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v689 = stdlib.eq(v618, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              const v690 = v689 ? false : true;
              const v691 = v688 ? v690 : false;
              if (v691) {
                const v692 = stdlib.add(v498, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, 20));
                v687 = v692;
                }
              else {
                const v695 = v688 ? v689 : false;
                const v700 = v688 ? false : v690;
                const v701 = v695 ? true : v700;
                if (v701) {
                  v687 = v498;
                  }
                else {
                  const v702 = stdlib.sub(v498, stdlib.checkedBigNumberify('./index.rsh:35:40:decimal', stdlib.UInt_max, 20));
                  v687 = v702;
                  }
                }
              let v703;
              const v706 = v688 ? false : true;
              const v707 = v689 ? v706 : false;
              if (v707) {
                const v708 = stdlib.add(v499, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, 20));
                v703 = v708;
                }
              else {
                const v711 = v689 ? v688 : false;
                const v716 = v689 ? false : v706;
                const v717 = v711 ? true : v716;
                if (v717) {
                  v703 = v499;
                  }
                else {
                  const v718 = stdlib.sub(v499, stdlib.checkedBigNumberify('./index.rsh:35:40:decimal', stdlib.UInt_max, 20));
                  v703 = v718;
                  }
                }
              const cv498 = v687;
              const cv499 = v703;
              const cv500 = v686;
              const cv501 = v620;
              const cv508 = v627;
              
              await (async () => {
                const v498 = cv498;
                const v499 = cv499;
                const v500 = cv500;
                const v501 = cv501;
                const v508 = cv508;
                
                if (await (async () => {
                  const v512 = stdlib.lt(v500, stdlib.checkedBigNumberify('./index.rsh:172:17:decimal', stdlib.UInt_max, 2));
                  
                  return v512;})()) {
                  const v520 = stdlib.add(v501, v476);
                  sim_r.isHalt = false;
                  }
                else {
                  let v755;
                  const v756 = stdlib.eq(v498, v499);
                  if (v756) {
                    v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                  else {
                    const v757 = stdlib.gt(v498, v499);
                    if (v757) {
                      v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                      }
                    else {
                      v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                      }
                    }
                  const v758 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                  if (v758) {
                    
                    sim_r.txns.push({
                      amt: v475,
                      kind: 'from',
                      to: v474,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      amt: v475,
                      kind: 'from',
                      to: v492,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v776 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    if (v776) {
                      const v777 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:84:14:decimal', stdlib.UInt_max, 2), v475);
                      sim_r.txns.push({
                        amt: v777,
                        kind: 'from',
                        to: v474,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      const v791 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:14:decimal', stdlib.UInt_max, 2), v475);
                      sim_r.txns.push({
                        amt: v791,
                        kind: 'from',
                        to: v492,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}})();}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v608],
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v474, v475, v476, v492, v498, v499, v500, v534, v543, v608],
            evt_cnt: 0,
            funcNum: 8,
            lct: v536,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v721, time: v720, didSend: v305, from: v719 } = txn5;
              
              ;
              const v722 = stdlib.addressEq(v474, v719);
              const v723 = stdlib.addressEq(v492, v719);
              const v724 = v722 ? true : v723;
              ;
              sim_r.txns.push({
                amt: v543,
                kind: 'from',
                to: v492,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v721, time: v720, didSend: v305, from: v719 } = txn5;
          ;
          const v722 = stdlib.addressEq(v474, v719);
          const v723 = stdlib.addressEq(v492, v719);
          const v724 = v722 ? true : v723;
          stdlib.assert(v724, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:216:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:129:29:application',
            fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:216:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v614], secs: v616, time: v615, didSend: v165, from: v613 } = txn4;
          ;
          const v617 = stdlib.addressEq(v474, v613);
          stdlib.assert(v617, {
            at: './index.rsh:215:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          let v618 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
          let v619 = stdlib.checkedBigNumberify('./index.rsh:219:45:decimal', stdlib.UInt_max, 0);
          let v620 = v615;
          let v627 = v543;
          
          while (await (async () => {
            const v631 = stdlib.lt(v619, stdlib.checkedBigNumberify('./index.rsh:221:22:decimal', stdlib.UInt_max, 3));
            const v632 = stdlib.eq(v618, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v633 = v632 ? false : true;
            const v634 = v631 ? v633 : false;
            
            return v634;})()) {
            const v642 = stdlib.add(v620, v476);
            stdlib.protect(ctc1, await interact.informNewTrial(), {
              at: './index.rsh:145:30:application',
              fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)', 'at ./index.rsh:224:21:application call to "informNewTrial" (defined at: ./index.rsh:143:29:function exp)'],
              msg: 'informNewTrial',
              who: 'Alice'
              });
            
            const txn5 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v642],
              waitIfNotPresent: false
              }));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv({
                args: [v474, v475, v476, v492, v498, v499, v500, v534, v614, v619, v627, v642],
                evt_cnt: 0,
                funcNum: 11,
                lct: v620,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn6) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v670, time: v669, didSend: v232, from: v668 } = txn6;
                  
                  ;
                  const v671 = stdlib.addressEq(v474, v668);
                  const v672 = stdlib.addressEq(v492, v668);
                  const v673 = v671 ? true : v672;
                  ;
                  sim_r.txns.push({
                    amt: v627,
                    kind: 'from',
                    to: v474,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v670, time: v669, didSend: v232, from: v668 } = txn6;
              ;
              const v671 = stdlib.addressEq(v474, v668);
              const v672 = stdlib.addressEq(v492, v668);
              const v673 = v671 ? true : v672;
              stdlib.assert(v673, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:230:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:129:29:application',
                fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:230:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v652], secs: v654, time: v653, didSend: v194, from: v651 } = txn5;
              ;
              const v655 = stdlib.addressEq(v492, v651);
              stdlib.assert(v655, {
                at: './index.rsh:229:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              stdlib.protect(ctc1, await interact.viewGuess(v652), {
                at: './index.rsh:232:31:application',
                fs: ['at ./index.rsh:232:31:application call to [unknown function] (defined at: ./index.rsh:232:31:function exp)', 'at ./index.rsh:232:31:application call to "liftedInteract" (defined at: ./index.rsh:232:31:application)'],
                msg: 'viewGuess',
                who: 'Alice'
                });
              
              let v657;
              const v658 = stdlib.eq(v652, v614);
              if (v658) {
                v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                }
              else {
                const v659 = stdlib.gt(v652, v614);
                if (v659) {
                  v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                }
              const v667 = stdlib.add(v619, stdlib.checkedBigNumberify('./index.rsh:237:53:decimal', stdlib.UInt_max, 1));
              const cv618 = v657;
              const cv619 = v667;
              const cv620 = v653;
              const cv627 = v627;
              
              v618 = cv618;
              v619 = cv619;
              v620 = cv620;
              v627 = cv627;
              
              continue;}
            
            }
          const v686 = stdlib.add(v500, stdlib.checkedBigNumberify('./index.rsh:241:51:decimal', stdlib.UInt_max, 1));
          let v687;
          const v688 = stdlib.eq(v534, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
          const v689 = stdlib.eq(v618, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
          const v690 = v689 ? false : true;
          const v691 = v688 ? v690 : false;
          if (v691) {
            const v692 = stdlib.add(v498, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, 20));
            v687 = v692;
            }
          else {
            const v695 = v688 ? v689 : false;
            const v700 = v688 ? false : v690;
            const v701 = v695 ? true : v700;
            if (v701) {
              v687 = v498;
              }
            else {
              const v702 = stdlib.sub(v498, stdlib.checkedBigNumberify('./index.rsh:35:40:decimal', stdlib.UInt_max, 20));
              v687 = v702;
              }
            }
          let v703;
          const v706 = v688 ? false : true;
          const v707 = v689 ? v706 : false;
          if (v707) {
            const v708 = stdlib.add(v499, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, 20));
            v703 = v708;
            }
          else {
            const v711 = v689 ? v688 : false;
            const v716 = v689 ? false : v706;
            const v717 = v711 ? true : v716;
            if (v717) {
              v703 = v499;
              }
            else {
              const v718 = stdlib.sub(v499, stdlib.checkedBigNumberify('./index.rsh:35:40:decimal', stdlib.UInt_max, 20));
              v703 = v718;
              }
            }
          const cv498 = v687;
          const cv499 = v703;
          const cv500 = v686;
          const cv501 = v620;
          const cv508 = v627;
          
          v498 = cv498;
          v499 = cv499;
          v500 = cv500;
          v501 = cv501;
          v508 = cv508;
          
          continue;}
        
        }
      
      }
    let v755;
    const v756 = stdlib.eq(v498, v499);
    if (v756) {
      v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      }
    else {
      const v757 = stdlib.gt(v498, v499);
      if (v757) {
        v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
        }
      else {
        v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        }
      }
    const v758 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    if (v758) {
      const v761 = 'd';
      stdlib.protect(ctc1, await interact.showWinner(v761), {
        at: './index.rsh:78:26:application',
        fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)', 'at ./index.rsh:247:12:application call to "payWinner" (defined at: ./index.rsh:75:48:function exp)'],
        msg: 'showWinner',
        who: 'Alice'
        });
      
      ;
      ;
      return;
      }
    else {
      const v776 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      if (v776) {
        const v777 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:84:14:decimal', stdlib.UInt_max, 2), v475);
        ;
        const v784 = 'a';
        stdlib.protect(ctc1, await interact.showWinner(v784), {
          at: './index.rsh:86:26:application',
          fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:27:function exp)', 'at ./index.rsh:247:12:application call to "payWinner" (defined at: ./index.rsh:75:48:function exp)'],
          msg: 'showWinner',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v791 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:14:decimal', stdlib.UInt_max, 2), v475);
        ;
        const v798 = 'b';
        stdlib.protect(ctc1, await interact.showWinner(v798), {
          at: './index.rsh:92:26:application',
          fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)', 'at ./index.rsh:247:12:application call to "payWinner" (defined at: ./index.rsh:75:48:function exp)'],
          msg: 'showWinner',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v475, v476], secs: v478, time: v477, didSend: v31, from: v474 } = txn1;
  ;
  const v487 = stdlib.add(v477, v476);
  stdlib.protect(ctc1, await interact.acceptWager(v475), {
    at: './index.rsh:162:25:application',
    fs: ['at ./index.rsh:161:11:application call to [unknown function] (defined at: ./index.rsh:161:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v474, v475, v476, v487],
    evt_cnt: 0,
    funcNum: 1,
    lct: v477,
    onlyIf: true,
    out_tys: [],
    pay: [v475, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v494, time: v493, didSend: v44, from: v492 } = txn2;
      
      const v496 = stdlib.add(v475, v475);
      sim_r.txns.push({
        amt: v475,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v498 = stdlib.checkedBigNumberify('./index.rsh:170:47:decimal', stdlib.UInt_max, 50);
      const v499 = stdlib.checkedBigNumberify('./index.rsh:170:51:decimal', stdlib.UInt_max, 50);
      const v500 = stdlib.checkedBigNumberify('./index.rsh:170:44:decimal', stdlib.UInt_max, 0);
      const v501 = v493;
      const v508 = v496;
      
      if (await (async () => {
        const v512 = stdlib.lt(v500, stdlib.checkedBigNumberify('./index.rsh:172:17:decimal', stdlib.UInt_max, 2));
        
        return v512;})()) {
        const v520 = stdlib.add(v501, v476);
        sim_r.isHalt = false;
        }
      else {
        let v755;
        const v756 = stdlib.eq(v498, v499);
        if (v756) {
          v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
        else {
          const v757 = stdlib.gt(v498, v499);
          if (v757) {
            v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
            }
          else {
            v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
            }
          }
        const v758 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        if (v758) {
          
          sim_r.txns.push({
            amt: v475,
            kind: 'from',
            to: v474,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v475,
            kind: 'from',
            to: v492,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v776 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
          if (v776) {
            const v777 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:84:14:decimal', stdlib.UInt_max, 2), v475);
            sim_r.txns.push({
              amt: v777,
              kind: 'from',
              to: v474,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v791 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:14:decimal', stdlib.UInt_max, 2), v475);
            sim_r.txns.push({
              amt: v791,
              kind: 'from',
              to: v492,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v487],
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v474, v475, v476, v487],
      evt_cnt: 0,
      funcNum: 2,
      lct: v477,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v807, time: v806, didSend: v418, from: v805 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v475,
          kind: 'from',
          to: v474,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v807, time: v806, didSend: v418, from: v805 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:129:29:application',
      fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:165:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v494, time: v493, didSend: v44, from: v492 } = txn2;
    const v496 = stdlib.add(v475, v475);
    ;
    let v498 = stdlib.checkedBigNumberify('./index.rsh:170:47:decimal', stdlib.UInt_max, 50);
    let v499 = stdlib.checkedBigNumberify('./index.rsh:170:51:decimal', stdlib.UInt_max, 50);
    let v500 = stdlib.checkedBigNumberify('./index.rsh:170:44:decimal', stdlib.UInt_max, 0);
    let v501 = v493;
    let v508 = v496;
    
    while (await (async () => {
      const v512 = stdlib.lt(v500, stdlib.checkedBigNumberify('./index.rsh:172:17:decimal', stdlib.UInt_max, 2));
      
      return v512;})()) {
      const v520 = stdlib.add(v501, v476);
      stdlib.protect(ctc1, await interact.informNewRound(), {
        at: './index.rsh:139:30:application',
        fs: ['at ./index.rsh:138:9:application call to [unknown function] (defined at: ./index.rsh:138:27:function exp)', 'at ./index.rsh:175:19:application call to "informNewRound" (defined at: ./index.rsh:137:29:function exp)'],
        msg: 'informNewRound',
        who: 'Bob'
        });
      
      const v528 = stdlib.protect(ctc0, await interact.playHand(), {
        at: './index.rsh:179:51:application',
        fs: ['at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:17:function exp)'],
        msg: 'playHand',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v474, v475, v476, v492, v498, v499, v500, v508, v520, v528],
        evt_cnt: 1,
        funcNum: 4,
        lct: v501,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:181:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v530], secs: v532, time: v531, didSend: v74, from: v529 } = txn3;
          
          ;
          const v533 = stdlib.addressEq(v492, v529);
          ;
          const v534 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
          const v535 = stdlib.checkedBigNumberify('./index.rsh:185:46:decimal', stdlib.UInt_max, 0);
          const v536 = v531;
          const v543 = v508;
          
          if (await (async () => {
            const v547 = stdlib.lt(v535, stdlib.checkedBigNumberify('./index.rsh:187:21:decimal', stdlib.UInt_max, 3));
            const v548 = stdlib.eq(v534, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v549 = v548 ? false : true;
            const v550 = v547 ? v549 : false;
            
            return v550;})()) {
            const v558 = stdlib.add(v536, v476);
            sim_r.isHalt = false;
            }
          else {
            const v608 = stdlib.add(v536, v476);
            sim_r.isHalt = false;
            }
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v520],
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v474, v475, v476, v492, v498, v499, v500, v508, v520],
          evt_cnt: 0,
          funcNum: 5,
          lct: v501,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v739, time: v738, didSend: v339, from: v737 } = txn4;
            
            ;
            const v740 = stdlib.addressEq(v474, v737);
            const v741 = stdlib.addressEq(v492, v737);
            const v742 = v740 ? true : v741;
            ;
            sim_r.txns.push({
              amt: v508,
              kind: 'from',
              to: v474,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v739, time: v738, didSend: v339, from: v737 } = txn4;
        ;
        const v740 = stdlib.addressEq(v474, v737);
        const v741 = stdlib.addressEq(v492, v737);
        const v742 = v740 ? true : v741;
        stdlib.assert(v742, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:182:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:129:29:application',
          fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:182:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v530], secs: v532, time: v531, didSend: v74, from: v529 } = txn3;
        ;
        const v533 = stdlib.addressEq(v492, v529);
        stdlib.assert(v533, {
          at: './index.rsh:181:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        let v534 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        let v535 = stdlib.checkedBigNumberify('./index.rsh:185:46:decimal', stdlib.UInt_max, 0);
        let v536 = v531;
        let v543 = v508;
        
        while (await (async () => {
          const v547 = stdlib.lt(v535, stdlib.checkedBigNumberify('./index.rsh:187:21:decimal', stdlib.UInt_max, 3));
          const v548 = stdlib.eq(v534, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
          const v549 = v548 ? false : true;
          const v550 = v547 ? v549 : false;
          
          return v550;})()) {
          const v558 = stdlib.add(v536, v476);
          stdlib.protect(ctc1, await interact.informNewTrial(), {
            at: './index.rsh:145:30:application',
            fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)', 'at ./index.rsh:190:21:application call to "informNewTrial" (defined at: ./index.rsh:143:29:function exp)'],
            msg: 'informNewTrial',
            who: 'Bob'
            });
          
          const txn4 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 12,
            out_tys: [ctc0],
            timeoutAt: ['time', v558],
            waitIfNotPresent: false
            }));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv({
              args: [v474, v475, v476, v492, v498, v499, v500, v530, v535, v543, v558],
              evt_cnt: 0,
              funcNum: 13,
              lct: v536,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v586, time: v585, didSend: v141, from: v584 } = txn5;
                
                ;
                const v587 = stdlib.addressEq(v474, v584);
                const v588 = stdlib.addressEq(v492, v584);
                const v589 = v587 ? true : v588;
                ;
                sim_r.txns.push({
                  amt: v543,
                  kind: 'from',
                  to: v492,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v586, time: v585, didSend: v141, from: v584 } = txn5;
            ;
            const v587 = stdlib.addressEq(v474, v584);
            const v588 = stdlib.addressEq(v492, v584);
            const v589 = v587 ? true : v588;
            stdlib.assert(v589, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:196:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:129:29:application',
              fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:196:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v568], secs: v570, time: v569, didSend: v103, from: v567 } = txn4;
            ;
            const v571 = stdlib.addressEq(v474, v567);
            stdlib.assert(v571, {
              at: './index.rsh:195:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            stdlib.protect(ctc1, await interact.viewGuess(v568), {
              at: './index.rsh:198:29:application',
              fs: ['at ./index.rsh:198:29:application call to [unknown function] (defined at: ./index.rsh:198:29:function exp)', 'at ./index.rsh:198:29:application call to "liftedInteract" (defined at: ./index.rsh:198:29:application)'],
              msg: 'viewGuess',
              who: 'Bob'
              });
            
            let v573;
            const v574 = stdlib.eq(v568, v530);
            if (v574) {
              v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              }
            else {
              const v575 = stdlib.gt(v568, v530);
              if (v575) {
                v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                }
              }
            const v583 = stdlib.add(v535, stdlib.checkedBigNumberify('./index.rsh:203:53:decimal', stdlib.UInt_max, 1));
            const cv534 = v573;
            const cv535 = v583;
            const cv536 = v569;
            const cv543 = v543;
            
            v534 = cv534;
            v535 = cv535;
            v536 = cv536;
            v543 = cv543;
            
            continue;}
          
          }
        const v608 = stdlib.add(v536, v476);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 7,
          out_tys: [ctc0],
          timeoutAt: ['time', v608],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v474, v475, v476, v492, v498, v499, v500, v534, v543, v608],
            evt_cnt: 0,
            funcNum: 8,
            lct: v536,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v721, time: v720, didSend: v305, from: v719 } = txn5;
              
              ;
              const v722 = stdlib.addressEq(v474, v719);
              const v723 = stdlib.addressEq(v492, v719);
              const v724 = v722 ? true : v723;
              ;
              sim_r.txns.push({
                amt: v543,
                kind: 'from',
                to: v492,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v721, time: v720, didSend: v305, from: v719 } = txn5;
          ;
          const v722 = stdlib.addressEq(v474, v719);
          const v723 = stdlib.addressEq(v492, v719);
          const v724 = v722 ? true : v723;
          stdlib.assert(v724, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:216:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:129:29:application',
            fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:216:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v614], secs: v616, time: v615, didSend: v165, from: v613 } = txn4;
          ;
          const v617 = stdlib.addressEq(v474, v613);
          stdlib.assert(v617, {
            at: './index.rsh:215:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          let v618 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
          let v619 = stdlib.checkedBigNumberify('./index.rsh:219:45:decimal', stdlib.UInt_max, 0);
          let v620 = v615;
          let v627 = v543;
          
          while (await (async () => {
            const v631 = stdlib.lt(v619, stdlib.checkedBigNumberify('./index.rsh:221:22:decimal', stdlib.UInt_max, 3));
            const v632 = stdlib.eq(v618, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v633 = v632 ? false : true;
            const v634 = v631 ? v633 : false;
            
            return v634;})()) {
            const v642 = stdlib.add(v620, v476);
            stdlib.protect(ctc1, await interact.informNewTrial(), {
              at: './index.rsh:145:30:application',
              fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)', 'at ./index.rsh:224:21:application call to "informNewTrial" (defined at: ./index.rsh:143:29:function exp)'],
              msg: 'informNewTrial',
              who: 'Bob'
              });
            
            const v650 = stdlib.protect(ctc0, await interact.guessHand(), {
              at: './index.rsh:227:55:application',
              fs: ['at ./index.rsh:226:15:application call to [unknown function] (defined at: ./index.rsh:226:19:function exp)'],
              msg: 'guessHand',
              who: 'Bob'
              });
            
            const txn5 = await (ctc.sendrecv({
              args: [v474, v475, v476, v492, v498, v499, v500, v534, v614, v619, v627, v642, v650],
              evt_cnt: 1,
              funcNum: 10,
              lct: v620,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:229:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v652], secs: v654, time: v653, didSend: v194, from: v651 } = txn5;
                
                ;
                const v655 = stdlib.addressEq(v492, v651);
                ;
                let v657;
                const v658 = stdlib.eq(v652, v614);
                if (v658) {
                  v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                else {
                  const v659 = stdlib.gt(v652, v614);
                  if (v659) {
                    v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                    }
                  else {
                    v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                    }
                  }
                let v660;
                const v661 = stdlib.eq(v657, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
                if (v661) {
                  const v662 = 'l';
                  v660 = v662;
                  }
                else {
                  const v663 = stdlib.eq(v657, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                  if (v663) {
                    const v664 = 'h';
                    v660 = v664;
                    }
                  else {
                    const v665 = 'c';
                    v660 = v665;
                    }
                  }
                
                const v667 = stdlib.add(v619, stdlib.checkedBigNumberify('./index.rsh:237:53:decimal', stdlib.UInt_max, 1));
                const cv618 = v657;
                const cv619 = v667;
                const cv620 = v653;
                const cv627 = v627;
                
                await (async () => {
                  const v618 = cv618;
                  const v619 = cv619;
                  const v620 = cv620;
                  const v627 = cv627;
                  
                  if (await (async () => {
                    const v631 = stdlib.lt(v619, stdlib.checkedBigNumberify('./index.rsh:221:22:decimal', stdlib.UInt_max, 3));
                    const v632 = stdlib.eq(v618, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    const v633 = v632 ? false : true;
                    const v634 = v631 ? v633 : false;
                    
                    return v634;})()) {
                    const v642 = stdlib.add(v620, v476);
                    sim_r.isHalt = false;
                    }
                  else {
                    const v686 = stdlib.add(v500, stdlib.checkedBigNumberify('./index.rsh:241:51:decimal', stdlib.UInt_max, 1));
                    let v687;
                    const v688 = stdlib.eq(v534, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    const v689 = stdlib.eq(v618, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    const v690 = v689 ? false : true;
                    const v691 = v688 ? v690 : false;
                    if (v691) {
                      const v692 = stdlib.add(v498, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, 20));
                      v687 = v692;
                      }
                    else {
                      const v695 = v688 ? v689 : false;
                      const v700 = v688 ? false : v690;
                      const v701 = v695 ? true : v700;
                      if (v701) {
                        v687 = v498;
                        }
                      else {
                        const v702 = stdlib.sub(v498, stdlib.checkedBigNumberify('./index.rsh:35:40:decimal', stdlib.UInt_max, 20));
                        v687 = v702;
                        }
                      }
                    let v703;
                    const v706 = v688 ? false : true;
                    const v707 = v689 ? v706 : false;
                    if (v707) {
                      const v708 = stdlib.add(v499, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, 20));
                      v703 = v708;
                      }
                    else {
                      const v711 = v689 ? v688 : false;
                      const v716 = v689 ? false : v706;
                      const v717 = v711 ? true : v716;
                      if (v717) {
                        v703 = v499;
                        }
                      else {
                        const v718 = stdlib.sub(v499, stdlib.checkedBigNumberify('./index.rsh:35:40:decimal', stdlib.UInt_max, 20));
                        v703 = v718;
                        }
                      }
                    const cv498 = v687;
                    const cv499 = v703;
                    const cv500 = v686;
                    const cv501 = v620;
                    const cv508 = v627;
                    
                    await (async () => {
                      const v498 = cv498;
                      const v499 = cv499;
                      const v500 = cv500;
                      const v501 = cv501;
                      const v508 = cv508;
                      
                      if (await (async () => {
                        const v512 = stdlib.lt(v500, stdlib.checkedBigNumberify('./index.rsh:172:17:decimal', stdlib.UInt_max, 2));
                        
                        return v512;})()) {
                        const v520 = stdlib.add(v501, v476);
                        sim_r.isHalt = false;
                        }
                      else {
                        let v755;
                        const v756 = stdlib.eq(v498, v499);
                        if (v756) {
                          v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        else {
                          const v757 = stdlib.gt(v498, v499);
                          if (v757) {
                            v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                            }
                          else {
                            v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                            }
                          }
                        const v758 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                        if (v758) {
                          
                          sim_r.txns.push({
                            amt: v475,
                            kind: 'from',
                            to: v474,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            amt: v475,
                            kind: 'from',
                            to: v492,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }
                        else {
                          const v776 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                          if (v776) {
                            const v777 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:84:14:decimal', stdlib.UInt_max, 2), v475);
                            sim_r.txns.push({
                              amt: v777,
                              kind: 'from',
                              to: v474,
                              tok: undefined /* Nothing */
                              });
                            
                            sim_r.txns.push({
                              kind: 'halt',
                              tok: undefined /* Nothing */
                              })
                            sim_r.isHalt = true;
                            }
                          else {
                            const v791 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:14:decimal', stdlib.UInt_max, 2), v475);
                            sim_r.txns.push({
                              amt: v791,
                              kind: 'from',
                              to: v492,
                              tok: undefined /* Nothing */
                              });
                            
                            sim_r.txns.push({
                              kind: 'halt',
                              tok: undefined /* Nothing */
                              })
                            sim_r.isHalt = true;
                            }}}})();}})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v642],
              tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv({
                args: [v474, v475, v476, v492, v498, v499, v500, v534, v614, v619, v627, v642],
                evt_cnt: 0,
                funcNum: 11,
                lct: v620,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn6) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v670, time: v669, didSend: v232, from: v668 } = txn6;
                  
                  ;
                  const v671 = stdlib.addressEq(v474, v668);
                  const v672 = stdlib.addressEq(v492, v668);
                  const v673 = v671 ? true : v672;
                  ;
                  sim_r.txns.push({
                    amt: v627,
                    kind: 'from',
                    to: v474,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v670, time: v669, didSend: v232, from: v668 } = txn6;
              ;
              const v671 = stdlib.addressEq(v474, v668);
              const v672 = stdlib.addressEq(v492, v668);
              const v673 = v671 ? true : v672;
              stdlib.assert(v673, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:230:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:129:29:application',
                fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:127:28:function exp)', 'at ./index.rsh:230:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v652], secs: v654, time: v653, didSend: v194, from: v651 } = txn5;
              ;
              const v655 = stdlib.addressEq(v492, v651);
              stdlib.assert(v655, {
                at: './index.rsh:229:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              let v657;
              const v658 = stdlib.eq(v652, v614);
              if (v658) {
                v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                }
              else {
                const v659 = stdlib.gt(v652, v614);
                if (v659) {
                  v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  v657 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                }
              let v660;
              const v661 = stdlib.eq(v657, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              if (v661) {
                const v662 = 'l';
                v660 = v662;
                }
              else {
                const v663 = stdlib.eq(v657, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                if (v663) {
                  const v664 = 'h';
                  v660 = v664;
                  }
                else {
                  const v665 = 'c';
                  v660 = v665;
                  }
                }
              stdlib.protect(ctc1, await interact.compareGuessOutcome(v660), {
                at: './index.rsh:235:39:application',
                fs: ['at ./index.rsh:235:39:application call to [unknown function] (defined at: ./index.rsh:235:39:function exp)', 'at ./index.rsh:235:39:application call to "liftedInteract" (defined at: ./index.rsh:235:39:application)'],
                msg: 'compareGuessOutcome',
                who: 'Bob'
                });
              
              const v667 = stdlib.add(v619, stdlib.checkedBigNumberify('./index.rsh:237:53:decimal', stdlib.UInt_max, 1));
              const cv618 = v657;
              const cv619 = v667;
              const cv620 = v653;
              const cv627 = v627;
              
              v618 = cv618;
              v619 = cv619;
              v620 = cv620;
              v627 = cv627;
              
              continue;}
            
            }
          const v686 = stdlib.add(v500, stdlib.checkedBigNumberify('./index.rsh:241:51:decimal', stdlib.UInt_max, 1));
          let v687;
          const v688 = stdlib.eq(v534, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
          const v689 = stdlib.eq(v618, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
          const v690 = v689 ? false : true;
          const v691 = v688 ? v690 : false;
          if (v691) {
            const v692 = stdlib.add(v498, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, 20));
            v687 = v692;
            }
          else {
            const v695 = v688 ? v689 : false;
            const v700 = v688 ? false : v690;
            const v701 = v695 ? true : v700;
            if (v701) {
              v687 = v498;
              }
            else {
              const v702 = stdlib.sub(v498, stdlib.checkedBigNumberify('./index.rsh:35:40:decimal', stdlib.UInt_max, 20));
              v687 = v702;
              }
            }
          let v703;
          const v706 = v688 ? false : true;
          const v707 = v689 ? v706 : false;
          if (v707) {
            const v708 = stdlib.add(v499, stdlib.checkedBigNumberify('./index.rsh:28:37:decimal', stdlib.UInt_max, 20));
            v703 = v708;
            }
          else {
            const v711 = v689 ? v688 : false;
            const v716 = v689 ? false : v706;
            const v717 = v711 ? true : v716;
            if (v717) {
              v703 = v499;
              }
            else {
              const v718 = stdlib.sub(v499, stdlib.checkedBigNumberify('./index.rsh:35:40:decimal', stdlib.UInt_max, 20));
              v703 = v718;
              }
            }
          const cv498 = v687;
          const cv499 = v703;
          const cv500 = v686;
          const cv501 = v620;
          const cv508 = v627;
          
          v498 = cv498;
          v499 = cv499;
          v500 = cv500;
          v501 = cv501;
          v508 = cv508;
          
          continue;}
        
        }
      
      }
    let v755;
    const v756 = stdlib.eq(v498, v499);
    if (v756) {
      v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      }
    else {
      const v757 = stdlib.gt(v498, v499);
      if (v757) {
        v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
        }
      else {
        v755 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        }
      }
    const v758 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    if (v758) {
      const v764 = 'd';
      stdlib.protect(ctc1, await interact.showWinner(v764), {
        at: './index.rsh:78:26:application',
        fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)', 'at ./index.rsh:247:12:application call to "payWinner" (defined at: ./index.rsh:75:48:function exp)'],
        msg: 'showWinner',
        who: 'Bob'
        });
      
      ;
      ;
      return;
      }
    else {
      const v776 = stdlib.eq(v755, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      if (v776) {
        const v777 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:84:14:decimal', stdlib.UInt_max, 2), v475);
        ;
        const v787 = 'a';
        stdlib.protect(ctc1, await interact.showWinner(v787), {
          at: './index.rsh:86:26:application',
          fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:27:function exp)', 'at ./index.rsh:247:12:application call to "payWinner" (defined at: ./index.rsh:75:48:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v791 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:14:decimal', stdlib.UInt_max, 2), v475);
        ;
        const v801 = 'b';
        stdlib.protect(ctc1, await interact.showWinner(v801), {
          at: './index.rsh:92:26:application',
          fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:27:function exp)', 'at ./index.rsh:247:12:application call to "payWinner" (defined at: ./index.rsh:75:48:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAXAAECIHANeGgoCAeAAVBYYAoUDwWIATAyAyYDAQABAQAiNQAxGEEHiipkSSJbNQEhCVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQoMQALLSYELDEABUUmBDAxAAPZJIQUMQABXIQUSRCERNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEIp+XA7AyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBluyCCOyEDT/sgezQgafSCERNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hB1s1/kk1BRc1/YAEVsOjiTT9FlCwMgY0AyELWwxENP8xABJENP00/hJBAAYjNfxCABE0/TT+DUEABiQ1/EIAAyI1/DT/NAMlWzQDIQhbNANXMCA0AyEMWzQDIQ1bNAMhDls0/jT8NAMhBFsjCDIGNAMhBltCBFZIIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATj2TY1sDIGNAMhE1sPRDT/MQASNANXMCAxABIRRLEisgE0AyELW7III7IQNP+yB7NCBbNJIQkMQAD7SSEPDEAAnUghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVcwIDX/IQRbNf5JNQUXNf2ABKeLwgs0/RZQsDIGNAMhE1sMRDT/MQASRDT9NP4SQQAGIzX8QgARNP00/g1BAAYkNfxCAAMiNfw0A1cAIDQDJVs0AyEIWzT/NAMhDFs0AyENWzQDIQ5bNAMhB1s0/jT8NAMhBlsjCDIGNAMhC1tCBAwhCRJEIQ80ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gAQX/NsusDIGNAMhBlsPRDQDVwAgMQASNP8xABIRRLEisgE0AyEEW7III7IQNP+yB7NCBLFIIQ80ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFFzX+gARxqLGjNP4WULAyBjQDIQZbDEQ0/zEAEkQ0/zQDJVs0AyEIWzQDVzAgNAMhDFs0AyENWzQDIQ5bNAMhB1s0/iIiMgY0AyEEW0IDREkkDEABCkmBBAxAAMRJIRIMQABUIRISRCEKNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLAyBjQDIQRbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMhB1uyCCOyEDT/sgezQgPYSCEKNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/0k1BRc1/oAE+YuveDT+FlCwMgY0AyEEWwxENP8xABJENANXACA0AyVbNAMhCFs0/zQDIQxbNAMhDVs0AyEOWzT+IiIyBjQDIQdbQgG+JBJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEUWw9EsSKyATQDJVuyCCOyEDQDVwAgsgezQgMwSSMMQABLSCM0ARJENARJIhJMNAISEUQoZEk1AyVbNf+ABJqLkXSwMgY0AyEUWwxENP+IA1Q0A1cAIDT/NAMhCFsxACEVIRUiMgY0/0kIQgBgSCI0ARJENARJIhJMNAISEURJNQVJIls1/yEJWzX+gASs0R/DNP8WUDT+FlCwgaCNBogDBDT/iAL/MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgKbNf81/jX9Nfw1+zX6Nfk1+DX3NP0kDEEAOzT+NPkINfY09zT4FlA0+RZQNPpQNPsWUDT8FlA0/RZQNP8WUDT2FlAoSwFXAHhnSCEKNQEyBjUCQgJHNPs0/BJBAAYjNfZCABE0+zT8DUEABiQ19kIAAyI19jT2IxJBACOxIrIBNPiyCCOyEDT3sgezsSKyATT4sggjshA0+rIHs0IB4jT2JBJBABWxIrIBJDT4C7III7IQNPeyB7NCAcaxIrIBJDT4C7III7IQNPqyB7NCAbE1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ0/SEWDDT8IxMQQQBKNP409gg18zT0NPUWUDT2FlA091A0+BZQNPkWUDT6FlA0+xZQNP0WUDT/FlA08xZQKEsBVwB/ZylLAVd/CWdIIRE1ATIGNQJCAV40/jT2CDXzNPQ09RZQNPYWUDT3UDT4FlA0+RZQNPoWUDT8FlA0/xZQNPMWUChLAVcAf2cpSwFXfwFnSCEPNQEyBjUCQgEYNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM0/CMSSTXyFDXxNP0hFgw08RBBAE40/jT1CDXwNPM09BZQNPUWUDT2UDT3FlA0+BZQNPkWUDT6FlA0+xZQNP0WUDT/FlA08BZQKEsBVwB/ZylLAVd/EWdIIQU1ATIGNQJCAJs0+iMSSTXvNPEQQQAKNPchEAg18EIAHTTvNPIQNO8UNPEQEUEABzT3NfBCAAc09yEQCTXwNO8UNe008jTtEEEACjT4IRAINe5CAB008jTvEDTyFDTtEBFBAAc0+DXuQgAHNPghEAk17jTzNPQ09TT2NPA07jT5Iwg0/jT/Qv2BMRkhEhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v475",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v476",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v475",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v476",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v652",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v568",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v530",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v614",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v652",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v568",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v530",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v614",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002a5538038062002a55833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b612739806200031c6000396000f3fe6080604052600436106100bd5760003560e01c80638323075711610079578063a209ad4e11610056578063a209ad4e14610184578063ab53f2c614610197578063b608682e146101ba578063e533a29d146101cd57005b806383230757146101495780638b9fadc81461015e5780638e3147691461017157005b80631e93b0f1146100c65780632c10a159146100ea5780635471c5a8146100fd5780636008ec02146101105780636cec5d46146101235780637eea518c1461013657005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f836600461203d565b6101e0565b6100c461010b36600461203d565b61038a565b6100c461011e36600461203d565b610540565b6100c461013136600461203d565b61078a565b6100c461014436600461203d565b610978565b34801561015557600080fd5b506001546100d7565b6100c461016c36600461203d565b610ad9565b6100c461017f36600461203d565b610c70565b6100c461019236600461203d565b610e06565b3480156101a357600080fd5b506101ac610fea565b6040516100e1929190612060565b6100c46101c836600461203d565b611087565b6100c46101db36600461203d565b6112dd565b6101f06001600054146009611478565b61020a8135158061020357506001548235145b600a611478565b60008080556002805461021c906120bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610248906120bd565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad91906121dc565b90506102c081606001514310600b611478565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516102ef9190612255565b60405180910390a1610308816020015134146008611478565b610310611de7565b815181516001600160a01b0390911690526020808301805183518301526040808501518451820152835133606091820152838501805160329081905281519095019490945283516000920191909152915143920191909152516103739080612295565b6020820151608001526103858161149d565b505050565b61039a600f600054146035611478565b6103b4813515806103ad57506001548235145b6036611478565b6000808055600280546103c6906120bd565b80601f01602080910402602001604051908101604052809291908181526020018280546103f2906120bd565b801561043f5780601f106104145761010080835404028352916020019161043f565b820191906000526020600020905b81548152906001019060200180831161042257829003601f168201915b505050505080602001905181019061045791906122ad565b905061046c8161014001514310156037611478565b7f07e6cc8e2fc82a9375e0bae2c8fb95cb33ae4f7121cc887b7bcd23b343d8ec058260405161049b9190612255565b60405180910390a16104af34156033611478565b80516104e3906001600160a01b031633146104d95760608201516001600160a01b031633146104dc565b60015b6034611478565b80606001516001600160a01b03166108fc8261012001519081150290604051600060405180830381858888f19350505050158015610525573d6000803e3d6000fd5b506000808055600181905561053c90600290611e4e565b5050565b610550600f600054146030611478565b61056a8135158061056357506001548235145b6031611478565b60008080556002805461057c906120bd565b80601f01602080910402602001604051908101604052809291908181526020018280546105a8906120bd565b80156105f55780601f106105ca576101008083540402835291602001916105f5565b820191906000526020600020905b8154815290600101906020018083116105d857829003601f168201915b505050505080602001905181019061060d91906122ad565b90506106256040518060200160405280600081525090565b61063782610140015143106032611478565b6040805184358152602080860135908201527fea000e8659c7e672bed2a94f3c86bc63332109d7d62cfa77ba3fa3aeb00b34bc910160405180910390a16106803415602e611478565b8151610698906001600160a01b03163314602f611478565b60e0820151602084013514156106b157600181526106cf565b60e0820151602084013511156106ca57600281526106cf565b600081525b6106d7611e8b565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015260c08085015183519091015260e0808501518351909101528251908201515261010083015161075890600190612295565b602080830180519091019190915280514360409091015261012084015190516060015261078481611790565b50505050565b61079a600a60005414601c611478565b6107b4813515806107ad57506001548235145b601d611478565b6000808055600280546107c6906120bd565b80601f01602080910402602001604051908101604052809291908181526020018280546107f2906120bd565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050806020019051810190610857919061234e565b905061086b8161012001514310601e611478565b6040805183358152602080850135908201527f3a2da3b5f0d16a5582060fc46cee8868eca4f1b43cc1da4ad78f574e7785f343910160405180910390a16108b43415601a611478565b80516108cc906001600160a01b03163314601b611478565b6108d4611f20565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08086015185519091015260e08086015185519091015283518683013561010091820152828501805160009081905281519094019390935282514392019190915284015190519091015261038581611a29565b610988600160005414600d611478565b6109a28135158061099b57506001548235145b600e611478565b6000808055600280546109b4906120bd565b80601f01602080910402602001604051908101604052809291908181526020018280546109e0906120bd565b8015610a2d5780601f10610a0257610100808354040283529160200191610a2d565b820191906000526020600020905b815481529060010190602001808311610a1057829003601f168201915b5050505050806020019051810190610a4591906121dc565b9050610a598160600151431015600f611478565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051610a889190612255565b60405180910390a1610a9c3415600c611478565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610525573d6000803e3d6000fd5b610ae9600d60005414602b611478565b610b0381351580610afc57506001548235145b602c611478565b600080805560028054610b15906120bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610b41906120bd565b8015610b8e5780601f10610b6357610100808354040283529160200191610b8e565b820191906000526020600020905b815481529060010190602001808311610b7157829003601f168201915b5050505050806020019051810190610ba691906123e3565b9050610bbb816101600151431015602d611478565b7f5fe72957f5855f25860ec325face1305075da64ba42ea3b56918fbe46e26b40482604051610bea9190612255565b60405180910390a1610bfe34156029611478565b8051610c32906001600160a01b03163314610c285760608201516001600160a01b03163314610c2b565b60015b602a611478565b80516101408201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610525573d6000803e3d6000fd5b610c806007600054146017611478565b610c9a81351580610c9357506001548235145b6018611478565b600080805560028054610cac906120bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd8906120bd565b8015610d255780601f10610cfa57610100808354040283529160200191610d25565b820191906000526020600020905b815481529060010190602001808311610d0857829003601f168201915b5050505050806020019051810190610d3d919061248b565b9050610d528161010001514310156019611478565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de882604051610d819190612255565b60405180910390a1610d9534156015611478565b8051610dc9906001600160a01b03163314610dbf5760608201516001600160a01b03163314610dc2565b60015b6016611478565b805160e08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610525573d6000803e3d6000fd5b610e166007600054146012611478565b610e3081351580610e2957506001548235145b6013611478565b600080805560028054610e42906120bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6e906120bd565b8015610ebb5780601f10610e9057610100808354040283529160200191610ebb565b820191906000526020600020905b815481529060010190602001808311610e9e57829003601f168201915b5050505050806020019051810190610ed3919061248b565b9050610ee781610100015143106014611478565b6040805183358152602080850135908201527f7d7741a24b17d1850d95beda5136388f520bc575ba9499f2f40fdfa7647ad82f910160405180910390a1610f3034156010611478565b6060810151610f4b906001600160a01b031633146011611478565b610f53611e8b565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015185519091015260a08086015185519091015260c08086015185519091015283518683013560e091820152828501805160009081905281519094019390935282514392019190915284015190519091015261038581611790565b600060606000546002808054610fff906120bd565b80601f016020809104026020016040519081016040528092919081815260200182805461102b906120bd565b80156110785780601f1061104d57610100808354040283529160200191611078565b820191906000526020600020905b81548152906001019060200180831161105b57829003601f168201915b50505050509050915091509091565b611097600d600054146026611478565b6110b1813515806110aa57506001548235145b6027611478565b6000808055600280546110c3906120bd565b80601f01602080910402602001604051908101604052809291908181526020018280546110ef906120bd565b801561113c5780601f106111115761010080835404028352916020019161113c565b820191906000526020600020905b81548152906001019060200180831161111f57829003601f168201915b505050505080602001905181019061115491906123e3565b905061116c6040518060200160405280600081525090565b61117e82610160015143106028611478565b6040805184358152602080860135908201527fc99abf4f2124876ba493db2d7e7c61c978cfbe8e164cbc61bfbbca544c6a7a4e910160405180910390a16111c734156024611478565b60608201516111e2906001600160a01b031633146025611478565b610100820151602084013514156111fc576001815261121b565b61010082015160208401351115611216576002815261121b565b600081525b611223611f20565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015260a08085015183519091015260c08085015183519091015260e08085015183519091015261010080850151835190910152825190820151526101208301516112b190600190612295565b602080830180519091019190915280514360409091015261014084015190516060015261078481611a29565b6112ed600a600054146021611478565b6113078135158061130057506001548235145b6022611478565b600080805560028054611319906120bd565b80601f0160208091040260200160405190810160405280929190818152602001828054611345906120bd565b80156113925780601f1061136757610100808354040283529160200191611392565b820191906000526020600020905b81548152906001019060200180831161137557829003601f168201915b50505050508060200190518101906113aa919061234e565b90506113bf8161012001514310156023611478565b7fb9845e39b4c5715a32bc04872bfe1723e638b66042817fdde0a44e5b0466b6dc826040516113ee9190612255565b60405180910390a16114023415601f611478565b8051611436906001600160a01b0316331461142c5760608201516001600160a01b0316331461142f565b60015b6020611478565b80606001516001600160a01b03166108fc8261010001519081150290604051600060405180830381858888f19350505050158015610525573d6000803e3d6000fd5b8161053c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080518082019091526000808252602082015260028260200151604001511015611637578151604001516020830151606001516114db9190612295565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101919091528251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931692840192909252808501805151608080860191909152815183015160a0860152815184015160c08601529051015160e0840152835161010084015260076000554360015590516116139183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610784929190611f8c565b6020808301519081015190511415611655576001602082015261167b565b6020808301519081015190511115611673576002602082015261167b565b600060208201525b60018160200151141561170c57815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156116c8573d6000803e3d6000fd5b50815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610525573d6000803e3d6000fd5b60028160200151141561176657815180516020909101516001600160a01b03909116906108fc9061173e906002612514565b6040518115909202916000818181858888f19350505050158015610525573d6000803e3d6000fd5b8160000151606001516001600160a01b03166108fc836000015160200151600261173e9190612514565b60408051808201909152600080825260208201526003826020015160200151106117bb5760006117d2565b6020820151516001146117cf5760016117d2565b60005b1561190a578160000151604001518260200151604001516117f39190612295565b81600001818152505061186b60405180610160016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a09081015190850152855160c09081015190850152855160e09081015190850152818601805183015161010086015251909201516101208401528351610140840152600f60005543600155905161161391839101612533565b8160000151604001518260200151604001516119269190612295565b81602001818152505061199760405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a09081015190850152855160c0908101519085015281860180515160e0860152519092015161010084015283810151610120840152600a600055436001559051611613918391016125c6565b6040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c08201529082015151600114808252611a76576001611a79565b60005b1515602080830191909152828101510151600311611a98576000611a9e565b80602001515b15611bec57816000015160400151826020015160400151611abf9190612295565b816040018181525050611b3e60405180610180016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015190850152855160a09081015190850152855160c09081015190850152855160e09081015190850152855161010090810151908501528186018051830151610120860152519092015161014084015283820151610160840152600d6000554360015590516116139183910161264d565b815160e0015160011460808201819052611c07576000611c0d565b80602001515b15611c2e57815160800151611c2490601490612295565b6060820152611c8f565b8060800151611c3e576000611c41565b80515b611c5f578060800151611c58578060200151611c62565b6000611c62565b60015b15611c77578151608001516060820152611c8f565b815160800151611c89906014906126ec565b60608201525b8060800151611c9f576001611ca2565b60005b151560c08201528051611cb6576000611cbc565b8060c001515b15611cdd57815160a00151611cd390601490612295565b60a0820152611d3c565b8051611cea576000611cf0565b80608001515b611d0b578051611d04578060c00151611d0e565b6000611d0e565b60015b15611d2457815160a09081015190820152611d3c565b815160a00151611d36906014906126ec565b60a08201525b611d44611de7565b82515181516001600160a01b039182169052835160209081015183518201528451604090810151845190910152845160609081015184519316928101929092529083015181830180519190915260a0840151905190910152825160c00151611dae90600190612295565b6020808301805160409081019390935290850180519092015181516060908101919091529151909101519051608001526103858161149d565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611e496040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b508054611e5a906120bd565b6000825580601f10611e6a575050565b601f016020900490600052602060002090810190611e889190612010565b50565b6040518060400160405280611ef060405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8152602001611e496040518060800160405280600081526020016000815260200160008152602001600081525090565b6040518060400160405280611ef060405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054611f98906120bd565b90600052602060002090601f016020900481019282611fba5760008555612000565b82601f10611fd357805160ff1916838001178555612000565b82800160010185558215612000579182015b82811115612000578251825591602001919060010190611fe5565b5061200c929150612010565b5090565b5b8082111561200c5760008155600101612011565b60006040828403121561203757600080fd5b50919050565b60006040828403121561204f57600080fd5b6120598383612025565b9392505050565b82815260006020604081840152835180604085015260005b8181101561209457858101830151858201606001528201612078565b818111156120a6576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806120d157607f821691505b6020821081141561203757634e487b7160e01b600052602260045260246000fd5b604051610160810167ffffffffffffffff8111828210171561212457634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff8111828210171561212457634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561212457634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561212457634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146121d757600080fd5b919050565b6000608082840312156121ee57600080fd5b6040516080810181811067ffffffffffffffff8211171561221f57634e487b7160e01b600052604160045260246000fd5b60405261222b836121c0565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b8135815260408101602083013580151580821461227157600080fd5b806020850152505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156122a8576122a861227f565b500190565b600061016082840312156122c057600080fd5b6122c86120f2565b6122d1836121c0565b815260208301516020820152604083015160408201526122f3606084016121c0565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152508091505092915050565b6000610140828403121561236157600080fd5b61236961212a565b612372836121c0565b81526020830151602082015260408301516040820152612394606084016121c0565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b600061018082840312156123f657600080fd5b6123fe61215c565b612407836121c0565b81526020830151602082015260408301516040820152612429606084016121c0565b60608201526080838101519082015260a0808401519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160928301519281019290925250919050565b6000610120828403121561249e57600080fd5b6124a661218e565b6124af836121c0565b815260208301516020820152604083015160408201526124d1606084016121c0565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600081600019048311821515161561252e5761252e61227f565b500290565b81516001600160a01b0316815261016081016020830151602083015260408301516040830152606083015161257360608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525092915050565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161260660608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b81516001600160a01b0316815261018081016020830151602083015260408301516040830152606083015161268d60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151818401525092915050565b6000828210156126fe576126fe61227f565b50039056fea2646970667358221220ccaee5b9bf8d6055ebdcd7c685f1a6c6aba33c3c8567a7bcab8839aad95cec3564736f6c634300080c0033`,
  BytecodeLen: 10837,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:156:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:165:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:249:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:249:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:249:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:173:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:182:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:206:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:216:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:222:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:230:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:188:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:196:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
