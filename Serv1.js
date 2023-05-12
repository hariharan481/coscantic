import React from "react";
import "../Styles/Serv1.css";

import { Home2 } from "./Home2";
import { Typography } from "@mui/material";
import { Servicess } from "./servicess";

export const Serv1 = () => {
  return (
    <div>
      <div className="servtop">
        <div className="servtop2"></div>

        <h5>Services</h5>
      </div>

      <Servicess />
    </div>
  );
};
