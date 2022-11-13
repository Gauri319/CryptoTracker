import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import Tabs from "../Components/DashBoard/Tab";
import { APi_Url } from "../Constant";

function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch(APi_Url)
      .then((response) => {
        return response.json();
      }).then((data1)=>{

        console.log(data1)
        setData(data1)
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