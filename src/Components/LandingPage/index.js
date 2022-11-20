import Grid from '@mui/material/Grid';
import Button from '../Common/Button';
import style from './style.module.css';
// import bitcoin from '../../assets/bitcoin.png';
import crypto4 from '../../assets/crypto4.png';
import Header from '../Common/Header';
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Grid container className={style.landingpagecontainer}>
        <Grid item md={6} pt={10} pl={4}>
          <motion.h1
            className={"heading1"}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Track Crypto</motion.h1>
          <motion.h1
            className={style.heding2}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}>Real Time.</motion.h1>
          <motion.p
            className={style.para}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>Track crypto through a public api in real time. Visit the dashboard to
            do so!</motion.p>
          <motion.div
            className={style.buttons}
            initial={{ x: -5, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}>
            <span><Button text="Dashboard" /></span>
            <span><Button text='share' isoutlined='true' /></span>
          </motion.div>
        </Grid>
        <Grid item md={6} className={style.seconPart} >
          <div>
            <div className={style.crypto4Img}>
              <motion.img src={crypto4} alt="crypto4" initial={{ x: 15, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}/>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;