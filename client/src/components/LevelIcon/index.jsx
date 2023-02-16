import React from "react";
import { Box, Typography } from "@mui/material";
import { PanoramaFishEye } from "@mui/icons-material";

export default function LevelIcon({ level }) {
  if (level < 1 || level > 20) {
    return null; // return null if level is out of range
  }

  return (
    <Box sx={{ position: 'relative', display: 'flex' }}>
      <PanoramaFishEye color={level <8 ? 'primary': level < 15 ? 'success': 'warning'} sx={{ fontSize: "4rem" }} />
      <Typography
        variant="h4"
        sx={{ position: 'absolute', left: level<10? "22px": '12px', top: "12px" }}>
        {level}
      </Typography>
    </Box>
  );
}
