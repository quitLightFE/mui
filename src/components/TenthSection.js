import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import scanQr from "../assets/icons/ic-qrcode.svg";
import phone from "../assets/images/career/image copy.png";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function TenthSection() {
  return (
    <Box component="section" py={{ xs: "none", md: 5 }}>
      <Container>
        <Grid container justifyContent="space-between" spacing={3}>
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Box textAlign="center">
              <Typography variant="h3" fontWeight="bold">
                Download app
              </Typography>
              <Typography variant="body1" mt={3} mb={5}>
                Now finding the new job just got even easier with our new app!
              </Typography>
            </Box>
            <Box
              p={5}
              border="1px solid rgba(145 158 171 / 20%)"
              borderRadius={2}
            >
              <Box
                display="flex"
                gap={3}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  width={120}
                  height={120}
                  bgcolor="currentcolor"
                  sx={{
                    mask: `url(${scanQr})`,
                  }}
                />
                <Box>
                  Scan QR code to <br /> install on your device
                </Box>
              </Box>
              <Divider sx={{ my: 5 }} />
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                gap={2}
              >
                <Button
                  color="dark"
                  variant="contained"
                  startIcon={<AppleIcon />}
                  sx={{ color: "white", textTransform: "unset" }}
                >
                  <div>
                    <Box
                      sx={{
                        opacity: 0.72,
                        fontSize: 12,
                        lineHeight: 1.5,
                        fontWeight: 400,
                      }}
                      display="block"
                      component="span"
                    >
                      Download on the
                    </Box>
                    <Box
                      mt={-0.5}
                      sx={{
                        fontSize: 18,
                        lineHeight: 1.5,
                        fontWeight: 600,
                      }}
                      component="span"
                    >
                      App Store
                    </Box>
                  </div>
                </Button>
                <Button
                  color="dark"
                  variant="contained"
                  startIcon={<PlayArrowIcon />}
                  sx={{ color: "white", textTransform: "unset" }}
                >
                  <div>
                    <Box
                      sx={{
                        opacity: 0.72,
                        fontSize: 12,
                        lineHeight: 1.5,
                        fontWeight: 400,
                      }}
                      display="block"
                      component="span"
                    >
                      Download on the
                    </Box>
                    <Box
                      mt={-0.5}
                      sx={{
                        fontSize: 18,
                        lineHeight: 1.5,
                        fontWeight: 600,
                      }}
                      component="span"
                    >
                      Google PLay
                    </Box>
                  </div>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }} textAlign="center">
            <img src={phone} alt="" style={{ width: "min(600px, 100%)" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
