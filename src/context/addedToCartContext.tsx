'use client'

import { createContext, useState } from 'react'

// Define the context type
type AddedToCartContextType = {
  addedToCart: boolean
  setAddedToCart: React.Dispatch<React.SetStateAction<boolean>>
}

// Create context with default undefined
export const addedToCartContext = createContext<AddedToCartContextType | undefined>(undefined)

export const AddedToCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [addedToCart, setAddedToCart] = useState(false)

  return (
    <addedToCartContext.Provider value={{ addedToCart, setAddedToCart }}>
      {children}
    </addedToCartContext.Provider>
  )
}
