import { Dispatch, useEffect, useState } from "react";

//this is used by the use*Storage hooks
const useStorage = (key: string, defaultValue: unknown, storageObject: Storage): [unknown, Dispatch<unknown>, () => void] => {
	const PREFIX = "info4430-";
	const prefixedKey = PREFIX + key;

	const [value, setValue] = useState(() => {
		const jsonValue = storageObject.getItem(prefixedKey);
		if (jsonValue != null) {
			return JSON.parse(jsonValue);
		}

		if (typeof defaultValue === "function") {
			return defaultValue();
		} else {
			return defaultValue;
		}
	});

	useEffect(() => {
		if (value === undefined) return storageObject.removeItem(prefixedKey);
		storageObject.setItem(prefixedKey, JSON.stringify(value));
	}, [prefixedKey, value, storageObject]);

	const remove = () => {
		setValue(undefined);
	};

	return [value, setValue, remove];
};

//uses the sessionStorage
export const useSessionStorage = (key: string, defaultValue: unknown) => {
	return useStorage(key, defaultValue, window.sessionStorage);
};

//uses the localStorage
export const useLocalStorage = (key: string, defaultValue: unknown) => {
	return useStorage(key, defaultValue, window.localStorage);
};
