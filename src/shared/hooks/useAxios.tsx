import { useState, useEffect } from 'react';
import axios from 'axios';
import { dataUrl } from '../urls'

axios.defaults.baseURL = dataUrl;

export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState<any>([]);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch( error ) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading, setResponse, setLoading };
};
