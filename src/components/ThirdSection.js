import {
  Box,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import company1 from "../assets/images/companies/company-1.webp";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const carouselData = [
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
  {
    image: company1,
    jobs: 101,
    title: "Luelwitz and Sons",
  },
];

const CustomArrows = ({ onClick, ...rest }) => {
  return (
    <IconButton
      sx={{
        px: 2,
        position: "absolute",
        right: rest.direction === "right" && 0,
        left: rest.direction === "left" && 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      {rest.arrow}
    </IconButton>
  );
};

const CustomDot = ({ onClick, active }) => {
  return (
    <Box
      component="span"
      mx={1}
      display="inline-block"
      sx={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "primary.main",
        border: "none",
        padding: 0,
        opacity: active ? 1 : 0.24,
        cursor: "pointer",
      }}
      onClick={() => onClick()}
    />
  );
};

export default function ThirdSection() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component="section"
      pt={[10, 10, 15]}
      sx={{
        bgcolor: "#F4F6F8",
      }}
    >
      <Container
        sx={{
          "& ul li .MuiBox-root:hover": {
            boxShadow: "0 24px 48px 0 rgba(145 158 171 / 16%)",
            bgcolor: "white",
          },
        }}
      >
        <Typography fontWeight="bold" textAlign="center" variant="h3">
          Top companies
        </Typography>
        <Box py={[5, 5, 10]}>
          <Carousel
            customTransition="all .5s ease"
            transitionDuration={500}
            customDot={<CustomDot />}
            showDots={isMd}
            responsive={responsive}
            swipeable={true}
            keyBoardControl={true}
            draggable={true}
            customLeftArrow={<CustomArrows arrow="<" direction="left" />}
            customRightArrow={<CustomArrows arrow=">" direction="right" />}
          >
            {carouselData.map(({ image, jobs, title }) => (
              <Box
                sx={{
                  px: 3,
                  py: 5,
                  borderRadius: 4,
                  transition: "0.3s",
                  userSelect: "none",
                  "& ul li p, & ul li h6": { userSelect: "none" },
                }}
                textAlign="center"
              >
                <img src={image} alt="c1" width={56} />
                <Typography variant="p" component="p">
                  {jobs} jobs
                </Typography>
                <Typography variant="h6">{title}</Typography>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
