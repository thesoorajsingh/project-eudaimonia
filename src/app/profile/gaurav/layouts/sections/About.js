import { Box, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import WhiteCard from "@/app/profile/components/WhiteCard";
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
  const aboutAdvisor = `Meet Gaurav Karnik, Founder of S9 Financial in Mumbai, with 12+ years experience in managing wealth for both clients and corporates.
  He specialises in goal-based finance planning, insurance evaluation and estate disposition and his customised solutions cater to clients pan- India Read More`;
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
      title: "Goal Based Investment Strategies",
      value:
        "Our strategies are tailored to your unique goals and risk tolerance, ensuring that your investments are aligned with your long-term financial objectives.",
    },
    {
      icon: <AssistantRounded sx={{ color: "#0098E3" }} />,
      title: "Tailored Financial Planning for NRIs",
      value:
        "Consultation on NRI investment options when you are away from your country, can always present an outlook and safeguard your hard-earned money.",
    },
    {
      icon: <AddchartRounded sx={{ color: "#5600E3" }} />,
      title: "Periodic Rebalance of Asset Allocation",
      value:
        "Our customized approach to asset allocation ensures a high-return, diversified portfolio that is tailored to your specific  goals, risk profile and its changing dynamics.",
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
          <Typography variant="labelMedium">A brief introduction</Typography>
          <Typography variant="labelXSmall" color={theme.palette.text.label}>
            {readMore ? aboutAdvisor.slice(0, 150) : aboutAdvisor}
            {readMore && "..."}
          </Typography>
          {aboutAdvisor.length > 150 && (
            <Typography
              variant="label"
              color="primary"
              onClick={handleReadMore}
              style={{ cursor: "pointer", textDecoration: "underline" }}
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
            <Box flex={0.8} display={"flex"} flexDirection={"column"} gap={1.5}>
              <Typography variant={"labelMedium"}>Mumbai</Typography>
              <Typography variant={"label"}>
                S9 Financial Planners City Of Joy, 825, Ecstasy Business Park,
                JSD, Ashok Nagar, Mulund West, Mumbai, Maharashtra 400080
              </Typography>
              <Link
                href={
                  "https://goo.gl/maps/vApTfG9eTyHwYyAU9?coh=178571&entry=tt"
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
              flex={0.4}
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
            I work with one insight for my clients “Failing to plan is planning
            to fail” hence I help them in designing their financial goals right
            from analysing the current situation to planning the future.
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
            2006-2009: R A Podar College, Bachelor of Commerce & Economincs
          </Typography>
        </WhiteCard>
      </Box>
      <Box mt={4}>
        <Typography variant={"labelMedium"}>Work Experience</Typography>
        <WhiteCard sx={{ marginTop: 1.5, padding: 2 }}>
          <Typography variant={"label"} color={theme.palette.text.label}>
            May 2011 - Present:{" "}
            <strong>Co-Founder & Chief Financial Planner</strong> @ S9 Financial
            Planners <br />
            Sep 2020 - Present: <strong>Co-Founder</strong> @ Fortunexus Private
            Limited
            <br /> Dec 2020 - Present: <strong>Venture Partner</strong> @ ah!
            Ventures <br />
            Dec 2021 - Present: <strong>Education Mentor</strong> @ GrowthSchool
          </Typography>
        </WhiteCard>
      </Box>
    </Box>
  );
}

export default About;
