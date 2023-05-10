import { Box, Typography } from "@mui/material";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

function HeroMetric({
	Icon = VerifiedUserRoundedIcon,
	title = "Title",
	value = "Value",
}) {
	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			gap={0.5}
			alignItems={"center"}
		>
			<Box>
				<Icon sx={{ width: 40, height: 40 }} />
			</Box>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"flex-start"}
			>
				<Typography variant={"label"}>{title}</Typography>
				<Typography variant={"labelMedium"}>{value}</Typography>
			</Box>
		</Box>
	);
}

export default HeroMetric;
