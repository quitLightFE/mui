import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import BGSection from "../assets/backgrounds/image.png";
import imageSvg from "../assets/images/illustration-recruitment.svg";

export default function SixthSection() {
  return (
    <Box
      component="section"
      py={10}
      sx={{
        backgroundImage: `linear-gradient(to bottom, #000000cc, #000000cc), url(${BGSection})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container justifyContent="space-between">
          <Grid
            size={{ xs: 12, md: 6, lg: 5 }}
            textAlign={["center", "center", "unset"]}
          >
            <Typography component="span" color="primary" mb={2} variant="body2">
              FOR RECRUITERS
            </Typography>
            <Typography fontWeight="bold" variant="h3" sx={{ color: "white" }}>
              Do you have a position to post job?
            </Typography>
            <Typography
              variant="p"
              component="p"
              mt={3}
              mb={5}
              sx={{
                color: "white",
                opacity: 0.72,
              }}
            >
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
              Morbi mattis ullamcorper velit.
            </Typography>
            <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                color: "white",
                display: "inline-flex",
                textTransform: "unset",
              }}
              color="primary"
              startIcon={<DriveFolderUploadIcon />}
            >
              Post a job
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 5 }} justifyContent="center" display="flex">
            <Box component="img" src={imageSvg} maxWidth="100%"></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
