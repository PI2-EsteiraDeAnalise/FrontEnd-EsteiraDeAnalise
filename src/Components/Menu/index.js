import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { SectionWeb, SectionMobile } from "./styles";
import { BrowserView, MobileView } from "react-device-detect";
import List from "@mui/material/List";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import Info from "@mui/icons-material/Info";
import Merge from "@mui/icons-material/Merge";
import Dashboard from "@mui/icons-material/Dashboard";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Menu = (props) => {
  const coords = props.coords || null;

  const removeHandle = useCallback(() => {
    if (coords !== null && coords.length > 0) {
      console.log(coords);

      for (let index = 0; index < coords.length; index++) {
        let id =
          "coord-" +
          coords[index][0].toString() +
          coords[index][1].toString() +
          coords[index][2].toString() +
          coords[index][3].toString();

        console.log(id);

        document.getElementById(id).remove();
      }
    }
  }, [coords]);

  const [open, setOpen] = useState(false);
  const [namePage, setNamePage] = useState("Dashboard");

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setNamePage("Dashboard");
        break;
      case "/Coordenadas":
        setNamePage("Coordenadas");
        break;
      case "/Informacoes":
        setNamePage("Informações");
        break;
      default:
        break;
    }
  }, [namePage]);

  return (
    <>
      <BrowserView>
        <SectionWeb>
          <header>
            <nav>
              <div>
                <Link onClick={removeHandle} to="/">
                  Dashboard
                </Link>
                <Link onClick={removeHandle} to="/Coordenadas">
                  Coordenadas
                </Link>
                <Link onClick={removeHandle} to="/Informacoes">
                  Informações
                </Link>
                <Link onClick={removeHandle} to="/QRCode">
                  Conexão
                </Link>
              </div>
            </nav>
          </header>
        </SectionWeb>
      </BrowserView>

      <MobileView>
        <List sx={{ width: "100%", bgcolor: "#E3DEF7" }} component="nav">
          <ListItemButton onClick={handleClick}>
            <ListItemText primary={namePage} sx={{ textAlign: "center" }} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  setNamePage("Dashboard");
                }}
              >
                <SectionMobile>
                  <ListItemIcon>
                    <Dashboard sx={{ color: "black" }} />
                  </ListItemIcon>
                  <Link to="/">
                    <ListItemText
                      primary="Dashboard"
                      sx={{ textAlign: "center" }}
                    />
                  </Link>
                </SectionMobile>
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  setNamePage("Informações");
                }}
              >
                <SectionMobile>
                  <ListItemIcon>
                    <Info sx={{ color: "black" }} />
                  </ListItemIcon>
                  <Link to="/Informacoes">
                    <ListItemText
                      primary="Informações"
                      sx={{ textAlign: "center" }}
                    />
                  </Link>
                </SectionMobile>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </MobileView>
    </>
  );
};

export default Menu;
