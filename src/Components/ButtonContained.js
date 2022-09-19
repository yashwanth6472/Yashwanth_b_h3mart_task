import React from "react";
import { Button } from "@mui/material";
function ButtonContained({ name, click }) {
	return (
		<>
			<Button
				variant="contained"
				onClick={click}
				style={{
					backgroundColor: "#46bd7d",
					color: "#fff",
					borderRadius: "50px",
					fontSize: "14px",
					fontWeight: "700",
					padding: "0.5rem 1.5rem",
					textAlign: "center",
					boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
				}}>
				{name}
			</Button>
		</>
	);
}

export default ButtonContained;
