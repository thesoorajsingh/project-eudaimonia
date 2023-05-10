import { Box, Typography } from "@mui/material";
import React from "react";
import WhiteCard from "../../components/WhiteCard";

function About() {
	const aboutAdvisor = `Meet Nitin Attri, a seasoned financial advisor with over 23 years of experience in Investments, Insurances and Wealth. As the Founder of BigRise Financial, Nitin leads a team that serves clients across 29+ countries. His expertise lies in NRI Investments, Health Insurances (global covers), Equity & Debt Investment Strategies, and all kinds of investment strategies for regulated products.`;
	const [readMore, setReadMore] = React.useState(true);
	const handleReadMore = () => {
		setReadMore(!readMore);
	};

	console.log(aboutAdvisor.length);
	return (
		<Box mt={3}>
			<WhiteCard sx={{ padding: 2 }}>
				<Box display={"flex"} flexDirection={"column"} gap={1}>
					<Typography variant="labelMedium">About</Typography>
					<Typography variant="label">
						{readMore ? aboutAdvisor.slice(0, 150) : aboutAdvisor}
						{readMore && "..."}
					</Typography>
					{aboutAdvisor.length > 150 && (
						<Typography
							variant="label"
							color="primary"
							onClick={handleReadMore}
							style={{ cursor: "pointer" }}
						>
							{!readMore ? "Read Less" : "Read More"}
						</Typography>
					)}
				</Box>
			</WhiteCard>
		</Box>
	);
}

export default About;
