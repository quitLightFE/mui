import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import finances from "../assets/icons/ic-finance.svg";

export default function FourthSecion() {
  const theme = useTheme();
  return (
    <Box component="section" pt={[10, 10, 15]} pb={[0, 0, 5]}>
      <Container>
        <Typography fontWeight="bold" textAlign="center" variant="h3">
          Hot categories
        </Typography>
        <Grid container spacing={5} my={[5, 5, 10]}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((card) => (
            <Grid
              sx={{
                "& > .MuiBox-root:hover": {
                  boxShadow: "0 24px 48px 0 rgba(145 158 171 / 16%)",
                  "& > .MuiBox-root": {
                    bgcolor: theme.palette.primary.main,
                    "& > span": {
                      bgcolor: "white",
                    },
                  },
                },
              }}
              size={{ xs: 6, sm: 4, md: 3, lg: 3 }}
            >
              <Box
                border="1px solid rgba(145 158 171 / 20%)"
                sx={{ aspectRatio: 1, transition: "0.7s" }}
                borderRadius={4}
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  sx={{
                    p: 2,
                    transition: "0.7s",
                    borderRadius: "50%",
                    aspectRatio: 1,
                  }}
                >
                  <Box
                    component="span"
                    display="inline-flex"
                    bgcolor="#1c252e"
                    sx={{
                      mask: `url(${finances}) no-repeat center / contain`,
                      width: 40,
                      height: 40,
                    }}
                  />
                </Box>
                <Typography variant="h6" noWrap textOverflow="ellipsis" width="80%">
                  Accounting / Finance
                </Typography>
                <Typography variant="body2" color="textDisabled">
                  497 jobs
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center">
          <Button
            variant="outlined"
            sx={{ fontWeight: "bold" }}
            color="dark"
            endIcon=">"
          >
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
