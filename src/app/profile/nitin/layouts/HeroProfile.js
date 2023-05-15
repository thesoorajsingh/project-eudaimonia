import { Avatar, Box, Typography, useTheme } from "@mui/material";
import WhiteCard from "@/app/profile/components/WhiteCard";
import HeroMetric from "@/app/profile/components/HeroMetric";
import Image from "next/image";
import HeroImage from "@/assets/avatarImage.png";
import LinkedinIcon from "@/assets/icons/linkedin.png";
import Tag from "@/app/profile/components/Tag";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import { GroupAddRounded } from "@mui/icons-material";
import Leaf from "@/assets/leafOnlyLogo.png";

const isVerified = true;

const tagsList = [
  {
    title: "NRI Services",
  },
  {
    title: "Tax Efficient Solutions",
  },
  {
    title: "Debt based products",
  },
  {
    title: "Country specific strategies",
  },
];

const metricsList = [
  {
    icon: (
      <VerifiedUserRoundedIcon
        sx={{ color: "#116441", width: "32px", height: "32px" }}
      />
    ),
    title: "SEBI Registration Number",
    value: "INH200007645",
  },
  {
    icon: (
      <HomeRepairServiceRoundedIcon
        sx={{ color: "#1E68B2", width: "32px", height: "32px" }}
      />
    ),
    title: "Experience",
    value: "14 Years",
  },
  {
    icon: (
      <GroupAddRounded
        sx={{ color: "#595959", width: "32px", height: "32px" }}
      />
    ),
    title: "Families Managed",
    value: "3000+",
  },
  {
    icon: (
      <StarsRoundedIcon
        sx={{ color: "#CC913E", width: "32px", height: "32px" }}
      />
    ),
    title: "Testimonials",
    value: "12+ Reviews",
  },
];

const AvatarSegment = () => {
  return (
    <Box>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Avatar
          src={HeroImage}
          sx={{ objectFit: "cover", width: 128, height: 128 }}
        >
          <Image src={HeroImage} alt="Hero Image" fill />
        </Avatar>
        <Box display={"flex"} gap={1} justifyContent={"center"}>
          <Image
            src={LinkedinIcon}
            alt={"LinkedIn Icon"}
            style={{ width: "20px", height: "20px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const DetailsSegment = () => {
  const theme = useTheme();
  return (
    <Box height={"fit-content"} width={"80%"}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Typography variant="h4">Nitin Attri</Typography>

        {isVerified && (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            px={0.5}
            py={0.25}
            border={`1px solid ${theme.palette.border.green}`}
            borderRadius={"2px"}
            gap={0.5}
          >
            <Image src={Leaf} alt={"leaf logo"} />
            <Typography variant={"label"} color={theme.palette.text.label}>
              Verified
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        width={"fit-content"}
        display={"flex"}
        justifyContent={"space-between"}
        gap={1}
        mt={1}
      >
        {tagsList.map((title, index) => (
          <Tag key={index} title={title.title} />
        ))}
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        pt={"20px"}
        mt={1}
        borderTop={`1px solid black`}
      >
        {metricsList.map((metric, index) => (
          <HeroMetric
            key={index}
            Icon={metric.icon}
            title={metric.title}
            value={metric.value}
          />
        ))}
      </Box>
    </Box>
  );
};

export default function HeroProfile() {
  return (
    <Box>
      <WhiteCard
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 4,
          gap: 4,
        }}
      >
        <AvatarSegment />
        <DetailsSegment />
      </WhiteCard>
    </Box>
  );
}
