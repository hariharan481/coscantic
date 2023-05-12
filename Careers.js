import { Box, Typography } from "@mui/material";
import React from "react";

export const Careers = () => {
  return (
    <>
      <div className="servtop">
        <div className="servtop2"></div>

        <h5>Careers</h5>
      </div>
      <Box
        sx={{
          height: "300px",
          width: "500px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" mt={5}>
          No openings right now. Stay tuned
        </Typography>
      </Box>
    </>
  );
};
