export const handleResponse = async response => {
  try {
    if (!response.ok) {
      throw new Error(
        `Some went wrong with status code ${response.status}`
      )
    }
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}
