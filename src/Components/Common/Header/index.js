import React,{useState} from 'react';
import style from './style.module.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
import SideDrawer from './Drawer';
import { Switch } from "@mui/material";

function Header() {
    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };

    const storedTheme = localStorage.getItem("theme");

    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark =
        storedTheme === "dark" || (storedTheme === null && prefersDark);

    if (defaultDark) {
        setDark();
    }

    const [mode, setMode] = useState(defaultDark ? true : false);

    const toggleTheme = (e) => {
        if (!mode) {
            setDark();
        } else {
            setLight();
        }
        setMode(!mode);
    };
    return (
        <div className={style.navbar}>
            <div>
                <h1 className={style.heading}>
                    CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
                </h1>
            </div>
            <div className={style.links}>
                <Switch
                    checked={!mode}
                    onClick={(e) => {
                        toggleTheme();
                    }}
                />
                <span> <Link to={`/`} className={style.link} >Home</Link></span>
                <span> <Link to={`/compare`} className={style.link}>Compare</Link></span>
                <span> <Link to={`/watchlist`} className={style.link}>Watchlist</Link></span>
                <span> <Link to={`/dashboard`} className={style.link}><Button text="Dashboard" /></Link></span>
            </div>
            <SideDrawer />
        </div>
    );
}

export default Header;