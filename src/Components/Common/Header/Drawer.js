import React from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import style from './style.module.css'
import { Link } from 'react-router-dom'

function SideDrawer() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className={style.drawercontainer}>
            <Button onClick={() => { setIsOpen(true) }}><MenuRoundedIcon className={style.link} sx={{fontSize:"1.8rem"}} /></Button>
            <Drawer
                anchor={"right"}
                open={isOpen}
                onClose={() => { setIsOpen(false) }}
            >
                <div  className={style.drawerlinks}>
                    <span> <Link to={`/`} className={style.link} >Home</Link></span>
                    <span> <Link to={`/compare`} className={style.link}>Compare</Link></span>
                    <span> <Link to={`/dashboard`} className={style.link}>Dashboard</Link></span>
                </div>
            </Drawer>
        </div>
    );
}

export default SideDrawer;
