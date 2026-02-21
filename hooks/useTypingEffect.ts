'use client'

import { useState, useEffect } from 'react'

export function useTypingEffect(phrases: string[], typingSpeed = 80, erasingSpeed = 40, pauseMs = 2000) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    if (isTyping) {
      if (text.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, pauseMs)
        return () => clearTimeout(timeout)
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1))
        }, erasingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        setIsTyping(true)
      }
    }
  }, [text, isTyping, phraseIndex, phrases, typingSpeed, erasingSpeed, pauseMs])

  return text
}
