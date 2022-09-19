import React, { useState, useEffect, useRef } from "react";
import { assets } from "../api/apiServices";
function assetsState() {
	const fetchAllAssests = async () => {
		try {
			const res = await assets.getAssets();
			if (res.status != 200) {
				throw Error(res);
			}
			return res;
		} catch (err) {
			throw Error(err);
		}
	};

	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	}

	return { fetchAllAssests: fetchAllAssests, usePrevious: usePrevious };
}

export default assetsState;
