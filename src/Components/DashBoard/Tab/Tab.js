import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grids from "../Grid/Grids";
import Lists from "../List";
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
        main: "#a9c303",
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
                <Grids coin={item} key={i} delay={(i % 5) * 0.1}/>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={"list"}>
          <table className="list-flex">
              {data.map((item, i) => (
                <Lists coin={item} key={i} delay={(i % 7) * 0.1}/>
              ))}
            </table>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}