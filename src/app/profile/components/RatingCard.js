import { Box, Typography, Rating, useTheme, Divider } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import WhiteCard from "./WhiteCard";
import Tag from "./Tag";

export default function RatingCard({
  title = "John Doe",
  rating = 3,
  review = "lorem ipsum dolor sit amet",
  date = "April, 2023",
  tags = [],
  isVerified = true,
}) {
  const theme = useTheme();
  return (
    <WhiteCard sx={{ padding: 2 }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={1.5}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} gap={"2px"} alignItems={"center"}>
              <Typography variant={"labelSmall"}>{title}</Typography>
              {isVerified && (
                <VerifiedRoundedIcon
                  sx={{ width: 16, height: 16, color: "#116441" }}
                />
              )}
            </Box>
            <Typography
              variant={"labelXSmall"}
              color={theme.palette.text.label}
            >
              {date}
            </Typography>
          </Box>
          <Rating
            value={rating}
            readOnly
            sx={{ color: "#CC913E", fontSize: "20px" }}
          />
        </Box>
        <Box display={"flex"} gap={1} flexWrap={"no-wrap"}>
          {tags.length > 0 &&
            tags.map((tag, index) => (
              <Tag
                key={index}
                sx={{ backgroundColor: tag?.color, height: "65%" }}
                title={tag.value}
                textColor={theme.palette.text.label}
              />
            ))}
        </Box>
      </Box>
      <Divider sx={{ color: "#788582", marginY: 2 }} />
      <Box>
        <Typography variant={"label"} color={theme.palette.text.label}>
          {review}
        </Typography>
      </Box>
    </WhiteCard>
  );
}
