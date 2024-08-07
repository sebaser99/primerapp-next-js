'use client';
import React from "react"
import { Provider } from "react-redux"
import { store } from "."

export interface Props {
    children: React.ReactNode
}

export const Providers = ({children}:Props) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
