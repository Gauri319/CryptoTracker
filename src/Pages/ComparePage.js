import React, { useState, useEffect } from 'react';
import Header from '../Components/Common/Header';
import SelectCoin from '../Components/CoinPage/SelectCoin';
import SelectDays from '../Components/CoinPage/SelectDays';
import { GetCoinData } from '../Functions/CoinUrl';
import { getPrices } from "../Functions/getPrice";
import Loding from '../Components/Common/Loding/Loding';
import Lists from '../Components/DashBoard/List';
import { APi_Url } from "../Constant";
import CoinInfo from '../Components/CoinPage/CoinInfo/CoinInfo';
import { convertNumbers } from "../Functions/ConvertNumber";
import LineChart from "../Components/CoinPage/CoinChart";
import { GetDates } from "../Functions/GetDates";
import ToggleTab from "../Components/CoinPage/ToggleTab";

function ComparePage() {
    const [coin1, setCoin1] = useState("bitcoin")
    const [coin2, setCoin2] = useState("ethereum");
    const [days, setDays] = useState(7);
    const [priceType, setPriceType] = useState("prices")
    const [coin1Data, setCoin1Data] = useState({});
    const [coin2Data, setCoin2Data] = useState({});
    const [loding, setLoading] = useState(true);
    const [allCoin, setAllCoin] = useState([]);

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
        fetch(APi_Url)
            .then((response) => {
                return response.json();
            })
            .then((data1) => {
                setAllCoin(data1);
            }
            )
            .catch((error) => {
                alert("Error>>>", error);
            });
        getCoinData();
    }, []);

    const handleCoinChange = async (e, iscoin2) => {
        console.log(iscoin2);
        if (!iscoin2) {
            setCoin1(e.target.value)
            const data1 = await GetCoinData(e.target.value);
            if (data1) {
                setCoin1Data({
                    id: data1.id,
                    name: data1.name,
                    symbol: data1.symbol,
                    image: data1.image.large,
                    desc: data1.description.en,
                    price_change_percentage_24h:
                        data1.market_data.price_change_percentage_24h,
                    total_volume: data1.market_data.total_volume.usd,
                    current_price: data1.market_data.current_price.usd,
                    market_cap: data1.market_data.market_cap.usd,
                });
            }
            getPricesData(e.target.value, coin2, days, priceType);
        }
        else {
            setCoin2(e.target.value)
            const data2 = await GetCoinData(e.target.value)
            if (data2) {
                setCoin2Data({
                    id: data2.id,
                    name: data2.name,
                    symbol: data2.symbol,
                    image: data2.image.large,
                    desc: data2.description.en,
                    price_change_percentage_24h:
                        data2.market_data.price_change_percentage_24h,
                    total_volume: data2.market_data.total_volume.usd,
                    current_price: data2.market_data.current_price.usd,
                    market_cap: data2.market_data.market_cap.usd,
                });

            }
            getPricesData(coin1, e.target.value, days, priceType);
        }
    }
    const getCoinData = async () => {
        const data1 = await GetCoinData(coin1);
        const data2 = await GetCoinData(coin2);
        if (data1) {
            setCoin1Data({
                id: data1.id,
                name: data1.name,
                symbol: data1.symbol,
                image: data1.image.large,
                desc: data1.description.en,
                price_change_percentage_24h:
                    data1.market_data.price_change_percentage_24h,
                total_volume: data1.market_data.total_volume.usd,
                current_price: data1.market_data.current_price.usd,
                market_cap: data1.market_data.market_cap.usd,
            });

        }
        if (data2) {
            setCoin2Data({
                id: data2.id,
                name: data2.name,
                symbol: data2.symbol,
                image: data2.image.large,
                desc: data2.description.en,
                price_change_percentage_24h:
                    data2.market_data.price_change_percentage_24h,
                total_volume: data2.market_data.total_volume.usd,
                current_price: data2.market_data.current_price.usd,
                market_cap: data2.market_data.market_cap.usd,
            });
        }
        getPricesData(coin1, coin2, days, priceType);
        setLoading(false);
    }
    const getPricesData = async (coin1, coin2, days, priceType) => {
        const prices1 = await (getPrices(coin1, days, priceType));
        const prices2 = await (getPrices(coin2, days, priceType));

        if (prices1 && prices2) {
            setChartData({
                labels: prices1.map((data) => { return GetDates(data[0]) }),
                datasets: [{
                    label: "Crypto 1",
                    data: prices1?.map((data) => data[1]),
                    borderWidth: 1,
                    fill: false,
                    tension: 0.25,
                    backgroundColor: "transparent",
                    borderColor: "#3a80e9",
                    pointRadius: 0,
                },
                {
                    label: "Crypto 2",
                    data: prices2?.map((data) => data[1]),
                    borderWidth: 1,
                    fill: false,
                    tension: 0.25,
                    backgroundColor: "transparent",
                    borderColor: "#61c96f",
                    pointRadius: 0,
                    yAxisID: "y1",
                }
                ]

            })
        }
    }
    const DayChange = (e) => {
        setDays(e.target.value);
        getPricesData(coin1, coin2, e.target.value, priceType)

    }
    const ToggleChange = (e) => {
        setPriceType(e.target.value);
        getPricesData(coin1, coin2, days, e.target.value);
    }
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
            y1: true
                ? {
                    type: "linear",
                    display: true,
                    position: "right",
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
                }
                : {},
        },
    };

    return (
        <div style={{ margin: "auto" }}>
            <Header />
            {
                loding ?
                    <Loding /> :
                    <div>
                        <div className='compare-div'>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                <p>Coin1</p>
                                <SelectCoin coin={coin1} text={false} handleChange={(e) => { handleCoinChange(e) }} allCoins={allCoin.filter((coin) => coin.id !== coin2)} />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                <p>Coin2</p>
                                <SelectCoin coin={coin2} text={false} handleChange={(e) => { handleCoinChange(e, true) }} allCoins={allCoin.filter((coin) => coin.id !== coin1)} />
                            </div>
                            <SelectDays days={days} text={false} handleChange={(e) => { DayChange(e) }} />
                        </div>
                        <div className="sub-containers" style={{ paddingTop: "0px", paddingBottom: "0px" }}><Lists coin={coin1Data} /></div>
                        <div className="sub-containers" style={{ paddingTop: "0px", paddingBottom: "0px" }}><Lists coin={coin2Data} /></div>
                        <div className="sub-containers"><ToggleTab priceType={priceType} handleChange={(e) => { ToggleChange(e) }} /><LineChart chartData={chartData} options={options} /></div>
                        <div className="sub-containers" style={{ paddingTop: "0px", paddingBottom: "0px" }}><CoinInfo name={coin1Data.name} desc={coin1Data.desc} /></div>
                        <div className="sub-containers" style={{ paddingTop: "0px", paddingBottom: "0px" }}><CoinInfo name={coin2Data.name} desc={coin2Data.desc} /></div>

                    </div>
            }
        </div>
    )
}
export default ComparePage;