import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import carouselCompany1 from "../assets/brands/airbnb-original.svg";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3
  }
};

const brandCarouselData = [
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  },
  {
    img: carouselCompany1
  }
];

export default function EighthSection() {
  return (
    <Box component="section" pt={[10, 10, 15]} pb={[5, 5, 10]}>
      <Container>
        <Box textAlign="center" mx="auto" mb={[5, 5, 10]} maxWidth={480}>
          <Typography fontWeight="bold" variant="h3">
            Our clients
          </Typography>
          <Typography mt={3} color="textSecondary">
            Curabitur a felis in nunc fringilla tristique. Fusce egestas elit
            eget lorem. Etiam vitae tortor.
          </Typography>
        </Box>
        <Carousel
          renderDotsOutside
          autoPlay
          autoPlaySpeed={0.1}
          customTransition={"transform linear 2.5s"}
          transitionDuration={2500}
          infinite
          responsive={responsive}
          swipeable
          keyBoardControl
          draggable
          arrows={false}
        >
          {brandCarouselData.map(({ img }) => (
            <Paper
              sx={{
                py: 3,
                px: 2,
                border: "1px solid rgba(145 158 171 / 20%)",
                borderRadius: 2,
                textAlign: "center",
                width: "85%"
              }}
            >
              <img src={img} alt="" />
            </Paper>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
