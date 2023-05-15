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
        <Typography variant={"h3"}>Choose an Advisor</Typography>
        <Box display={"flex"} justifyContent={"space-between"} gap={2}>
          <Link href={"/profile/nitin"} style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ marginTop: 2 }}>
              {"Nitin Attri"}
            </Button>
          </Link>
          <Link href={"/profile/gaurav"} style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ marginTop: 2 }}>
              {"Gaurav Karnik"}
            </Button>
          </Link>
          <Link href={"/profile/viral"} style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ marginTop: 2 }}>
              {"Viral"}
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
