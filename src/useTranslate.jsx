import { createContext, useContext, useState } from 'react'

const TranslateContext = createContext()

export const useTranslate = (languageA, languageB) => {
  const contextValue = useContext(TranslateContext)

  if (!contextValue) {
    throw new Error('useTranslate debe ser usado dentro de un TranslateProvider')
  }

  return {
    ...contextValue,
    Language: contextValue.isTranslate ? languageB : languageA
  }
}

export const TranslateProvider = ({ children }) => {
  const [isTranslate, setTranslate] = useState(() => {
    return navigator.language.startsWith('es')
  })

  const handleTranslate = () => {
    setTranslate((prevTranslate) => !prevTranslate)
  }

  const value = {
    handleTranslate,
    isTranslate
  }

  return (
    <TranslateContext.Provider value={value}>
      {children}
    </TranslateContext.Provider>
  )
}
