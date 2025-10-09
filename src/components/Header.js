import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Icon from "../assets/Icon";
import SearchIcon from "@mui/icons-material/Search";
import GBIcon from "../assets/icons/GB.svg";
// import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: isScrolled ? "#ffffffbb" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        color: isScrolled ? "black" : "white"
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2
        }}
      >
        <Icon width="80" color={isScrolled ? "black" : "white"} />
        <Box gap={3} display={{ md: "flex", xs: "none" }}>
          <Link href="#" color="inherit" underline="none">
            Home
          </Link>
          <Link href="#" color="inherit" underline="none">
            Components
          </Link>
          <Link href="#" color="inherit" underline="none">
            Pages
          </Link>
          <Link href="#" color="inherit" underline="none">
            Docs
          </Link>
        </Box>
        <Box gap={1} display="flex">
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton>
            <img width="26" src={GBIcon} alt="English" />
          </IconButton>
          <IconButton color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>
          <Button
            sx={{
              display: { md: "block", xs: "none" },
              bgcolor: "#1C252E",
              color: "white",
              textTransform: "none",
              width: 94,
              fontWeight: "bold"
            }}
          >
            Purchase
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}
