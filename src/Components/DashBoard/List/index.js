import React from 'react';
import './index.css';
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from 'framer-motion';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../Functions/ConvertNumber';

function Lists({ coin, delay }) {
    const[volume,setVolume]=React.useState("");
    React.useEffect(() => {
        setVolume(convertNumbers(parseInt(coin.total_volume)));
    },[]);
    return (
        <motion.tr className={`list-row ${
            coin.price_change_percentage_24h < 0 && "list-box-red"
          }`}
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: delay }}>
            <td className=" td-image">
                <img src={coin.image} alt="icon" />
            </td>
            <td className="td-name-flex">
                <div className="coin-info">
                    <p className="coin-symbol name-text">{coin.symbol}-USD</p>
                    <p className="coin-name name-text">{coin.name}</p>
                </div>
            </td>
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
            </td>
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
            </td>
            <td className="td-mkt-cap " >
                <p >
                    ${coin.total_volume.toLocaleString()}
                </p>
            </td>
            <td className='td-mkt-cap'>
                <p >
                    ${coin.market_cap.toLocaleString()}
                </p>
            </td>
            <td className="td-vol-cap">
                <Tooltip title="Volume">
                    <p>${volume}</p>
                </Tooltip>
            </td>
        </motion.tr>
    )
}
export default Lists;