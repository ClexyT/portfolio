import React from 'react'

const useTranslate = () => {
  const [isTranslate, setTranslate] = React.useState(() => {
    if (navigator.language.startsWith('es')) {
      return (true)
    } else {
      return (false)
    }
  })
  const TranslateButton = () => {
    setTranslate(() => {
      if (isTranslate === true) {
        return false
      } else {
        return true
      }
    })
  }
  const handleClick = () => {
    // Add your logic here
    // You can access the 'variable' state variable here
  }

  return { variable, setVariable, handleClick }
}

export default useTranslate
