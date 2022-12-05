import React,{useState} from 'react';
import './index.css';
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from 'framer-motion';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../Functions/ConvertNumber';
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import addToWatchList from "../../../Functions/addToWatchList";
import removeFromWatchList from "../../../Functions/removeFromWatchList";


function Lists({ coin, delay }) {
    const [volume, setVolume] = React.useState("");
    React.useEffect(() => {
        setVolume(convertNumbers(parseInt(coin.total_volume)));
    }, []);

    const Pre_Watchlist = localStorage.getItem("watchlist")
        ? localStorage.getItem("watchlist").includes(coin.id)
        : false;
    const [isBooked, setIsBooked] = useState(false);

    return (
            <motion.tr className={`list-row ${coin.price_change_percentage_24h < 0 && "list-box-red"
                }`}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: delay }}>
                 <Link to={`/coinpage/${coin.id}`} >   
                <td className=" td-image">
                    <img src={coin.image} alt="icon" />
                </td></Link>
                <td className="td-name-flex">
                <Link to={`/coinpage/${coin.id}`} >
                    <div className="coin-info">
                        <p className="coin-symbol name-text">{coin.symbol}-USD</p>
                        <p className="coin-name name-text">{coin.name}</p>
                    </div></Link>
                </td>
                <Link to={`/coinpage/${coin.id}`} >
                <td className='td-chip-flex'>
                    {coin.price_change_percentage_24h > 0 ? (
                        <div className="chip-flex chip">
                            <div className="coin-chip percentage-text">
                                {coin.price_change_percentage_24h.toFixed(2) + " %"}
                            </div>
                            <TrendingUpRoundedIcon className="icon chip-icon" />
                        </div>
                    ) : (
                        <div className="chip-flex chip">
                            <div className="coin-chip chip-red percentage-text">
                                {coin.price_change_percentage_24h.toFixed(2) + " %"}
                            </div>
                            <TrendingDownRoundedIcon className="icon chip-red chip-icon" />
                        </div>
                    )}
                </td></Link>
                <Link to={`/coinpage/${coin.id}`} >
                <td className='price td-text '>
                    <p
                        className="coin-price td-price"
                        style={{
                            color:
                                coin.price_change_percentage_24h < 0
                                    ? "var(--red)"
                                    : "var(--green)",
                        }}
                    >
                        $ {coin.current_price.toLocaleString()}
                    </p>
                </td></Link>
                <Link to={`/coinpage/${coin.id}`} >
                <td className="td-mkt-cap " >
                    <p >
                        ${coin.total_volume.toLocaleString()}
                    </p>
                </td></Link>
                <Link to={`/coinpage/${coin.id}`} >
                <td className='td-mkt-cap'>
                    <p >
                        ${coin.market_cap.toLocaleString()}
                    </p>
                </td></Link>
                <Link to={`/coinpage/${coin.id}`} >
                <td className="td-vol-cap">
                    <Tooltip title="Volume">
                        <p>${volume}</p>
                    </Tooltip>
                </td></Link>
                <td style={{textAlign:"center"}}>
                    {Pre_Watchlist || isBooked ?
                        <span onClick={() => { setIsBooked(false); removeFromWatchList(coin.id) }}><IconButton><StarIcon  className="filled_star"/></IconButton></span> :
                        <span onClick={() => { setIsBooked(true); addToWatchList(coin.id) }}><IconButton><StarBorderIcon className="outlined_star" /></IconButton></span>
                    }
                </td>
            </motion.tr>
    )
}
export default Lists;