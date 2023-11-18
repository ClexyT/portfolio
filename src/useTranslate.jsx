import React, { createContext, useContext, useState } from 'react';

const TranslateContext = createContext();

export const useTranslate = (languageA, languageB) => {
  const contextValue = useContext(TranslateContext);

  if (!contextValue) {
    throw new Error("useTranslate debe ser usado dentro de un TranslateProvider");
  }

  return contextValue;
};

export const TranslateProvider = ({ children }) => {
  const [isTranslate, setTranslate] = useState(() => {
    return navigator.language.startsWith('es');
  });

  const handleTranslate = () => {
    setTranslate((prevTranslate) => !prevTranslate);
  };

  const Language = isTranslate ? languageB : languageA;

  const value = {
    handleTranslate,
    isTranslate,
    Language,
  };

  return (
    <TranslateContext.Provider value={value}>
      {children}
    </TranslateContext.Provider>
  );
};
