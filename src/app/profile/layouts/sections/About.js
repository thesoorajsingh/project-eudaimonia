import { Box, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import WhiteCard from "../../components/WhiteCard";
import HeroMetric from "../../components/HeroMetric";
import MutualAvatarGroup from "@/assets/mutualAvatarGroup2.png";
import {
  CurrencyRupeeRounded,
  HomeRepairServiceRounded,
  PeopleRounded,
  StarsRounded,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

function About() {
  const theme = useTheme();
  const aboutAdvisor = `Meet Nitin Attri, a seasoned financial advisor with over 23 years of experience in Investments, Insurances and Wealth. As the Founder of BigRise Financial, Nitin leads a team that serves clients across 29+ countries. His expertise lies in NRI Investments, Health Insurances (global covers), Equity & Debt Investment Strategies, and all kinds of investment strategies for regulated products.`;
  const [readMore, setReadMore] = React.useState(true);
  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  const metrics = useMemo(
    () => [
      {
        Icon: <PeopleRounded sx={{ color: "#595959" }} />,
        title: "Active Families",
        value: "3000+",
      },
      {
        Icon: (
          <HomeRepairServiceRounded
            sx={{ color: "#1E68B2", width: 24, height: 24 }}
          />
        ),
        title: "Active AUM",
        value: "Rs 500Cr+",
      },
      {
        Icon: (
          <CurrencyRupeeRounded
            sx={{
              backgroundColor: "#116441",
              borderRadius: "50%",
              padding: "2px",
              color: "white",
              width: 24,
              height: 24,
            }}
          />
        ),
        title: "Min. Portfolio",
        value: "Rs. 1.5L",
      },
      {
        Icon: <StarsRounded sx={{ color: "#cc913e" }} />,
        title: "Largest Portfolio",
        value: "Rs 10Cr",
      },
    ],
    []
  );

  return (
    <Box my={3}>
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
        <Box
          mt={2.5}
          pt={1.5}
          borderTop={"1px solid #E9EBEB"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          {metrics.map((metric, index) => (
            <Box key={index} display={"flex"}>
              <Box display={"flex"} alignItems={"center"}>
                {metric.Icon}
              </Box>
              <Box display={"flex"} flexDirection={"column"} ml={2}>
                <Typography variant="labelMedium">{metric.title}</Typography>
                <Typography variant="label" color={theme.palette.text.label}>
                  {metric.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </WhiteCard>

      <Box mt={4}>
        <Typography variant={"labelMedium"}>Location</Typography>
        <WhiteCard sx={{ padding: 2, marginTop: 1.5 }}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"column"} gap={1.5}>
              <Typography variant={"labelMedium"}>New Delhi</Typography>
              <Typography variant={"label"}>
                BigRaise Financial, 10, Level, E-5, 4, Malviya Nagar, New Delhi,
                Delhi 110017{" "}
              </Typography>
              <Link
                href={
                  "https://goo.gl/maps/1xGF5MA624TyaZws5?coh=178571&entry=tt"
                }
                style={{ color: theme.palette.primary.main, fontSize: "12px" }}
                target="_blank"
              >
                Get Directions
              </Link>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={5}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                margin={"auto"}
                gap={1}
              >
                <Typography variant={"label"} color={theme.palette.text.label}>
                  Mon-Sat
                </Typography>
                <Typography variant={"label"}>9:30AM - 7:30PM</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                margin={"auto"}
                gap={1}
              >
                <Typography variant={"label"} color={theme.palette.text.label}>
                  Sunday
                </Typography>
                <Typography variant={"label"}>Closed</Typography>
              </Box>
            </Box>
          </Box>
        </WhiteCard>

        <WhiteCard
          sx={{
            padding: 2,
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="labelMedium">Why me?</Typography>

          <Typography
            variant="labelSmall"
            color={theme.palette.text.active}
            sx={{
              borderLeft: `1px solid ${theme.palette.text.active}`,
              paddingLeft: 2,
              fontStyle: "italic",
            }}
          >
            I am the best known IFA. I can offer 1000% returns on your
            portfolio. I can do literally anything and everything for you. I
            will be available 24*7 for all your needs.
          </Typography>
        </WhiteCard>
      </Box>

      <Box mt={4}>
        <Typography variant={"labelMedium"}>Products</Typography>
        <WhiteCard sx={{ marginTop: 1.5 }}>
          <Image src={MutualAvatarGroup} alt={"some image"} />
        </WhiteCard>
      </Box>
    </Box>
  );
}

export default About;
