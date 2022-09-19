import { call, put, takeEvery } from "redux-saga/effects";
import { assets } from "../api/apiServices";
import { GET_ASSET_FETCH, GET_ASSET_SUCCESS } from "./actions/assets";
function* fetchAssets(action) {
	try {
		const asset = yield call();
	} catch (error) {}
}

function* workGetAssestFetch() {
	const asset = yield assets.getAssets();
	console.log("---------------------->", asset);
	yield put({ type: GET_ASSET_SUCCESS, asset: asset.data.data });
}

function* mySaga() {
	yield takeEvery(GET_ASSET_FETCH, workGetAssestFetch);
}

export default mySaga;
