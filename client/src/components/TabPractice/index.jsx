import { ChevronRight } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function TabPractice({ title, img, url }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        padding: "15px",
      }}>
      <Typography
        variant="body1"
        color={"white"}
        fontWeight={"bolder"}
        fontSize={"1.3rem"}
        gutterBottom>
        {title}
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to={url}
        endIcon={<ChevronRight />}
        sx={{ top: "45px", left: "155px" }}>
        Go
      </Button>
    </Box>
  );
}
