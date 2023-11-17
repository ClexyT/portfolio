import React from 'react'

const useTranslate = (languageA, languageB) => {
  let Language
  const [isTranslate, setTranslate] = React.useState(() => {
    if (navigator.language.startsWith('es')) {
      return (true)
    } else {
      return (false)
    }
  })
  const handleTranslate = () => {
    setTranslate(() => {
      if (isTranslate === true) {
        return false
      } else {
        return true
      }
    })
  }
  if (isTranslate === true) {
    Language = languageB
  } else if (isTranslate === false) {
    Language = languageA
  }
  return { handleTranslate, Language, isTranslate }
}
export default useTranslate
