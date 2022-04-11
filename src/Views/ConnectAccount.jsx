import React from "react";

export default function ConnectAccount({connect}){
  connect()
  return(
    <div>
      <h3>Connecting to MyAlgo Wallet...</h3>
    </div>
  )
}