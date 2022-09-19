import { GET_ASSET_FETCH, GET_ASSET_SUCCESS } from "../actions/assets";

const initialState = {
	assets: [],
};

const assetReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ASSET_SUCCESS:
			return { ...state, assets: action.asset };

		default:
			return state;
	}
};

export default assetReducer;
