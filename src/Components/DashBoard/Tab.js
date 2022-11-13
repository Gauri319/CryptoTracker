import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grids from "./Grids";
import "./Tabs.css";
export default function Tabs({ data }) {
  const [tabValue, setTabValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <TabContext value={tabValue}>
          <div>
            <TabList variant="fullWidth" onChange={handleChange}>
              <Tab label="Grid" value={"grid"} sx={style} />
              <Tab label="List" value={"list"} sx={style} />
            </TabList>
          </div>
          <TabPanel value={"grid"}>
            <div className="grid-flex">
              {data.map((item, i) => (
                <Grids coin={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel value={"list"}></TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}