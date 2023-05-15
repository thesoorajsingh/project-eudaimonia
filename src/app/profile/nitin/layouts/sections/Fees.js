import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import WhiteCard from "@/app/profile/components/WhiteCard";
import Tag from "@/app/profile/components/Tag";

function Fees({ feeStructure = [] }) {
  const theme = useTheme();
  return (
    <Box my={3}>
      <Typography variant={"labelMedium"}>
        100% transparent, no-hidden charges
      </Typography>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {feeStructure.length > 0 &&
          feeStructure.map((fee, index) => (
            <WhiteCard
              key={index}
              sx={{
                marginY: 1.5,
                padding: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <Typography variant={"labelSmall"}>{fee?.title}</Typography>
                <Tag title={fee?.tag} />
              </Box>
              <Divider sx={{ marginY: 2, color: "#788582" }} />
              <Typography variant={"label"} color={theme.palette.text.label}>
                Fixed fee component for our services
              </Typography>
            </WhiteCard>
          ))}
      </Box>
    </Box>
  );
}

export default Fees;
