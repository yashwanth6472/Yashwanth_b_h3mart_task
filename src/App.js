import React from "react";
import Navigation from "./Navigation/Navigation";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import {
	applyMiddleware,
	configureStore,
	combineReducers,
} from "@reduxjs/toolkit";
import assetReducer from "./Store/reducers/assets";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./Store/sagas";
// const sagaMiddleware = createSagaMiddleware();
// const store = configureStore(
// 	{
// 		reducer: {
// 			assets: assetReducer,
// 		},
// 	},
// 	applyMiddleware(sagaMiddleware)
// );
// sagaMiddleware.run(mySaga);
const rootReducer = combineReducers({ assetReducer });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

function App() {
	return (
		<Provider store={store}>
			<div>
				<Navigation></Navigation>
			</div>
		</Provider>
	);
}

export default App;
