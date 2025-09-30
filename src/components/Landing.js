import {
  Autocomplete,
  Box,
  Container,
  Grid,
  // MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import BGLanding from "../assets/backgrounds/image.png";
import Man from "../assets/Man";
import { grey } from "@mui/material/colors";
import { Search } from "@mui/icons-material";

export default function Landing() {
  return (
    <Box
      sx={{
        minHeight: "min(1440px, 100vh)",
        backgroundImage: `linear-gradient(to bottom, #000000cc, #000000cc), url(${BGLanding})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: "120px",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                color: "white",
                maxWidth: { xs: "100%", md: 480 },
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
              sx={{ maxWidth: 480, color: grey[500] }}
              textAlign="center"
            >
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
              sapien, quis venenatis ante odio sit amet eros.
            </Typography>
            <Box display="flex" bgcolor="white">
              <Search>
                <Autocomplete
                  sx={{ bgcolor: "white" }}
                  options={[{ Label: "1", label: "2" }]}
                  disablePortal
                  renderInput={(p) => <TextField {...p} />}
                />
              </Search>
              <Autocomplete
                sx={{ bgcolor: "white" }}
                options={[{ Label: "1", label: "2d" }]}
                disablePortal
                renderInput={(p) => <TextField {...p} />}
              />
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
