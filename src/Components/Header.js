import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faCog,
	faBars,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ButtonContained from "./ButtonContained";
import {
	Box,
	Divider,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import "../Styles/Header.css";

const sidebar = [
	{
		id: 1,
		title: "Coins",
		image: require("../assests/bitcoin.png"),
	},
	{
		id: 2,
		title: "Exchanges",
		image: require("../assests/Exchange.png"),
	},
	{
		id: 3,
		title: "Swap",
		image: require("../assests/shuffle.png"),
	},
	{
		id: 4,
		title: "API",
		image: require("../assests/shuffle.png"),
	},
	{
		id: 5,
		title: "Settings",
		image: require("../assests/settings.png"),
	},
];

function Header() {
	const [toggleBar, setToogleBar] = useState(false);
	return (
		<Box className="container">
			<Box className="sub-container">
				<ListItem style={{ fontSize: "16px", fontWeight: "350" }}>
					Coins
				</ListItem>
				<ListItem style={{ fontSize: "16px", fontWeight: "350" }}>
					Exchange
				</ListItem>
				<ListItem style={{ fontSize: "16px", fontWeight: "350" }}>
					Swap
				</ListItem>
			</Box>
			<Box>
				<Box>
					<img
						src={require("../assests/icon.png")}
						width={100}
						height={100}
						style={{ marginTop: -20, cursor: "pointer" }}
						className="img-box"
					/>
				</Box>
			</Box>
			<Box className="sub-container">
				{" "}
				<ListItemButton component="a" href="#simple-list">
					<FontAwesomeIcon icon={faSearch} style={{ fontSize: "15px" }} />
				</ListItemButton>
				<ListItemButton component="a" href="#simple-list">
					<FontAwesomeIcon icon={faCog} style={{ fontSize: "15px" }} />
				</ListItemButton>
				<ListItemButton component="a" href="#simple-list">
					<ButtonContained name={"Connect Wallet"} />
				</ListItemButton>
			</Box>

			<Box className="responsive-box">
				<ListItemButton component="a" href="#simple-list">
					<FontAwesomeIcon icon={faSearch} style={{ fontSize: "18px" }} />
				</ListItemButton>
				<ListItemButton component="a" href="#simple-list">
					<img src={require("../assests/icon.png")} width={100} height={100} />
				</ListItemButton>
				<ListItemButton
					component="a"
					href="#simple-list"
					onClick={() => setToogleBar(!toggleBar)}>
					<FontAwesomeIcon
						icon={toggleBar ? faTimes : faBars}
						style={{ fontSize: "25px" }}
					/>
				</ListItemButton>
			</Box>

			<Box
				className="responsive-navbar"
				style={{
					width: toggleBar ? "42%" : "0%",
				}}>
				{sidebar.map((item) => {
					return (
						<Box
							className="responsive-navbar-item"
							style={{
								display: toggleBar ? "block" : "none",
							}}>
							<img src={item.image} alt={item.title} width={30} height={30} />
							<Typography>{item.title}</Typography>
						</Box>
					);
				})}
				<Box
					style={{
						marginTop: "1rem",
						display: toggleBar ? "block" : "none",
					}}>
					<ButtonContained name={"Connect Wallet"} />
				</Box>
				<Divider
					style={{
						border: "1px solid rgba(0,0,0,0.8)",
						margin: "2rem 0",
					}}></Divider>
			</Box>
		</Box>
	);
}

export default Header;
