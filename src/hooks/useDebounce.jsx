import { useEffect, useState } from 'react'

export const useDebounce = (value, time = 500) => {
  const [debounce, setDebounce] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(value)
    }, time)

    return () => clearTimeout(timeout)
  }, [value])
  return debounce
}
