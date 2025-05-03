import { useState, useEffect } from 'react'

export function useBlink(intervalMs = 5000, durationMs = 200) {
  const [blink, setBlink] = useState(false)
  useEffect(() => {
    const iv = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), durationMs)
    }, intervalMs)
    return () => clearInterval(iv)
  }, [intervalMs, durationMs])
  return blink
}
