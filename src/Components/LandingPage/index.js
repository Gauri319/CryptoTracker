import Grid from '@mui/material/Grid';
import Button from '../Common/Button';
import style from './style.module.css';
import Ethereum from '../../assets/yellow_etherium.png';

import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';

function LandingPage() {
  return (
    <div className={style.mainContainer}>

      <Grid container className={style.landingpagecontainer} xs={12}>
        <Grid item xs={12} md={6} className={style.contentContainer}>
          <motion.h1
            className={style.heding1}
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
            transition={{ duration: 0.5, delay: 0.5 }}>Track crypto through a public api in real time.Copy the best treaders and perform as they do.Zero upfront fee and substription free. Visit the dashboard to
            do so!</motion.p>
          <motion.div
            className={style.buttons}
            initial={{ x: -5, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}>
            
            <span>
              <Link to='/dashboard'>
                <Button text="Dashboard" />
              </Link>
            </span>
            <span>
              <RWebShare
                data={{
                  text: "Cryptotraker buit in 2022",
                  url: "https://classy-capybara-635c87.netlify.app",
                  title: "Cryptotraker",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <Button text='share' isoutlined='true' />
              </RWebShare>
            </span>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} className={style.ImagePart} >
          <div>
            <div className={style.crypto4Img}>
              <motion.img
                initial={{ y: -50 }}
                animate={{ y: 50 }}
                transition={{
                  type: "smooth",
                  repeatType: "mirror",
                  duration: 2,
                  repeat: Infinity,
                }} 
                src={Ethereum} 
                alt="Ethereum"
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={style.counterMainCoitainer}>
        <Grid container xs={9} className={style.counterContainer}>
          <Grid item xs={4} className={style.counter}><h1>230k+</h1><p>user Active</p></Grid>
          <Grid item xs={4}className={style.counter}><h1>500k+</h1><p>People new Joined</p></Grid>
          <Grid item xs={4}className={style.counter}><h1>115+</h1><p>People Daily Invest</p></Grid>
        </Grid>
        <div className={style.CounterContent}>
          <h1>A Smart Way to <span style={{color:"var(--blue)"}}>Tread Crypto</span></h1>
          <p>Track crypto through a public api in real time.Copy the best treaders and perform as they do.Zero upfront fee and substription free</p>
          <Link to="/dashboard"><Button text=" Dashboard" isoutlined={true}/></Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;