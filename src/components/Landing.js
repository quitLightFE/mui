import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  // MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import BGLanding from "../assets/backgrounds/image.png";
import Man from "../assets/Man";
import { grey } from "@mui/material/colors";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import AirBnb from "../assets/brands/airbnb.svg";
import DropBox from "../assets/brands/dropbox.svg";
import Facebook from "../assets/brands/facebook.svg";
import Google from "../assets/brands/google.svg";

export default function Landing() {
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "min(1440px, 100vh)" },
        backgroundImage: `linear-gradient(to bottom, #000000cc, #000000cc), url(${BGLanding})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: [10, 10, 15],
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
            <Box
              display="flex"
              flexDirection="column"
              // alignItems="center"
              sx={{ gap: 5, maxWidth: { xs: "auto", md: 480 } }}
            >
              <Typography
                sx={{
                  color: "white",
                  textAlign: "center",
                }}
                fontWeight="bolder"
                variant="h2"
              >
                Get the{" "}
                <Typography
                  component="span"
                  variant="h2"
                  fontWeight="bolder"
                  sx={{
                    background:
                      "linear-gradient(90deg, #FA541C 20%, #8E33FF 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Career
                </Typography>{" "}
                you deserve
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{ color: grey[500] }}
                textAlign="center"
              >
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </Typography>
              <Box
                display={{ xs: "block", md: "flex" }}
                bgcolor="white"
                borderRadius={2}
                overflow={"hidden"}
              >
                <Box display="flex" flex={1}>
                  <Autocomplete
                    fullWidth
                    sx={{ bgcolor: "white" }}
                    options={["1", "2"]}
                    disablePortal
                    renderInput={(p) => (
                      <TextField
                        placeholder="Job title, keywords"
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                        }}
                        {...p}
                        InputProps={{
                          ...p.InputProps,
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box display={{ xs: "block", md: "flex" }} flex={1}>
                  <Autocomplete
                    fullWidth
                    sx={{ bgcolor: "white" }}
                    options={["1", "2d"]}
                    disablePortal
                    renderInput={(p) => (
                      <TextField
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                        }}
                        placeholder="Location"
                        {...p}
                      />
                    )}
                  />
                  <Button
                    sx={{
                      m: 0.5,
                      width: { xs: "calc(100% - 8px)", md: "auto" },
                    }}
                    variant="contained"
                    color="primary"
                  >
                    <SearchIcon />
                  </Button>
                </Box>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
                gap={4}
              >
                <Typography
                  component="span"
                  sx={{
                    width: 94,
                    height: 28,
                    display: "inline-block",
                    mask: `url(${AirBnb}) no-repeat center / contain`,
                    color: "text.disabled",
                    bgcolor: "#919eab",
                    flexShrink: 0,
                  }}
                ></Typography>
                <Typography
                  component="span"
                  sx={{
                    width: 94,
                    height: 28,
                    display: "inline-block",
                    mask: `url(${DropBox}) no-repeat center / contain`,
                    color: "text.disabled",
                    bgcolor: "#919eab",
                    flexShrink: 0,
                  }}
                ></Typography>
                <Typography
                  component="span"
                  sx={{
                    width: 94,
                    height: 28,
                    display: "inline-block",
                    mask: `url(${Facebook}) no-repeat center / contain`,
                    color: "text.disabled",
                    bgcolor: "#919eab",
                    flexShrink: 0,
                  }}
                ></Typography>
                <Typography
                  component="span"
                  sx={{
                    width: 94,
                    height: 28,
                    display: "inline-block",
                    mask: `url(${Google}) no-repeat center / contain`,
                    color: "text.disabled",
                    bgcolor: "#919eab",
                    flexShrink: 0,
                  }}
                ></Typography>
              </Box>
              <Box
                display="inline-flex"
                gap={3}
                justifyContent="center"
                alignItems="center"
              >
                <div>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    component="span"
                    sx={{ color: "white", display: "block" }}
                    textAlign="center"
                  >
                    2m+
                  </Typography>
                  <Typography
                    variant="body1"
                    display="block"
                    component="span"
                    textAlign="center"
                    sx={{ color: "white", opacity: 0.4 }}
                  >
                    Jobs
                  </Typography>
                </div>
                <Divider
                  variant="fullWidth"
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "rgba(145 158 171 / 20%)" }}
                />
                <div>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    component="span"
                    sx={{ color: "white", display: "block" }}
                    textAlign="center"
                  >
                    500k+
                  </Typography>
                  <Typography
                    variant="body1"
                    display="block"
                    component="span"
                    textAlign="center"
                    sx={{ color: "white", opacity: 0.4 }}
                  >
                    Successful hiring
                  </Typography>
                </div>
                <Divider
                  variant="fullWidth"
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "rgba(145 158 171 / 20%)" }}
                />
                <div>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    component="span"
                    sx={{ color: "white", display: "block" }}
                    textAlign="center"
                  >
                    250k+
                  </Typography>
                  <Typography
                    variant="body1"
                    display="block"
                    component="span"
                    textAlign="center"
                    sx={{ color: "white", opacity: 0.4 }}
                  >
                    Partners
                  </Typography>
                </div>
                <Divider
                  variant="fullWidth"
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "rgba(145 158 171 / 20%)" }}
                />
                <div>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    component="span"
                    sx={{ color: "white", display: "block" }}
                    textAlign="center"
                  >
                    156k+
                  </Typography>
                  <Typography
                    variant="body1"
                    display="block"
                    component="span"
                    textAlign="center"
                    sx={{ color: "white", opacity: 0.4 }}
                  >
                    Employee
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{ display: { xs: "none", md: "flex" } }}
            size={{ xs: 0, md: 6 }}
            justifyContent="end"
            display="flex"
          >
            <Man />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
