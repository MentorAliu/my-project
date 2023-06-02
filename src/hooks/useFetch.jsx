import { useEffect, useState } from 'react'
import { baseUrl } from '../utils/constants'
import { handleResponse } from '../utils/handleResponse'

export const useFetch = (url, options) => {
  const newUrl = new URL(`${baseUrl}${url}`)
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    if (!url) {
      return
    }

    const abortController = new AbortController()

    fetch(newUrl, {
      method: 'GET',
      signal: abortController.signal,
      ...options,
    })
      .then(handleResponse)
      .then(data =>
        setState({
          data: data,
          isLoading: false,
          error: null,
        })
      )
      .catch(error =>
        setState({
          data: null,
          isLoading: false,
          error: error.message,
        })
      )

    return () => abortController.abort()
  }, [url])
  return state
}
