import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import bgContact from "../assets/images/career/image.png";
export default function Contact() {
  return (
    <Box
      component="section"
      py={15}
      sx={{
        backgroundImage: `radial-gradient(50% 160% at 50% 50%, #00000066, #000), url(${bgContact})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
      textAlign="center"
    >
      <Container>
        <Typography variant="h3" fontWeight="bold">
          Get the right job for you
        </Typography>
        <Typography my={3} variant="body1" fontWeight="bold">
          Subscribe to get updated on latest and relevant career opportunities
        </Typography>
        <Box
          display="flex"
          borderRadius={3}
          overflow="hidden"
          mx="auto"
          justifyContent="center"
          maxWidth={560}
        >
          <TextField
            sx={{ bgcolor: "white" }}
            placeholder="Enter your email"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "unset" }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
