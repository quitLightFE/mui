import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import Icon from "../assets/Icon";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const footerLinks = {
  Marketing: [
    "Landing",
    "Services",
    "Case studies",
    "Case study",
    "Posts",
    "Post",
    "About",
    "Contact"
  ],
  Travel: [
    "Landing",
    "Tours",
    "Tour",
    "Checkout",
    "Order completed",
    "Posts",
    "Post",
    "About",
    "Contact"
  ],
  Career: ["Landing", "Jobs", "Job", "Posts", "Post", "About", "Contact"],
  "E-learning": [
    "Landing",
    "Courses",
    "Course",
    "Posts",
    "Post",
    "About",
    "Contact"
  ],
  "E-commerce": [
    "Landing",
    "Products",
    "Product",
    "Cart",
    "Checkout",
    "Order completed",
    "Wishlist",
    "Compare",
    "Account personal",
    "Account wishlist",
    "Account vouchers",
    "Account orders",
    "Account payment"
  ],
  Common: [
    "Sign in (split)",
    "Sign up (split)",
    "Sign in (centered)",
    "Sign up (centered)",
    "Sign in (illustration)",
    "Sign up (illustration)",
    "Reset password",
    "Update password",
    "Verify",
    "404 error",
    "500 error",
    "Maintenance",
    "Coming soon",
    "Pricing cards",
    "Pricing columns",
    "Payment",
    "Support"
  ]
};

export default function Footer() {
  return (
    <>
      <Box component="footer">
        <Container
          sx={{ pt: { xs: 10 }, pb: { xs: 3, md: 5 }, mx: "auto", px: 3 }}
        >
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid
              size={{ xs: 12, md: 5, lg: 4 }}
              display="flex"
              flexDirection="column"
              gap={{ xs: 3, md: 5 }}
            >
              <Box
                display="flex"
                flexDirection="column"
                gap={3}
                textAlign={{ xs: "center", md: "start" }}
              >
                <Link color="dark">
                  <Icon width={80} />
                </Link>
                <Typography color="textSecondary" variant="body2">
                  The starting point for your next project based on
                  easy-to-customize Material-UI © helps you build apps faster
                  and better.
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                textAlign={{ xs: "center", md: "start" }}
              >
                <Typography variant="h6">Community</Typography>
                <Link underline="hover" variant="body2" color="textPrimary">
                  Documentation
                </Link>
                <Link underline="hover" variant="body2" color="textPrimary">
                  Changelog
                </Link>
                <Link underline="hover" variant="body2" color="textPrimary">
                  Contributing
                </Link>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography mb={1} variant="h6">
                  Let’s stay in touch
                </Typography>
                <Typography variant="caption">
                  Ubscribe to our newsletter to receive latest articles to your
                  inbox weekly.
                </Typography>
              </Box>
              <Box display="flex">
                <TextField
                  variant="filled"
                  fullWidth
                  placeholder="Email address"
                />
                <Button
                  variant="contained"
                  color="dark"
                  sx={{ color: "white" }}
                >
                  Subscribe
                </Button>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography variant="h6">Social</Typography>
                <Box>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton>
                    <XIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography variant="h6">Apps</Typography>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent={{ xs: "center", md: "start" }}
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
                          fontWeight: 400
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
                          fontWeight: 600
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
                          fontWeight: 400
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
                          fontWeight: 600
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

            <Grid
              size={{ xs: 12, md: 6, lg: 6 }}
              display={["none", "none", "block"]}
            >
              <Box
                component="nav"
                sx={{
                  columnCount: 3,
                  columnGap: 4
                }}
              >
                {Object.entries(footerLinks).map(([category, links]) => (
                  <Box
                    key={category}
                    sx={{
                      breakInside: "avoid",
                      mb: 3,
                      display: "inline-block"
                    }}
                  >
                    <Typography variant="h6">{category}</Typography>
                    {links.map(link => (
                      <Link
                        key={link}
                        underline="hover"
                        color="textPrimary"
                        variant="caption"
                        display="block"
                      >
                        {link}
                      </Link>
                    ))}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />
      <Box
        display={{ xs: "block", md: "flex" }}
        px={2}
        py={3}
        justifyContent="space-between"
        textAlign="center"
      >
        <Typography variant="caption" display='block'>© All rights researved</Typography>
        <Typography variant="caption2" color="textDisabled">
          Help center · Terms of service
        </Typography>
      </Box>
    </>
  );
}
