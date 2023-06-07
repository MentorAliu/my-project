import { handleResponse } from '../utils/handleResponse'

export const updateUser = async (userId, payload) => {
  const response = await fetch(
    `https://dummyjson.com/users/${userId}`,
    {
      method: 'PUT',
      body: JSON.stringify(payload),
    }
  ).then(handleResponse)
  return response
}

export const deleteUser = async userId => {
  try {
    const response = await fetch(
      `https://dummyjson.com/users/${userId}`,
      {
        method: 'DELETE',
      }
    )
    return await handleResponse(response)
  } catch (error) {
    return error
  }
}
