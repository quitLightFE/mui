import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import company7 from "../assets/images/companies/company-7.webp";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const cardData = [
  {
    avatar: company7,
    link: "Project Manager",
    title: "Altenwerth, Medhurst and Roberts",
    location: "Angola",
    posted: "01 Oct 2025",
    exp: "9 year exp",
    freeTime: "Freelance",
    salary: "Competetive",
    job: "Intern/student",
  },
  {
    avatar: company7,
    link: "Project Manager",
    title: "Altenwerth, Medhurst and Roberts",
    location: "Angola",
    posted: "01 Oct 2025",
    exp: "9 year exp",
    freeTime: "Freelance",
    salary: "Competetive",
    job: "Intern/student",
  },
  {
    avatar: company7,
    link: "Project Manager",
    title: "Altenwerth, Medhurst and Roberts",
    location: "Angola",
    posted: "01 Oct 2025",
    exp: "9 year exp",
    freeTime: "Freelance",
    salary: "Competetive",
    job: "Intern/student",
  },
  {
    avatar: company7,
    link: "Project Manager",
    title: "Altenwerth, Medhurst and Roberts",
    location: "Angola",
    posted: "01 Oct 2025",
    exp: "9 year exp",
    freeTime: "Freelance",
    salary: "Competetive",
    job: "Intern/student",
  },
  {
    avatar: company7,
    link: "Project Manager",
    title: "Altenwerth, Medhurst and Roberts",
    location: "Angola",
    posted: "01 Oct 2025",
    exp: "9 year exp",
    freeTime: "Freelance",
    salary: "Competetive",
    job: "Intern/student",
  },
  {
    avatar: company7,
    link: "Project Manager",
    title: "Altenwerth, Medhurst and Roberts",
    location: "Angola",
    posted: "01 Oct 2025",
    exp: "9 year exp",
    freeTime: "Freelance",
    salary: "Competetive",
    job: "Intern/student",
  },
];

export default function SecondSection() {
  return (
    <Box component="section" pt={[5, 5, 10]} pb={[10, 10, 15]}>
      <Container>
        <Typography
          variant="span"
          color="textDisabled"
          textAlign="center"
          display="block"
          textTransform="uppercase"
        >
          Featured jobs
        </Typography>
        <Typography variant="h4" fontWeight="bolder" my={3} textAlign="center">
          Jobs available apply to Editorial Specialist, Account Manager, Human
          Resources Specialist and more!
        </Typography>
        <Grid container spacing={4} py={5}>
          {cardData.map(
            ({
              avatar,
              link,
              title,
              location,
              posted,
              exp,
              freeTime,
              salary,
              job,
            }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    boxShadow:
                      "0 0 2px 0 rgba(145 158 171 / 20%),0 12px 24px -4px rgba(145 158 171 / 12%)",
                    "&:hover": {
                      boxShadow: "0 24px 48px 0 rgba(145 158 171 / 16%)",
                    },
                    borderRadius: 4,
                  }}
                >
                  <CardHeader
                    sx={{ pt: 3, px: 3 }}
                    action={
                      <FavoriteBorderOutlinedIcon
                        sx={{ color: "text.secondary" }}
                      />
                    }
                    avatar={<Avatar src={avatar} variant="rounded" />}
                  />
                  <CardContent sx={{ pb: 2 }}>
                    <Link
                      underline="hover"
                      variant="h6"
                      sx={{ color: "black" }}
                    >
                      {link}
                    </Link>
                    <Typography variant="body2" component="p" color="info">
                      {title}
                    </Typography>
                    <Box
                      display="flex"
                      sx={{ color: "text.secondary" }}
                      gap={1}
                    >
                      <RoomOutlinedIcon /> {location}
                    </Box>
                    <Typography
                      variant="caption"
                      component="span"
                      color="textDisabled"
                    >
                      Posted at: {posted}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions sx={{ pt: 2, px: 3, pb: 3 }}>
                    <Grid container spacing={1.5}>
                      <Grid size={6}>
                        <Box
                          sx={{ color: "text.secondary" }}
                          component="span"
                          display="flex"
                          gap={1}
                        >
                          <LeaderboardOutlinedIcon /> {exp}
                        </Box>
                      </Grid>
                      <Grid size={6}>
                        <Box
                          sx={{ color: "text.secondary" }}
                          component="span"
                          display="flex"
                          gap={1}
                        >
                          <AccessTimeOutlinedIcon /> {freeTime}
                        </Box>
                      </Grid>
                      <Grid size={6}>
                        <Box
                          sx={{ color: "text.secondary" }}
                          component="span"
                          display="flex"
                          gap={1}
                        >
                          <PaymentsOutlinedIcon /> {salary}
                        </Box>
                      </Grid>
                      <Grid size={6}>
                        <Box
                          sx={{ color: "text.secondary" }}
                          component="span"
                          display="flex"
                          gap={1}
                        >
                          <PermIdentityOutlinedIcon /> {job}
                        </Box>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            )
          )}
        </Grid>
        <Box textAlign="center">
          <Button variant="outlined" sx={{fontWeight: "bold"}} color="dark" endIcon=">">
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
