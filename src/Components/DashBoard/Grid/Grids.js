import React,{useState} from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from 'framer-motion';
import { Tooltip } from "@mui/material";
import { Link } from 'react-router-dom'
import "./Grids.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import addToWatchList from "../../../Functions/addToWatchList";
import removeFromWatchList from "../../../Functions/removeFromWatchList";

function Grids({ coin, delay }) {


  const Pre_Watchlist = localStorage.getItem("watchlist")
    ? localStorage.getItem("watchlist").includes(coin.id)
    : false;
  const [isBooked, setIsBooked] = useState(false);

  return (
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: delay }}
        className={`grid-box ${coin.price_change_percentage_24h < 0 && "grid-box-red"
          }`}
      >
        <div className="info-flex">
        <Link to={`/coinpage/${coin.id}`}>
          <Tooltip title="logo">
            <img src={coin.image} className="coin-logo" alt="icon" />
          </Tooltip></Link>
          <Link to={`/coinpage/${coin.id}`}>
          <div className="name-flex">
            <p className="coin-symbol">{coin.symbol}-USD</p>
            <p className="coin-name">{coin.name}</p>
          </div></Link>
          <div >
            {Pre_Watchlist||isBooked?
              <span onClick={()=>{ setIsBooked(false) ;removeFromWatchList(coin.id)}}><IconButton><StarIcon className="filled_star"/></IconButton></span>:
              <span onClick={()=>{setIsBooked(true);addToWatchList(coin.id)}}><IconButton><StarBorderIcon className="outlined_star"/></IconButton></span>
            }
          </div>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
             <Link to={`/coinpage/${coin.id}`}>
            <div className="coin-chip">
              {coin.price_change_percentage_24h.toFixed(2) + " %"}
            </div></Link>
            <Link to={`/coinpage/${coin.id}`}>
            <TrendingUpRoundedIcon className="icon" /></Link>
          </div>
        ) : (
          <div className="chip-flex">
             <Link to={`/coinpage/${coin.id}`}>
            <div className="coin-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2) + " %"}
            </div></Link>
            <Link to={`/coinpage/${coin.id}`}>
            <TrendingDownRoundedIcon className="icon chip-red" /></Link>
          </div>
        )}

     <Link to={`/coinpage/${coin.id}`}>
        <p
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          $ {coin.current_price.toLocaleString()}
        </p></Link>
        <Link to={`/coinpage/${coin.id}`}>
        <div>
          <p className="volume-text">
            <strong>Total Volume :</strong> ${coin.total_volume.toLocaleString()}
          </p>
          <p className="volume-text">
            <strong>Total Market Cap :</strong> $
            {coin.market_cap.toLocaleString()}
          </p>
        </div></Link>
      </motion.div>
  );
}

export default Grids;