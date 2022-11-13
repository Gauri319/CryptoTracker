import style from './style.module.css';
import Button from '../Button';
import {Link} from 'react-router-dom';
import SideDrawer from './Drawer';
function Header() {
    return (
        <div className={style.navbar}>
            <div>
                <h1 className={style.heading}>
                    CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
                </h1>
            </div>
            <div className={style.links}>
              <span> <Link to={`/`} className={style.link} >Home</Link></span>
              <span> <Link to={`/compare`} className={style.link}>Compare</Link></span>
              <span> <Link to={`/dashboard`} className={style.link}><Button text="Dashboard"/></Link></span>
            </div>
            <SideDrawer/>
        </div>
    );
}

export default Header;