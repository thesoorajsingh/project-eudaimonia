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
  return (
    <Box my={3}>
      <Typography variant={"labelMedium"}>We can advise you on</Typography>
      <WhiteCard sx={{ padding: 2, marginTop: 1.5 }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="labelMedium">
            Equity products - Mutual Funds, IPOs
          </Typography>
          <Typography variant="label" color={theme.palette.text.label}>
            We offer a wide range of equity products including Mutual Funds and
            IPOs. We help clients invest in the best performing funds and IPOs
            to help diversify their portfolio and maximize returns.
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
            Wealth products - PMS, AIF, Startup Investments, Auto-trading,
            Global Investments
          </Typography>
          <Typography variant="label" color={theme.palette.text.label}>
            Our wealth products suite includes Portfolio Management Services
            (PMS), Alternative Investment Funds (AIF), Startup Investments,
            Auto-trading, and Global Investments. Our team of experienced
            professionals use their expertise to help clients grow and preserve
            their wealth while minimizing risk.
          </Typography>
        </Box>
      </WhiteCard>
      <Box my={3} width={"100%"}>
        <Typography variant={"labelMedium"}>How we work</Typography>
        <Box mt={1.5} sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <WhiteCard flex={1} sx={{ minWidth: "48%", padding: 2 }}>
            <Typography variant={"labelSmall"}>No fee model</Typography>
          </WhiteCard>
          <WhiteCard flex={1} sx={{ minWidth: "48%", padding: 2 }}>
            <Typography variant={"labelSmall"}>
              Quarterly Portfolio Review
            </Typography>
          </WhiteCard>
          <WhiteCard flex={1} sx={{ minWidth: "48%", padding: 2 }}>
            <Typography variant={"labelSmall"}>
              Tax Optimised Strategies
            </Typography>
          </WhiteCard>
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
