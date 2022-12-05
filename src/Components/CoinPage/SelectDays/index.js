import React from 'react';
import './style.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function SelectDays({days,text,handleChange}){  
    return(
       <div className='dropdownContainer'>
        <p>{text?<>"Price change in Last"</>:<></>}</p>
         <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="days"
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
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
        </Select>
       </div>
    )
}
export default SelectDays;