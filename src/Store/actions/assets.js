export const FETCH_ALL_ASSETS = "FETCH_ALL_ASSETS";

export const setAssets = (assets) => {
	return {
		type: FETCH_ALL_ASSETS,
		payload: assets,
	};
};
