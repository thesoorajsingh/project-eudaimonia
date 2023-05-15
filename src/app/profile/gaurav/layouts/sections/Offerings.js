import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import WhiteCard from "@/app/profile/components/WhiteCard";
import PartnershipOne from "@/assets/partnershipOne.png";
import PartnershipTwo from "@/assets/partnershipTwo.png";
import PartnershipThree from "@/assets/partnershipThree.png";
import PartnershipFour from "@/assets/partnershipFour.png";
import Image from "next/image";

function Offerings() {
  const howWeWork = [
    "Semi annual review",
    "Periodic rebalancing",
    "Dedicated planner assigned",
    "Goal based recommendations",
  ];
  const theme = useTheme();
  return (
    <Box my={3}>
      <Typography variant={"labelMedium"}>We can advise you on</Typography>
      <WhiteCard sx={{ padding: 2, marginTop: 1.5 }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="labelMedium">
            Comprehensive Financial Planning
          </Typography>
          <Typography variant="label" color={theme.palette.text.label}>
            We provide financial advisory services and are a one-stop solution
            to all your financial problems with a detailed analysis of the given
            situation.
          </Typography>
        </Box>
      </WhiteCard>
      <WhiteCard sx={{ padding: 2, marginTop: 1.5 }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="labelMedium">
            Second Opinion on Finance
          </Typography>
          <Typography variant="label" color={theme.palette.text.label}>
            It is a one-time investment advisory service that helps you resolve
            financial queries pertaining to your existing portfolio.
          </Typography>
        </Box>
      </WhiteCard>
      <WhiteCard sx={{ padding: 2, marginTop: 1.5 }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="labelMedium">
            Financial Planning for NRI
          </Typography>
          <Typography variant="label" color={theme.palette.text.label}>
            Consultation on NRI investment options when you are away from your
            country, can always present an outlook and safeguard your
            hard-earned money.
          </Typography>
        </Box>
      </WhiteCard>
      <Box my={3} width={"100%"}>
        <Typography variant={"labelMedium"}>How we work</Typography>
        <Box mt={1.5} sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {howWeWork.map((i, index) => (
            <WhiteCard
              key={index}
              flex={1}
              sx={{ minWidth: "48%", padding: 2 }}
            >
              <Typography variant={"labelSmall"}>{i}</Typography>
            </WhiteCard>
          ))}
        </Box>
      </Box>
      <Box my={3} width={"100%"}>
        <Typography variant={"labelMedium"}>
          Participations and Affiliations
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"no-wrap"}
          mt={1.5}
        >
          <WhiteCard sx={{ borderRadius: 0 }}>
            <Image
              style={{ maxWidth: "fit-content" }}
              src={PartnershipOne}
              alt={"first partnership"}
            />
          </WhiteCard>
          <WhiteCard sx={{ borderRadius: 0 }}>
            <Image
              style={{ maxWidth: "fit-content" }}
              src={PartnershipTwo}
              alt={"first partnership"}
            />
          </WhiteCard>
          <WhiteCard sx={{ borderRadius: 0 }}>
            <Image
              style={{ maxWidth: "fit-content" }}
              src={PartnershipThree}
              alt={"first partnership"}
            />
          </WhiteCard>
          <WhiteCard sx={{ borderRadius: 0 }}>
            <Image
              style={{ maxWidth: "fit-content" }}
              src={PartnershipFour}
              alt={"first partnership"}
            />
          </WhiteCard>
        </Box>
      </Box>
    </Box>
  );
}

export default Offerings;
