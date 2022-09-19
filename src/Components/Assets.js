import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Container,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import "../Styles/Assests.css";
import { useDispatch, useSelector } from "react-redux";
import assetsState from "../hooks/assetsState";
import { setAssets } from "../Store/actions/assets";
import ButtonContained from "./ButtonContained";

function Assets() {
	const { fetchAllAssests } = assetsState();
	let { assets } = useSelector((state) => state.assets);
	const dispatch = useDispatch();

	const [windowWidth, setwindowWidth] = useState(window.innerWidth);
	const [toggleAsset, setToggleAsset] = useState(true);
	assets = toggleAsset ? assets.slice(0, 50) : assets.slice(0, 100);
	console.log(toggleAsset);
	const getWindowSize = (value) => {
		setwindowWidth(value);
	};

	useEffect(() => {
		window.addEventListener("resize", (e) => {
			getWindowSize(window.innerWidth);
		});
	}, []);

	useEffect(() => {
		getAllAssets();
	}, []);

	useEffect(() => {
		setInterval(getAllAssets, 3000);
	}, []);

	const getAllAssets = async () => {
		try {
			const resp = await fetchAllAssests();
			dispatch(setAssets(resp.data.data));
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Box>
			<TableContainer>
				<Table
					style={{
						width: "74%",
						margin: "auto",
						overflowX: "hidden",
						backgroundColor: "#fff",
						boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
						marginTop: windowWidth >= 1200 ? "5%" : "17%",
					}}>
					<TableHead
						style={{
							backgroundColor: "#f8f8f8",
							padding: "-1rem",
						}}>
						<TableCell>
							{windowWidth >= 500 ? (
								<Typography style={{ fontSize: "12px", marginLeft: "1rem" }}>
									Rank
								</Typography>
							) : (
								<></>
							)}
						</TableCell>

						<TableCell style={{ marginLeft: "-3rem", fontSize: "12px" }}>
							Name
						</TableCell>
						<TableCell align="right">
							<Typography
								style={{
									fontSize: "12px",
									// marginLeft: windowWidth <= 420 ? "-10rem" : "5rem",
								}}>
								Price
							</Typography>
						</TableCell>
						{windowWidth >= 1200 ? (
							<TableCell align="right">
								<Typography style={{ fontSize: "12px" }}>MarketCap</Typography>
							</TableCell>
						) : (
							<></>
						)}
						<TableCell align="right">
							<Typography style={{ fontSize: "12px" }}>VWAP(24Hr)</Typography>
						</TableCell>
						{windowWidth >= 1200 ? (
							<TableCell align="right">
								<Typography style={{ fontSize: "12px" }}>Supply</Typography>
							</TableCell>
						) : (
							<></>
						)}
						{windowWidth <= 820 ? (
							<></>
						) : (
							<TableCell align="right">
								<Typography style={{ fontSize: "12px" }}>
									Volume(24Hr)
								</Typography>
							</TableCell>
						)}

						{windowWidth <= 700 ? (
							<></>
						) : (
							<TableCell align="right">
								<Typography style={{ fontSize: "12px" }}>
									Change(24Hr)
								</Typography>
							</TableCell>
						)}
					</TableHead>

					<TableBody>
						{assets.map((item) => {
							let itemSymbol = item.symbol;
							return (
								<TableRow className="table-rows">
									<TableCell
										style={{
											textAlign: "center",

											padding: "-1rem 0",
										}}>
										{windowWidth >= 500 ? (
											<Typography
												style={{
													fontSize: "15px",
												}}>
												{item.rank}
											</Typography>
										) : (
											<></>
										)}
									</TableCell>

									<TableCell style={{}}>
										<Box style={{ display: "flex" }}>
											<Box>
												<img
													src={`https://assets.coincap.io/assets/icons/${itemSymbol.toLowerCase()}%402x.png`}
													alt={item.id}
													width={35}
													height={35}
												/>
											</Box>

											<Box
												style={{
													display: "flex",
													flexDirection: "column",
													marginLeft: "5px",
												}}>
												<Box
													style={{
														fontSize: windowWidth <= 420 ? "14px" : "16px",
													}}>
													{item.id}
												</Box>
												<Box style={{ fontSize: "11px" }}>{item.symbol}</Box>
											</Box>
										</Box>
									</TableCell>
									<TableCell align="right">
										<Typography
											style={{
												fontSize: windowWidth <= 420 ? "16px" : "16px",
											}}>
											${parseFloat(item.priceUsd).toFixed(2)}
										</Typography>
									</TableCell>
									{windowWidth >= 1200 ? (
										<TableCell align="right">
											<Typography style={{ fontSize: "16px" }}>
												${parseFloat(item.marketCapUsd.slice(0, 5)) / 100}b
											</Typography>
										</TableCell>
									) : (
										<></>
									)}
									<TableCell align="right">
										<Typography
											style={{
												fontSize: windowWidth <= 420 ? "16px" : "16px",
											}}>
											${parseFloat(item.vwap24Hr).toFixed(2)}
										</Typography>
									</TableCell>
									{windowWidth >= 1200 ? (
										<TableCell align="right">
											<Typography style={{ fontSize: "16px" }}>
												{parseFloat(item.supply.slice(0, 4)) / 100}m
											</Typography>
										</TableCell>
									) : (
										<></>
									)}
									{windowWidth <= 820 ? (
										<></>
									) : (
										<TableCell align="right">
											<Typography style={{ fontSize: "16px" }}>
												{(parseFloat(item.volumeUsd24Hr) / 1000000000).toFixed(
													2
												)}
												b
											</Typography>
										</TableCell>
									)}

									{windowWidth <= 700 ? (
										<></>
									) : (
										<TableCell align="right">
											<Typography style={{ fontSize: "16px" }}>
												{parseFloat(item.changePercent24Hr).toFixed(2)}%
											</Typography>
										</TableCell>
									)}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<Box
				style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
				<ButtonContained
					name={toggleAsset ? "View More" : "View Less"}
					click={() => setToggleAsset(!toggleAsset)}
				/>
			</Box>
		</Box>
	);
}
{
}

export default Assets;
