import {
  Box,
  Container,
  IconButton,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
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
      onClick={onClick}
    />
  );
};

const commentData = [
  {
    text: "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    author: "Lucian Obrien",
    job: "CTO",
  },
  {
    text: "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    author: "Lucian Obrien",
    job: "CTO",
  },
  {
    text: "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    author: "Lucian Obrien",
    job: "CTO",
  },
  {
    text: "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    author: "Lucian Obrien",
    job: "CTO",
  },
  {
    text: "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    author: "Lucian Obrien",
    job: "CTO",
  },
  {
    text: "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    author: "Lucian Obrien",
    job: "CTO",
  },
  {
    text: "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    author: "Lucian Obrien",
    job: "CTO",
  },
  {
    text: "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
    author: "Lucian Obrien",
    job: "CTO",
  },
];

export default function SeventhSection() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box component="section" py={[10, 10, 15]} bgcolor="#F4F6F8">
      <Container>
        <Box
          mx="auto"
          maxWidth={560}
          sx={{
            "& .carouselchik": {
              pb: { md: 0, xs: 5 },
            },
          }}
        >
          <Typography fontWeight="bold" variant="h3" mb={5} textAlign="center">
            What our customer say
          </Typography>
          <Carousel
            customDot={<CustomDot />}
            // renderDotsOutside
            arrows={false}
            responsive={responsive}
            swipeable
            draggable
            keyBoardControl
            customButtonGroup={<MyButtons />}
            renderButtonGroupOutside
            showDots={isMd}
            className="carouselchik"
          >
            {commentData.map(({ text, author, job }) => (
              <Box
                display="flex"
                flexDirection="column"
                textAlign="center"
                alignItems="center"
              >
                <Rating value={5} readOnly />
                <Typography variant="p" my={3} fontSize={{ md: 20 }}>
                  {text}
                </Typography>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {author}
                </Typography>
                <Typography variant="p" color="textSecondary">
                  {job}
                </Typography>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
function MyButtons({ next, previous, ...rest }) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  if (isMd) return null;
  return (
    <Box display="flex" justifyContent="center" gap={2} pt={10}>
      <IconButton sx={{ px: 2 }} onClick={previous}>
        {"<"}
      </IconButton>
      <IconButton sx={{ px: 2 }} onClick={next}>
        {">"}
      </IconButton>
    </Box>
  );
}
