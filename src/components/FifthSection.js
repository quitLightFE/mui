import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import bg from "../assets/images/illustration-map.svg"
import carousel1 from "../assets/images/carousel/image.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

const carouselData = [
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
  {
    title: "United Arab Emirates",
    jobs: 497,
  },
];

export default function FifthSection() {
  return (
    <Box
      component="section"
      py={[10, 10, 15]}
      sx={{ overflowX: "hidden" }}
      position="relative"
    >
      <Box
        component="span"
        display={{ xs: "none", md: "block" }}
        position="absolute"
        width={780}
        height={646}
        left={-64}
        top="50%"
        zIndex={-1}
        color="text.disabled"
        bgcolor="currentcolor"
        sx={{
          opacity: 0.64,
          mask: `url(${bg})`,
          transform: "translateY(-50%)"
        }}
        
      />
      <Container>
        <Grid container justifyContent="space-between">
          <Grid
            size={{ xs: 12, md: 4 }}
            textAlign={["center", "center", "unset"]}
          >
            <Typography fontWeight="bold" variant="h3">
              Global connections
            </Typography>
            <Typography
              variant="p"
              component="p"
              mt={3}
              mb={5}
              color="textSecondary"
            >
              Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla
              neque dolor, sagittis eget, iaculis quis.
            </Typography>
            <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                color: "white",
                display: "inline-flex",
              }}
              color="dark"
              endIcon=">"
            >
              View all
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} py={5} position="relative">
            <Box
              sx={{
                position: "relative",
                left: { md: "-40px" }, // вылезаем за Container
                width: "min(100vw, 1600px)",
                "& .myCarousel": {
                  pb: 5,
                },
              }}
            >
              <Carousel
                centerMode
                responsive={responsive}
                swipeable={true}
                keyBoardControl={true}
                draggable={true}
                customButtonGroup={<CustomButtons />}
                renderButtonGroupOutside
                arrows={false}
                className="myCarousel"
              >
                {carouselData.map(({ title, jobs }) => (
                  <Card
                    sx={{
                      maxWidth: { xs: "85%", md: "min(80%, 280px)" },
                      borderRadius: 4,
                      "&:hover": {
                        boxShadow: "0 16px 32px -4px rgba(145 158 171 / 16%)",
                        "& img": {
                          transform: "scale(110%) translateY(-5%)",
                        },
                      },
                      boxShadow:
                        "0 0 2px 0 rgba(145 158 171 / 20%),0 12px 24px -4px rgba(145 158 171 / 12%)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ transition: "transform .5s", aspectRatio: 4 / 5 }}
                      src={carousel1}
                      alt=""
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h6">{title}</Typography>
                      <Typography variant="body2" color="textDisabled">
                        {jobs} jobs
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function CustomButtons({ next, previous, ...rest }) {
  return (
    <Box
      maxWidth={{ md: "50vw" }}
      display="flex"
      justifyContent="center"
      mt={2}
      gap={2}
    >
      <IconButton
        sx={{
          px: 2,
        }}
        variant="contained"
        onClick={previous}
      >
        {"<"}
      </IconButton>
      <IconButton
        sx={{
          px: 2,
        }}
        variant="contained"
        onClick={next}
      >
        {">"}
      </IconButton>
    </Box>
  );
}
