import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import Tabs from "../Components/DashBoard/Tab";
import { APi_Url } from "../Constant";

function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(APi_Url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert("Error>>>", error);
      });
  }, []);

  return (
    <div>
      <Header/>
      <Tabs data={data} />
    </div>
  );
}

export default DashboardPage;