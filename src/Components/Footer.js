import {
	Box,
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	Typography,
} from "@mui/material";
import React from "react";
import "../Styles/Footer.css";
function Footer() {
	return (
		<Box className="footer-container">
			<Box>
				<List>
					<ListItemText>
						<Typography className="list-header">COINCAP.IO</Typography>
					</ListItemText>

					<ListItemText>Methodology</ListItemText>
					<ListItemText>Support</ListItemText>
					<ListItemText>Our API</ListItemText>
					<ListItemText>Rate Comparison</ListItemText>
					<ListItemText>Carrers</ListItemText>
				</List>
			</Box>

			<Box>
				<List>
					<ListItemText>
						<Typography className="list-header">LEGALS</Typography>
					</ListItemText>

					<ListItem>Terms of Service</ListItem>
					<ListItem>Privacy Policy</ListItem>
				</List>

				<List>
					<ListItemText>
						<Typography className="list-header">DISCLAIMER</Typography>
					</ListItemText>
					<Typography>
						Neither ShapeShift AG nor CoinCap are in any way associated with
						CoinMarketCap, LLC or any of its goods and services.
					</Typography>
				</List>
			</Box>

			<Box>
				<List>
					<ListItemText>
						<Typography className="list-header">FOLLOW US</Typography>
					</ListItemText>
					<ListItem></ListItem>
					<ListItem></ListItem>
				</List>
			</Box>

			<Box>
				<List>
					<ListItemText>
						<Typography className="list-header">
							COINCAP APP AVAILABLE ON
						</Typography>
					</ListItemText>
					<ListItem></ListItem>
					<ListItem></ListItem>
				</List>
			</Box>
		</Box>
	);
}

export default Footer;
