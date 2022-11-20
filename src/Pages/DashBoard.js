import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import Tabs from "../Components/DashBoard/Tab/Tab";
import { APi_Url } from "../Constant";
import SearchBar from "../Components/DashBoard/SearchBar";
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import Loding from "../Components/Common/Loding/Loding";

function DashboardPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loder, setLoder] = useState(true);
  useEffect(() => {
    fetch(APi_Url)
      .then((response) => {
        return response.json();
      }).then((data1) => {
        setData(data1);
        setLoder(false)
      })
      .catch((error) => {
        alert("Error>>>", error);
      });
  }, []);

  const filterdItems = data.filter((item) => {
    if (
      item.symbol.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
    return "";
  });
  
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function goTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("top")
  }

  return (
    <div>
      <Header />
      {loder?
      <>
        <Loding/>
      </>:
      <>
      <SearchBar search={search} setSearch={setSearch} />
      <Tabs data={filterdItems} />
      <span onClick={goTopFunction} id="myBtn" className="gotoTopBtn"><KeyboardDoubleArrowUpRoundedIcon className="gototopbtnIcon" sx={{ fontSize: 30 }} /></span>
      </>
      }
      
    </div>
  );
}

export default DashboardPage;