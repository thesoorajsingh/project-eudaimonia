import { Box, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import WhiteCard from "../../components/WhiteCard";
import HeroMetric from "../../components/HeroMetric";
import MutualAvatarGroup from "@/assets/mutualAvatarGroup2.png";
import {
  AddchartRounded,
  AssistantRounded,
  AutoGraphRounded,
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

  const productsOffered = [
    {
      title: "20+ Mutual Funds",
    },
    {
      title: "30+ Direct Equity",
    },
    {
      title: "2+ Fixed Income",
    },
    {
      title: "5+ Insurance",
    },
  ];

  const investmentStrategy = [
    {
      icon: <AutoGraphRounded sx={{ color: "#00E3AB" }} />,
      title: "Equity-equivalent returns from debt investments",
      value:
        "We generate equity-like returns from debt investments while protecting capital and customizing investment goals, payment frequency, and surplus input. Our debt solutions offer 4.5% to 9.2% high returns, ideal for balancing financial portfolios. HNIs and UHNIs benefit from early larger investments, gaining a delta advantage.",
    },
    {
      icon: <AssistantRounded sx={{ color: "#0098E3" }} />,
      title: "Tailored NRI Strategies",
      value:
        "Addressing country-specific financial challenges like inheritance tax, lower pensions, overtaxation, low yields, etc. We leverage diverse financial instruments and strategies to offer definitive solutions. For instance, we can help Indian-origin residents in Japan or the UK to minimize their estate's inheritance tax liability to just 10%.",
    },
    {
      icon: <AddchartRounded sx={{ color: "#5600E3" }} />,
      title: "Tax-Efficient Investment Strategies",
      value:
        "Our tax-efficient financial instruments go beyond country-specific norms, reducing tax outgo by at least 50%. Investment-led strategies tailored to your goals offer higher returns while lowering tax burdens. Our unique tax-saving philosophy uses investment horizons to create effective tax rates well below local tax authority limits.",
    },
  ];

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
        <WhiteCard
          sx={{
            marginTop: 1.5,
            padding: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {productsOffered.map((product, index) => (
            <Box display={"flex"} key={index} flexDirection={"column"} gap={1}>
              <Image
                src={MutualAvatarGroup}
                style={{ maxWidth: "64px", maxHeight: "36px" }}
                alt={"some image"}
              />
              <Typography variant={"labelSmall"}>{product.title}</Typography>
            </Box>
          ))}
        </WhiteCard>
      </Box>
      <Box mt={4}>
        <Typography variant={"labelMedium"}>Investment Strategies</Typography>
        {investmentStrategy.map((strategy, index) => (
          <WhiteCard
            key={index}
            sx={{
              padding: 2,
              marginY: 3,
              display: "flex",
              justifyContent: "space-between",
              gap: 1.5,
            }}
          >
            <Box width={"24px"} height={"24px"}>
              {strategy.icon}
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography variant={"labelSmall"}>{strategy.title}</Typography>
              <Typography variant={"label"}>{strategy.value}</Typography>
            </Box>
          </WhiteCard>
        ))}
      </Box>
      <Box mt={4}>
        <Typography variant={"labelMedium"}>Education</Typography>
        <WhiteCard sx={{ marginTop: 1.5, padding: 2 }}>
          <Typography variant={"label"} color={theme.palette.text.label}>
            1998-2001: Delhi University, Bachelor’s Degree <br />
            2008-2010: Indira Gandhi University, Master’s Degree <br />
            2014: SEBI/IRDA License 2017: Carlton Advanced Management Institute,
            USA <br />
            2017: National Institute of Securities Market - Investment Advisor
            (Advanced), Equity & Debt
          </Typography>
        </WhiteCard>
      </Box>
      <Box mt={4}>
        <Typography variant={"labelMedium"}>Work Experience</Typography>
        <WhiteCard sx={{ marginTop: 1.5, padding: 2 }}>
          <Typography variant={"label"} color={theme.palette.text.label}>
            October 2009 - Present: Co-founder and CFO BigRaise Financial
          </Typography>
        </WhiteCard>
      </Box>
    </Box>
  );
}

export default About;
