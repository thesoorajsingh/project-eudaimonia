"use client";
import { Box, Button, Typography } from "@mui/material";
import HeroProfile from "./layouts/HeroProfile";
import MainBody from "./layouts/MainBody";

export default function Profile() {
  return (
    <>
      <HeroProfile />
      <Box mt={3}>
        <MainBody />
      </Box>
    </>
  );
}
