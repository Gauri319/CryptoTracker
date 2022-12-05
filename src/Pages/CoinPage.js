import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import { GetCoinData } from "../Functions/CoinUrl";
import Loding from "../Components/Common/Loding/Loding";
import Lists from "../Components/DashBoard/List";
import CoinInfo from "../Components/CoinPage/CoinInfo/CoinInfo";
import { getPrices } from "../Functions/getPrice";
import LineChart from "../Components/CoinPage/CoinChart";
import { GetDates } from "../Functions/GetDates";
import SelectDays from "../Components/CoinPage/SelectDays";
import ToggleTab from "../Components/CoinPage/ToggleTab";
import { convertNumbers } from "../Functions/ConvertNumber";
function CoinPage() {
    const { id } = useParams();
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(true);
    const [days, setDays] = useState(30);
    const[priceType,setPriceType]=useState("prices")


    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
          label: 'My First Dataset',
          data: [],
          fill: false,
          borderColor: '#ffff',
          tension: 0.1,
        }]
        });
    useEffect(() => {
        setCoinData();
    }, [id]);

    const setCoinData = async () => {
        const data = await (GetCoinData(id));
        const prices = await (getPrices(id,days,priceType));
        if (data) {
            console.log("data", data);
            setCoin({
                id: data.id,
                name: data.name,
                symbol: data.symbol,
                image: data.image.large,
                desc: data.description.en,
                price_change_percentage_24h:
                    data.market_data.price_change_percentage_24h,
                total_volume: data.market_data.total_volume.usd,
                current_price: data.market_data.current_price.usd,
                market_cap: data.market_data.market_cap.usd,
            });
            setLoading(false);
        }
        if(prices){
           setChartData({
            labels: prices.map((data)=>{return GetDates(data[0]) }),
            datasets: [{
              label: 'prices',
              data:prices?.map((data)=>data[1]),
              borderWidth: 1,
              fill: false,
              tension: 0.25,
              backgroundColor: "transparent",
              borderColor: "#3a80e9",
              pointRadius: 0,
            }]

           })
        }
    }
    const handleDaysChange =async(event) => {
        setDays(event.target.value);
        const prices = await(getPrices(id,event.target.value,priceType));
        if(prices){
            setChartData({
             labels: prices.map((data)=>{return GetDates(data[0]) }),
             datasets: [{
               label:{priceType},
               data:prices?.map((data)=>data[1]),
               borderWidth: 1,
               fill: false,
               tension: 0.25,
               backgroundColor: "transparent",
               borderColor: "#3a80e9",
               pointRadius: 0,
             }]
 
            })
         }

      };
      const handlePriceChange =async(event) => {
        setPriceType(event.target.value);
        const prices = await(getPrices(id,days,event.target.value));
        if(prices){
            setChartData({
             labels: prices.map((data)=>{return GetDates(data[0]) }),
             datasets: [{
               label:{priceType},
               data:prices?.map((data)=>data[1]),
               borderWidth: 1,
               fill: false,
               tension: 0.25,
               backgroundColor: "transparent",
               borderColor: "#3a80e9",
               pointRadius: 0,
             }]
 
            })
         }
      };

const options = {
    plugins: {
      legend: {
        display: true ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        ticks:
          priceType === "market_caps"
            ? {
                callback: function (value) {
                  return "$" + convertNumbers(value);
                },
              }
            : priceType === "total_volumes"
            ? {
                callback: function (value) {
                  return convertNumbers(value);
                },
              }
            : {
                callback: function (value, index, ticks) {
                  return "$" + value.toLocaleString();
                },
              },
      },
    }
  };

    return (
        <div>
            <Header />
            {
                loading ?
                    <Loding /> :
                    <>
                        <div className="sub-containers" style={{paddingTop:"0px",paddingBottom:"0px"}}><Lists coin={coin}/></div>
                        <div className="sub-containers"> <SelectDays days={days} handleChange={handleDaysChange}/><ToggleTab priceType={priceType} handlePriceChange={handlePriceChange}/> <LineChart chartData={chartData}  options={options}/></div>
                        <div className="sub-containers"><CoinInfo name={coin.name} desc={coin.desc}/></div>
                    </>
            }

        </div>
    )
}
export default CoinPage;