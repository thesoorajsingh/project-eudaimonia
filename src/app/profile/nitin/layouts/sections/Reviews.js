import React from "react";
import RatingCard from "@/app/profile/components/RatingCard";
import { Box } from "@mui/material";
import dayjs from "dayjs";

function Reviews({}) {
  const nitinTags = [
    {
      color: "#E9F7F1",
      value: "Product Understanding",
    },
    {
      color: "#FFC471",
      value: "Portfolio Analysis",
    },
  ];

  const nitinReviewTwo = {
    title: "Ravi Chivukula",
    rating: 4,
    review:
      "Dr. Murali is a thorough professional, I have seen him since last 22 years, from his early days post his academic studies carefully nurtured by his father. His approach has been so caring, he explains how the sequence treatment would be. He has treated all my family members, my Dad who is 80 plus always prefers to be attended by him.",
    tags: [
      {
        color: "#E9F7F1",
        value: "Product Understanding",
      },
      {
        color: "#FFC47140",
        value: "Portfolio Analysis",
      },
    ],
    isVerified: true,
    date: "March, 2022",
  };

  return (
    <Box my={1.5} display={"flex"} flexDirection={"column"} gap={3}>
      <RatingCard {...nitinReviewTwo} />
      <RatingCard {...nitinReviewTwo} />
      <RatingCard {...nitinReviewTwo} />
    </Box>
  );
}

export default Reviews;
