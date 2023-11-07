import { useWalletConnection } from "../hooks/useWalletConnection"
import React, { createContext, useContext } from "react"

const WalletConnectionContext = createContext()

export const useWalletConnectionContext = () => {
  return useContext(WalletConnectionContext)
}

export const WalletConnectionProvider = ({ children }) => {
  const walletConnection = useWalletConnection()

  return (
    <WalletConnectionContext.Provider value={walletConnection}>
      {children}
    </WalletConnectionContext.Provider>
  )
}
