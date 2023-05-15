import { theme } from "@/app/theme";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

function Tag({ title = "Tag", sx = {}, textColor }) {
  const theme = useTheme();
  return (
    <Box
      py={"4px"}
      px={"6px"}
      backgroundColor={theme.palette.surface.main}
      borderRadius={"2px"}
      width={"fit-content"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={sx}
    >
      <Typography
        variant={"label"}
        color={textColor || theme.palette.text.label}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Tag;
