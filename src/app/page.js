"use client";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Eudaimonia</title>
      </Head>
      <Box
        textAlign={"center"}
        height={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant={"h3"}>Welcome to Eudaimonia</Typography>
        <Link href={"/profile"} style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ marginTop: 2 }}>
            {"Go to Profile"}
          </Button>
        </Link>
      </Box>
    </>
  );
}
