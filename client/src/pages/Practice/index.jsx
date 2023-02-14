import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import images from "../../../assets/img";
import TabPractice from "../../components/TabPractice";
import { form } from "./Practice.style";

export default function Practice() {
  return (
    <Box sx={form}>
      <Grid container gap={2} justifyContent='center'>
        <Grid item xs={11}>
          <Paper elevation={6} sx={{height:'150px', borderRadius: 3, overflow: 'hidden'}}>
            <TabPractice img={images.arm} title={'ARM & CHEST WORKOUT'} url='arm'/>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper elevation={6} sx={{height:'150px', borderRadius: 3, overflow: 'hidden'}}>
            <TabPractice img={images.abs} title={'ABS WORKOUT'} url='abs'/>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper elevation={6} sx={{height:'150px', borderRadius: 3, overflow: 'hidden'}}>
            <TabPractice img={images.back} title={'SHOULDER & BACK WORKOUT'} url='back'/>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper elevation={6} sx={{height:'150px', borderRadius: 3, overflow: 'hidden'}}>
            <TabPractice img={images.leg} title={'LEG WORKOUT'} url='leg'/>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
