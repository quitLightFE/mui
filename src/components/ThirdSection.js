import { Box, Button, Container, Typography } from "@mui/material";
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
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function ThirdSection() {
  return (
    <Container>
      <Carousel
        responsive={responsive}
        swipeable={true}
        keyBoardControl={true}
        draggable={true}
      >
        <Box sx={{ px: 3, py: 5, userSelect: "none", "& ul li p, & ul li h6": {userSelect: "none"} }} textAlign="center">
          <img src={company1} alt="c1" width={56} />
          <Typography variant="p" component="p">101 jobs</Typography>
          <Typography variant="h6">Lueilwitz and Sons</Typography>
        </Box>
        <Box sx={{ px: 3, py: 5, userSelect: "none" }} textAlign="center">
          <img src={company1} alt="c1" width={56} />
          <Typography variant="p" component="p">101 jobs</Typography>
          <Typography variant="h6">Lueilwitz and Sons</Typography>
        </Box>
        <Box sx={{ px: 3, py: 5, userSelect: "none" }} textAlign="center">
          <img src={company1} alt="c1" width={56} />
          <Typography variant="p" component="p">101 jobs</Typography>
          <Typography variant="h6">Lueilwitz and Sons</Typography>
        </Box>
        <Box sx={{ px: 3, py: 5, userSelect: "none" }} textAlign="center">
          <img src={company1} alt="c1" width={56} />
          <Typography variant="p" component="p">101 jobs</Typography>
          <Typography variant="h6">Lueilwitz and Sons</Typography>
        </Box>
        <Box sx={{ px: 3, py: 5, userSelect: "none" }} textAlign="center">
          <img src={company1} alt="c1" width={56} />
          <Typography variant="p" component="p">101 jobs</Typography>
          <Typography variant="h6">Lueilwitz and Sons</Typography>
        </Box>
        <Box sx={{ px: 3, py: 5, userSelect: "none" }} textAlign="center">
          <img src={company1} alt="c1" width={56} />
          <Typography variant="p" component="p">101 jobs</Typography>
          <Typography variant="h6">Lueilwitz and Sons</Typography>
        </Box>
        <Box sx={{ px: 3, py: 5, userSelect: "none" }} textAlign="center">
          <img src={company1} alt="c1" width={56} />
          <Typography variant="p" component="p">101 jobs</Typography>
          <Typography variant="h6">Lueilwitz and Sons</Typography>
        </Box>
      </Carousel>
    </Container>
  );
}
