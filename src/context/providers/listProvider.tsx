import React, { FC, createContext } from "react";

import { IListContextData } from "../../pages/List/model/index.model";
import { useAxios } from "hooks/useAxios";

export interface ListProviderProps {
  children: React.ReactNode
}

const defaultValue = {
	response: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setResponse: () => {},
	loading: true,
	error: "",
};

export const ListContext = createContext<IListContextData>(defaultValue);

export const ListProvider:FC<ListProviderProps> = ({ children }) => {
	const { response, error, loading, setResponse } = useAxios({
		url: "/lists?_expand=color&_embed=tasks",
		method: "GET",
	});

	return (
		<ListContext.Provider value={{ response, error, loading, setResponse }}>
			{children}
		</ListContext.Provider>
	);
};
