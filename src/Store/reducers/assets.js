import { FETCH_ALL_ASSETS } from "../actions/assets";

const initialState = {
	assets: [],
};

const assetReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_ASSETS:
			return { ...state, assets: action.payload };

		default:
			return state;
	}
};

export default assetReducer;
