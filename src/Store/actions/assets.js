export const GET_ASSET_FETCH = "GET_ASSET_FETCH";
export const GET_ASSET_SUCCESS = "GET_USERS_SUCCESS";
export const getAssetFetch = (assets) => {
	return {
		type: GET_ASSET_FETCH,
		payload: assets,
	};
};
