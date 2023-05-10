"use client";
import { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography, Fade } from "@mui/material";
import About from "./sections/About";
import Offerings from "./sections/Offerings";
import Reviews from "./sections/Reviews";
import Fees from "./sections/Fees";

function MainBody() {
	const [tabValue, setTabValue] = useState(0);

	const handleTabChange = (e, newValue) => {
		setTabValue(newValue);
	};

	const renderBodySection = () => {
		switch (tabValue) {
			case 0:
				return <About />;
				break;
			case 1:
				return <Offerings />;
				break;
			case 2:
				return <Reviews />;
				break;
			case 3:
				return <Fees />;
				break;
			default:
				return <About />;
		}
	};

	return (
		<>
			<Box mb={3}>
				<Tabs
					value={tabValue}
					onChange={(e, newValue) => handleTabChange(e, newValue)}
				>
					<Tab label="About" />
					<Tab label="Offerings" />
					<Tab label="Reviews" />
					<Tab label="Fees" />
				</Tabs>
			</Box>
			<Box display={"flex"}>
				<Box flex={0.7}>{renderBodySection()}</Box>
				<Box flex={0.3}>
					<Typography variant="label">Contact</Typography>
				</Box>
			</Box>
		</>
	);
}

export default MainBody;
