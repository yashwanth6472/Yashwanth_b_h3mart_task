import React from "react";
import Navigation from "./Navigation/Navigation";
import ReduxThunk from "redux-thunk";
import { createStoreHook, Provider } from "react-redux";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import assetReducer from "./Store/reducers/assets";

const store = configureStore(
	{
		reducer: {
			assets: assetReducer,
		},
	},
	applyMiddleware(ReduxThunk)
);

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
