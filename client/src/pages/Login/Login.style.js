import { red, yellow } from "@mui/material/colors"

export const background = {
  textAlign: "center",
  height: "100vh",
  backgroundImage: `url('https://media1.popsugar-assets.com/files/thumbor/yiyRZZ9UT9YtphVt54lBFMGYP80/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/14/030/n/1922729/900d13e97e00c437_ClassPass_Zoom-background_6/i/Boxing-Ring-Zoom-Background.jpg')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "790px",
  with: '100vh'
};

export const form = {
  margin: '0 auto',
  borderRadius: 5,
  backgroundColor: '#f8f8f8',
  width: '500px',
  height: '100%',
  padding: '0 100px',
  overflow: 'hidden',
}

export const gridContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 5,
}

export const WelcomeMessage = {
  variant: 'h4',
  color: red[700],
  bgcolor: yellow[400],
  borderRadius: 3,
  padding: 3,
  width: '100%',
}