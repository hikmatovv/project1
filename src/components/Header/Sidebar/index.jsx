/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { Link } from "react";
import "./index.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../../assets/navbar-logo.svg";
import Grid from "@mui/material/Grid";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const pages = ["SERVICES", "PORTFOLIO", "ABOUT", "TEAM", "CONTACT"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isScroll, setIsScroll] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 220) {
        setIsScroll(true);
        // alert(`${window.scrollY}`);
      } else {
        setIsScroll(false);
        // alert(`${window.scrollY}`);
      }
    };
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  /////////////////////////////////////////////////////////////////////////////////open setting
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ widthX: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{backgroundColor:"#212529"}}>
      <ListItem  >
              <ListItemButton>
                <ListItemIcon>
                
                </ListItemIcon>
        <img src={Logo} alt="" style={{width:"140px"}} />

              </ListItemButton>
            </ListItem>
        {["SERVICES", "PORTFOLIO", "ABOUT", "TEAM", "CONTACT"].map(
          (text, index) => (
            <ListItem key={text} >
              <ListItemButton>
                <ListItemIcon>
                
                </ListItemIcon>
                <ListItemText primary={text} sx={{color:"white",":hover":{color:"#ffc800"}}} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  /////////////////////////////////////////////////////////////////////////////////open setting

  return (
    <div>
      <AppBar
        id="navbar"
        position="fixed"
        sx={{
          background: "none",
          boxShadow: "none",
          backgroundColor: isScroll ? "#212529" : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                // marginLeft: "40%",
                justifyContent: "space-between",
                padding:"0px"
              }}
            >
              <img style={{ width: "140px" }} src={Logo} alt="image_1" />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  border: "1px solid #9b9d9e",
                  borderRadius: "8px",
                }}
              >
                <div>
                  {["top"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button
                        sx={{ color: "rgba(255, 255, 255, 0.55)",fontWeight:"600" }}
                        onClick={toggleDrawer(anchor, true)}
                      >
                        MENU
                      </Button>
                      <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        sx={{ position: "relative", bottom: "70px" }}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </React.Fragment>
                  ))}
                </div>
                    <MenuIcon/>
                {/* <MenuIcon sx={{ color: "#9B9D9E", fontSize: "17px" }} /> */}
                {/* open setting */}

                {/* open setting */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                // marginLeft: `46%`,
                justifyContent: "space-between",
              }}
            >
              <a href="navbar">
                <img
                  src={Logo}
                  alt="_image"
                  width={isScroll ? "150px" : "200px"}
                  style={{
                      marginTop:"10px"
                  }}
                />
              </a>
              <Grid>
                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}

                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#DBA717",
                      ":hover":{color:"#ffc800"}
                    }}
                    href="#services"
                  >
                    services
                  </a>
                </Button>
                {/* </Link> */}

                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                    ":hover":{color:"#ffc800"}

                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                      ":hover": { color: "red" },
                    }}
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </Button>
                {/* </Link> */}

                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#about"
                  >
                    About
                  </a>
                </Button>
                {/* </Link> */}

                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#team"
                  >
                    Team
                  </a>
                </Button>
                {/* </Link> */}

                {/* <Link> */}
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "inline",
                    margin: "3px 10px 3px 10px",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#contact"
                  >
                    Contact
                  </a>
                </Button>
                {/* </Link> */}
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
