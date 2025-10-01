import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import signUp from "../assets/duotone/ic-signup.svg";
import jobResume from "../assets/duotone/ic-job-resume.svg";
import jobSearch from "../assets/duotone/ic-job-search.svg";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { DriveFolderUpload } from "@mui/icons-material";
export default function FirstSection() {
  return (
    <Box
      sx={{ pt: [10, 10, 15], pb: [5, 5, 10] }}
      component="section"
      textAlign="center"
    >
      <Container>
        <Typography
          variant="span"
          color="textDisabled"
          textAlign="center"
          display="block"
          textTransform="uppercase"
        >
          For candidates
        </Typography>
        <Typography variant="h3" fontWeight="bolder" my={3} textAlign="center">
          Explore thousands of jobs
        </Typography>
        <Typography
          varaint="p"
          textAlign="center"
          color="textDisabled"
          mx="auto"
          maxWidth={480}
        >
          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
          Morbi mattis ullamcorper velit.
        </Typography>
        <Grid container my={5} spacing={5}>
          <Grid size={{ xs: 12, md: 4 }} textAlign="center">
            <Box
              component="span"
              display="inline-flex"
              width={80}
              height={80}
              sx={{
                background: "linear-gradient(to bottom, #FDAB76, #FA541C)",
                mask: `url(${signUp})`,
              }}
            />
            <Typography
              component="span"
              color="textDisabled"
              textTransform="uppercase"
              display="block"
              mt={4}
            >
              Step 1
            </Typography>
            <Typography fontWeight="bold" mt={2} mb={1} variant="h6">
              Create an account
            </Typography>
            <Typography variant="p" color="textSecondary">
              Nunc nonummy metus. Donec elit libero.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} textAlign="center">
            <Box
              component="span"
              display="inline-flex"
              width={80}
              height={80}
              sx={{
                background: "linear-gradient(to bottom, #FDAB76, #FA541C)",
                mask: `url(${jobResume})`,
              }}
            />
            <Typography
              component="span"
              color="textDisabled"
              textTransform="uppercase"
              display="block"
              mt={4}
            >
              Step 2
            </Typography>
            <Typography fontWeight="bold" mt={2} mb={1} variant="h6">
              Complete your profile
            </Typography>
            <Typography variant="p" color="textSecondary">
              Nunc nonummy metus. Donec elit libero.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} textAlign="center">
            <Box
              component="span"
              display="inline-flex"
              width={80}
              height={80}
              sx={{
                background: "linear-gradient(to bottom, #FDAB76, #FA541C)",
                mask: `url(${jobSearch})`,
              }}
            />
            <Typography
              component="span"
              color="textDisabled"
              textTransform="uppercase"
              display="block"
              mt={4}
            >
              Step 3
            </Typography>
            <Typography fontWeight="bold" mt={2} mb={1} variant="h6">
              Search your job
            </Typography>
            <Typography variant="p" color="textSecondary">
              Nunc nonummy metus. Donec elit libero.
            </Typography>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{ bgcolor: "#1C252E", textTransform: "unset" }}
          startIcon={<DriveFolderUpload />}
        >
          Upload your CV
        </Button>
      </Container>
    </Box>
  );
}
