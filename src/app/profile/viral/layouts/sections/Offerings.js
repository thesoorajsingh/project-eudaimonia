import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import WhiteCard from "@/app/profile/components/WhiteCard";
import PartnershipOne from "@/assets/partnershipOne.png";
import PartnershipTwo from "@/assets/partnershipTwo.png";
import PartnershipThree from "@/assets/partnershipThree.png";
import PartnershipFour from "@/assets/partnershipFour.png";
import Image from "next/image";

function Offerings() {
  const theme = useTheme();

  const howWeWork = [
    "Periodic risk assessment",
    "Goal management",
    "Multi-asset allocation approach",
    "Budget and Tax planning",
  ];

  return (
    <Box my={3}>
      <Typography variant={"labelMedium"}>We can advise you on</Typography>
      <WhiteCard sx={{ padding: 2, marginTop: 1.5 }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="labelMedium">
            Equity Products - Mutual Funds and Direct Equity
          </Typography>
          <Typography variant="label" color={theme.palette.text.label}>
            We help you identify the best performing stocks and mutual funds
            basis your various financial goals in collaboration with Angel One.
          </Typography>
        </Box>
      </WhiteCard>
      <WhiteCard sx={{ padding: 2, marginTop: 1.5 }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="labelMedium">
            Fixed Income products - P2P, Bonds, Commercial Paper
          </Typography>
          <Typography variant="label" color={theme.palette.text.label}>
            We offer various fixed income products such as P2P lending, Bonds,
            and Commercial Paper. These products provide our clients with stable
            returns and help mitigate risks in their overall investment
            strategy.
          </Typography>
        </Box>
      </WhiteCard>
      <WhiteCard sx={{ padding: 2, marginTop: 1.5 }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="labelMedium">
            Insurance and Loan Services
          </Typography>
          <Typography variant="label" color={theme.palette.text.label}>
            Money Mantra helps our customers with both life and non-life
            insurance products and a variety of loan services such as Home
            Loans, Personal Loans and Business Loans
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
