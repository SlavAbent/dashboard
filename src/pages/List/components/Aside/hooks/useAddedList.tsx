import axios from 'axios'

export const useAddedList = () => {
  const addListOnAside = (url, name, color) => {
    return axios.post(url, {
      name,
      colorId: color
    })
  }

  const deleteListOnAside = (url, id) => axios.delete(url + id)

  return {
    addListOnAside,
    deleteListOnAside,
  }
}
