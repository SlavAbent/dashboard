import { useEffect, useState } from "react";

import axios from "axios";
import { dataUrl } from "../shared/urls";

axios.defaults.baseURL = dataUrl;

export const useAxios = (axiosParams) => {
	const [response, setResponse] = useState<any>([]);
	const [error, setError] = useState<any | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async (params) => {
			setLoading(true);
			try {
				const result = await axios.request(params);
				setResponse(result.data);
				setError(null);
			} catch( error ) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData(axiosParams);
	}, []);

	return { response, error, loading, setResponse, setLoading };
};
