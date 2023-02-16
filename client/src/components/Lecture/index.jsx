import { ChevronRight } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import LevelIcon from "../LevelIcon";

export default function Lecture({ level, time }) {
  return (
    <Grid item xs={11} >
    <Paper
      elevation={6}
      sx={{
        height: "100px",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
      <LevelIcon level={level} />
      <Box>
        <Typography variant="h4">
          Level {level} / {time}
        </Typography>
        <Typography variant="body2">
          {level < 8 ? "Light" : level < 15 ? "Moderate" : "High"} Intensity
        </Typography>
      </Box>
      <IconButton>
        <ChevronRight />
      </IconButton>
    </Paper>
    </Grid>
  );
}
