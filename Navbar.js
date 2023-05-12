import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "../Styles/Navbar.css";

const navItems = [
  { Name: "Home", Link: "/" },
  { Name: "About us", Link: "/abou" },
  { Name: "Contact us", Link: "/cont" },
  { Name: "careers", Link: "/career" },
];
export const Navbar = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar
          className="navbar-container"
          component="nav"
          sx={{
            backgroundColor: "white",
            height: "10vh",
            position: "relative",
          }}
        >
          <Toolbar
            sx={{
              height: "50vh",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <Menu />
            </IconButton>
            <Box
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", color: "black" },
              }}
            >
              <img
                className="nav-logo"
                src="https://cosecantinc.com/wp-content/uploads/2022/11/Cosecant-1.png "
                alt="nav-logo"
              ></img>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  color: "black",
                  marginRight: "40px",
                },
              }}
            >
              <Button
                disableRipple
                className="stroke"
                sx={{ color: "black", transition: "all .5s" }}
              >
                <nav className="stroke">
                  <ul>
                    <li className="nav-items">
                      <a href="/">home</a>
                    </li>
                    <li className="nav-items">
                      <a href="/Abou">About us</a>
                    </li>
                    <li className="nav-items">
                      <div class="dropdown">
                        <a href="/serv1">service</a>
                        <ul class="dropdown-menu">
                          <div className="dropdown2">
                            <li>
                              <a href="#">consulting</a>
                            </li>

                            <ul class="dropdown-menu2">
                              <li>
                                <a href="#">Informatica</a>
                                <a href="#">salesForce</a>
                                <a href="#">Web development</a>
                                <a href="#">RedHat Linux</a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown3">
                            <li>
                              <a href="#">training</a>
                            </li>

                            <ul class="dropdown-menu3">
                              <li>
                                <a href="#">Online Training</a>
                                <a href="#">Onsite Training</a>
                              </li>
                            </ul>
                          </div>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-items">
                      <a href="care">Careers</a>
                    </li>
                    <li className="nav-items">
                      <a href="cont">Contact us</a>
                    </li>
                  </ul>
                </nav>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
