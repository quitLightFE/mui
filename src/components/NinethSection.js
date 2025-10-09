import { Box, Button, Container, Link, Typography } from "@mui/material";
import React from "react";
import bgNine from "../assets/images/career/image1.png";

export default function NinethSection() {
  return (
    <Box component="section" pt={[5, 5, 20]} pb={[10, 10, 15]}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box textAlign={["center", "center", "unset"]}>
            <Typography
              component="span"
              color="textDisabled"
              mb={2}
              variant="body2"
            >
              Blog
            </Typography>
            <Typography fontWeight="bold" variant="h3">
              Read our latest news
            </Typography>
            <Typography
              variant="p"
              component="p"
              mt={3}
              mb={5}
              sx={{
                opacity: 0.72
              }}
            >
              Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et,
              volutpat molestie, porta ut, ligula.
            </Typography>
          </Box>
          <Button
            sx={{ display: { xs: "none", md: "inline-flex" } }}
            endIcon=">"
            component="a"
            color="dark"
          >
            View all
          </Button>
        </Box>
        <Box display={{ xs: "none", md: "flex" }} gap={4}>
          <Box
            overflow="hidden"
            display="flex"
            flexDirection="column-reverse"
            justifyContent="space-between"
            alignItems="center"
            borderRadius={4}
            sx={{
              backgroundImage: `url(${bgNine})`,
              color: "white",
              bgcolor: "#00000055",
              backgroundBlendMode: "darken",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <Box px={5} pt={5}>
              <Box sx={{ color: "text.disabled" }}>
                12 Aug 2024 ･ 8 min read
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  color: "white"
                }}
              >
                The Future of Renewable Energy: Innovations and Challenges Ahead
              </Typography>
              <Typography
                variant="p"
                component="p"
                fontWeight="bold"
                sx={{
                  color: "white",
                  opacity: 0.48
                }}
                textOverflow="ellipsis"
                overflow="hidden"
                maxHeight={48}
              >
                Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
                molestiae ut facere aut. Est quidem iusto praesentium excepturi
                harum nihil tenetur facilis. Ut omnis voluptates nihil
                accusantium doloribus eaque debitis.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ columnCount: 2 }} columnGap={4}>
            <Box display="flex" flexDirection="column" gap={2} mb={4}>
              <img
                src={bgNine}
                style={{
                  borderRadius: "20px",
                  maxWidth: 200,
                  aspectRatio: 1,
                  objectFit: "cover"
                }}
                alt="11"
              />
              <Box display="flex" flexDirection="column" gap={1}>
                <Box sx={{ color: "text.disabled" }}>
                  12 Aug 2024 ･ 8 min read
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  maxHeight={56}
                  sx={{ wordWrap: "break-word", overflow: "hidden" }}
                  textOverflow="ellipsis"
                  lineHeight={1.3}
                >
                  The Future of Renewable Energy: Innovations and Challenges
                  Ahead
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={2} mb={4}>
              <img
                src={bgNine}
                style={{
                  borderRadius: "20px",
                  maxWidth: 200,
                  aspectRatio: 4 / 3,
                  objectFit: "cover"
                }}
                alt="11"
              />
              <Box display="flex" flexDirection="column" gap={1}>
                <Box sx={{ color: "text.disabled" }}>
                  12 Aug 2024 ･ 8 min read
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  maxHeight={56}
                  sx={{ wordWrap: "break-word", overflow: "hidden" }}
                  textOverflow="ellipsis"
                  lineHeight={1.3}
                >
                  The Future of Renewable Energy: Innovations and Challenges
                  Ahead
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={2} mb={4}>
              <img
                src={bgNine}
                style={{
                  borderRadius: "20px",
                  maxWidth: 200,
                  aspectRatio: 4 / 3,
                  objectFit: "cover"
                }}
                alt="11"
              />
              <Box display="flex" flexDirection="column" gap={1}>
                <Box sx={{ color: "text.disabled" }}>
                  12 Aug 2024 ･ 8 min read
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  maxHeight={56}
                  sx={{ wordWrap: "break-word", overflow: "hidden" }}
                  textOverflow="ellipsis"
                  lineHeight={1.3}
                >
                  The Future of Renewable Energy: Innovations and Challenges
                  Ahead
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={2} mb={4}>
              <img
                src={bgNine}
                style={{
                  borderRadius: "20px",
                  maxWidth: 200,
                  aspectRatio: 1,
                  objectFit: "cover"
                }}
                alt="11"
              />
              <Box display="flex" flexDirection="column" gap={1}>
                <Box sx={{ color: "text.disabled" }}>
                  12 Aug 2024 ･ 8 min read
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  maxHeight={56}
                  sx={{ wordWrap: "break-word", overflow: "hidden" }}
                  textOverflow="ellipsis"
                  lineHeight={1.3}
                >
                  The Future of Renewable Energy: Innovations and Challenges
                  Ahead
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={{ xs: "flex", md: "none" }}
          flexDirection="column"
          gap={3}
        >
          <Box display="flex" gap={2} width="100%">
            <img
              src={bgNine}
              alt="11"
              style={{ borderRadius: "10px", maxWidth: 64 }}
            />
            <Box>
              <Link
                underline="hover"
                color="dark"
                variant="subtitle1"
                fontWeight="bold"
                mb={1}
                display="inline-block"
              >
                The Future of Renewable Energy: Innovations and Challenges Ahead
              </Link>
              <Box sx={{ color: "text.disabled" }}>
                12 Aug 2024 ･ 8 min read
              </Box>
            </Box>
          </Box>
          <Box display="flex" gap={2} width="100%">
            <img
              src={bgNine}
              alt="11"
              style={{ borderRadius: "10px", maxWidth: 64 }}
            />
            <Box>
              <Link
                underline="hover"
                color="dark"
                variant="subtitle1"
                fontWeight="bold"
                mb={1}
                display="inline-block"
              >
                The Future of Renewable Energy: Innovations and Challenges Ahead
              </Link>
              <Box sx={{ color: "text.disabled" }}>
                12 Aug 2024 ･ 8 min read
              </Box>
            </Box>
          </Box>
          <Box display="flex" gap={2} width="100%">
            <img
              src={bgNine}
              alt="11"
              style={{ borderRadius: "10px", maxWidth: 64 }}
            />
            <Box>
              <Link
                underline="hover"
                color="dark"
                variant="subtitle1"
                fontWeight="bold"
                mb={1}
                display="inline-block"
              >
                The Future of Renewable Energy: Innovations and Challenges Ahead
              </Link>
              <Box sx={{ color: "text.disabled" }}>
                12 Aug 2024 ･ 8 min read
              </Box>
            </Box>
          </Box>
          <Box display="flex" gap={2} width="100%">
            <img
              src={bgNine}
              alt="11"
              style={{ borderRadius: "10px", maxWidth: 64 }}
            />
            <Box>
              <Link
                underline="hover"
                color="dark"
                variant="subtitle1"
                fontWeight="bold"
                mb={1}
                display="inline-block"
              >
                The Future of Renewable Energy: Innovations and Challenges Ahead
              </Link>
              <Box sx={{ color: "text.disabled" }}>
                12 Aug 2024 ･ 8 min read
              </Box>
            </Box>
          </Box>
          <Box display="flex" gap={2} width="100%">
            <img
              src={bgNine}
              alt="11"
              style={{ borderRadius: "10px", maxWidth: 64 }}
            />
            <Box>
              <Link
                underline="hover"
                color="dark"
                variant="subtitle1"
                fontWeight="bold"
                mb={1}
                display="inline-block"
              >
                The Future of Renewable Energy: Innovations and Challenges Ahead
              </Link>
              <Box sx={{ color: "text.disabled" }}>
                12 Aug 2024 ･ 8 min read
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={{ xs: "block", md: "none" }} textAlign="center" mt={5}>
          <Button endIcon=">" component="a" color="dark">
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
