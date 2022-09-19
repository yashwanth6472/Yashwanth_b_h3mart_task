import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Box,
	Card,
	CardContent,
	Grid,
	ListItem,
	Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Assets from "../Components/Assets";
import ButtonContained from "../Components/ButtonContained";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Home.css";
const contentArr = [
	{
		title: "MARKET CAP",
		value: "$1.28T",
	},
	{
		title: "EXCHANGE VOL",
		value: "$32.84B",
	},
	{
		title: "ASSETS",
		value: "2,295",
	},
	{
		title: "EXCHANGES",
		value: "73",
	},
	{
		title: "MARKETS",
		value: "13988",
	},
	{
		title: "BTC DOM INDEX",
		value: "30.2%",
	},
];
function Home() {
	const [items, setitem] = useState(contentArr);
	const [windowWidth, setwindowWidth] = useState(window.innerWidth);
	const [toggleButton, setToggleButton] = useState(false);
	const getWindowSize = (value) => {
		setwindowWidth(value);
	};

	useEffect(() => {
		window.addEventListener("resize", (e) => {
			getWindowSize(window.innerWidth);
		});
	}, []);
	console.log(toggleButton);
	return (
		<Box>
			<Card className="card-container">
				<CardContent className="cardContent-List">
					{items.map((item, index) => {
						const { title, value } = item;

						return (
							<>
								<ListItem className="cardContent-List-items">
									<Typography
										style={{
											fontWeight: "450",
											fontSize: "1.1rem",
											letterSpacing: "-0.5px",
											marginTop: "-12px",
										}}>
										{title}
									</Typography>
									<Typography
										style={{
											fontWeight: "450",
											fontSize: "1.4rem",
											lineHeight: "30px",
										}}>
										{value}
									</Typography>
								</ListItem>
							</>
						);
					})}
				</CardContent>

				{/* <button onMouseDown={() => setToggleButton(!toggleButton)}>
					toggle
				</button> */}
			</Card>

			<Card
				className="responsive-card-container"
				style={{
					height: toggleButton ? "22rem" : "3rem",
				}}>
				<CardContent className="responsive-card-content-list">
					<Typography
						className="responsive-card-content-list-header"
						onClick={() => setToggleButton(!toggleButton)}>
						Market Snapshot
						{toggleButton ? (
							<FontAwesomeIcon
								icon={faSortDown}
								style={{ float: "right" }}></FontAwesomeIcon>
						) : (
							<FontAwesomeIcon
								icon={faSortDown}
								style={{
									float: "right",
									transform: "rotate(90deg)",
								}}></FontAwesomeIcon>
						)}
					</Typography>

					{items.map((item) => {
						return (
							<Box
								style={{
									display: "flex",
									justifyContent: "space-between",
									margin: "0 1.5rem",
									borderBottom: "1px solid rgba(0,0,0,0.1)",
									color: "#fff",
									padding: "0.7rem 0",
								}}>
								<Typography>{item.title} :</Typography>
								<Typography>{item.value}</Typography>
							</Box>
						);
					})}
				</CardContent>
			</Card>
			<Assets toggleButton={toggleButton}></Assets>
		</Box>
	);
}

export default Home;
