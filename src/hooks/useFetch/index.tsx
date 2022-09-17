import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

export const useFetch = (url: string) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  const awaitingData = async () => {
    try{
      setLoading(true)
      const response: AxiosResponse = await axios.get(url)
      setData(response.data)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    awaitingData()
  }, [])

  return {
    data, error, loading
  }
}
