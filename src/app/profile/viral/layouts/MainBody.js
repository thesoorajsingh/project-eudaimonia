"use client";
import { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography, Fade, useTheme } from "@mui/material";
import About from "./sections/About";
import Offerings from "./sections/Offerings";
import Reviews from "./sections/Reviews";
import Fees from "./sections/Fees";
import WhiteCard from "@/app/profile/components/WhiteCard";
import {
  CallRounded,
  EmailRounded,
  WhatsApp,
  WhatsappRounded,
} from "@mui/icons-material";
import Head from "next/head";

function MainBody() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const feeStructure = [
    {
      title: "Fixed Fee",
      tag: "5-10k per month",
      value: "Fixed fee component for our services",
    },
    {
      title: "% from profits",
      tag: "0.5-1% of profits",
      value: "% of the profits we make for you, we’re in it as much as you!",
    },
    {
      title: "% from AUM managed",
      tag: "0.5-1% of profits",
      value: "Fixed fee, as a % of AUM managed for our services",
    },
    {
      title: "% commission from distribution",
      tag: "0.5-1% of profits",
      value: "Some products give us a % for distribution",
    },
  ];

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
        return <Fees feeStructure={feeStructure} />;
        break;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Head>
        <title>{"Some random title"}</title>
      </Head>
      <Box display={"flex"} justifyContent={"space-between"} gap={5} pb={15}>
        <Box flex={0.8}>
          <Box mb={3} borderBottom={`1px solid ${theme.palette.text.label}`}>
            <Tabs
              value={tabValue}
              onChange={(e, newValue) => handleTabChange(e, newValue)}
            >
              <Tab label="About" sx={{ textTransform: "none" }} />
              <Tab label="Offerings" sx={{ textTransform: "none" }} />
              <Tab label="Reviews" sx={{ textTransform: "none" }} />
              <Tab label="Fees" sx={{ textTransform: "none" }} />
            </Tabs>
          </Box>
          <Box>{renderBodySection()}</Box>
        </Box>
        <Box flex={0.2} display={"flex"} flexDirection={"column"} mt={2}>
          <Typography variant="labelMedium" sx={{ marginBottom: 2 }}>
            Connect With the IFA
          </Typography>
          <WhiteCard
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 2,
              position: "sticky",
              top: "100px",
            }}
          >
            <Typography variant={"label"} color={theme.palette.text.label}>
              Contact us
            </Typography>
            <Box display={"flex"} gap={2}>
              <EmailRounded sx={{ color: "#CC5858" }} />
              <WhatsApp sx={{ color: "#00D23B" }} />
              <CallRounded sx={{ color: "#64AFFA" }} />
            </Box>
          </WhiteCard>
        </Box>
      </Box>
    </>
  );
}

export default MainBody;
