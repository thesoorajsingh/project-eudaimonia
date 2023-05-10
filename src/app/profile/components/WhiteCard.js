"use client";
import { Box, Typography, Button } from "@mui/material";

export default function WhiteCard({ sx = {}, children }) {
	return (
		<Box backgroundColor={"white"} borderRadius={"10px"} sx={sx}>
			{children}
		</Box>
	);
}
