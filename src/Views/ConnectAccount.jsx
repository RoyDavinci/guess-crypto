import React, { useEffect } from "react";

export default function ConnectAccount({connect}){
  useEffect(() => {
    connect()
  }, [connect])

  return(
    <div>
      <h3>Connecting to MyAlgo Wallet...</h3>
    </div>
  )
}