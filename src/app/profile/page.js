"use client";
import { Box, Button, Typography } from "@mui/material";
import WhiteCard from "./components/WhiteCard";
import HeroProfile from "./layouts/HeroProfile";
import MainBody from "./layouts/MainBody";
import BodyContact from "./layouts/BodyContact";

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
