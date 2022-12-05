import React from 'react';
import './style.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
function Footer(){
    return(
        <div className='footer-container'>
            <div className='Footer-icons'>
                <span><FacebookRoundedIcon sx={{ fontSize: 30 }}/></span>
                <span><YouTubeIcon sx={{ fontSize: 30 }}/></span>
                <span><InstagramIcon sx={{ fontSize: 30 }}/></span>
                <span><GoogleIcon sx={{ fontSize: 30 }}/></span>
            </div>
            <hr></hr>
            <div className='Footer-content'>
                <p style={{fontSize:"14px",textAlign:"center"}}>@Copyright|Made in {new Date().getFullYear()}|future coder</p>
                <p style={{fontSize:"11px",color:"var(--grey",textAlign:"center"}}>All rights reserved</p>
            </div>
        </div>
    )
}
export default Footer;