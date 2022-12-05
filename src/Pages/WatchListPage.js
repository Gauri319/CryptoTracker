import React,{ useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import Loding from "../Components/Common/Loding/Loding";
import axios from "axios";
import { APi_Url } from "../Constant";
import Tabs from "../Components/DashBoard/Tab/Tab";
import{Link} from "react-router-dom"
import Button from "../Components/Common/Button";

function WatchListPage(){
    const[loding,setLoding]=useState(true);
    const[mycoin,setMYCoin]=useState(true);
    const watchlist = localStorage.getItem("watchlist")
    ? localStorage.getItem("watchlist").split(",")
    : [];
    useEffect(()=>{
       axios.get(APi_Url)
        .then((response) => {
           var watchlistCoins = response.data.filter((coins) => watchlist.includes(coins.id));
           setMYCoin(watchlistCoins);
        })
        .catch((error) => {
          console.log("Error>>>", error);
        });
        setLoding(false);
    },[])

   return(
    <div>
        <Header/>
        {
            loding?
            <Loding/>:
            <div>
                {
                    mycoin.length>0?<Tabs data={mycoin} />:
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"20px"}}>
                        <div style={{textAlign:"center"}}><h1>Your Watchlist is curently Empty</h1></div>
                        <div style={{textAlign:"center", color:"var(--grezy)"}}><p>Please Add Your Crypto currencies</p></div>
                        <div style={{textAlign:"center"}}><Link to='/dashboard'><Button text="DashBoard"/></Link></div>
                    </div>
                }
               
            </div>
        }

    </div>
   )
}
export default WatchListPage;