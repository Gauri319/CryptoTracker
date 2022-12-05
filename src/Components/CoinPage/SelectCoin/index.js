import React from "react";
import './style.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function SelectCoin({coin,text,handleChange,allCoins}) {
    return (
        <div>
            <p>{text?<>"Price change in Last"</>:<></>}</p>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={coin}
                label="coin"
                onChange={handleChange}
                sx={{
                    height: "2.5rem",
                    color: "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--white)",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "var(--white)",
                    },
                    "&:hover": {
                        "&& fieldset": {
                            borderColor: "#3a80e9",
                        },
                    },
                }}
            >
                {
                    allCoins.map((item,i)=>{
                        return <MenuItem value={item.id} key={i}>{item.name}</MenuItem>;
                    })
                }
               
            </Select>
        </div>
    )
}
export default SelectCoin;