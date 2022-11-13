import Grid from '@mui/material/Grid';
import Button from '../Common/Button';
import style from './style.module.css'

function LandingPage() {
    return (
      <div>
        <Grid container>
          <Grid item md={6} pt={10} pl={4}>
           <h1 className={style.heding1}>Track Crypto</h1>
           <h1 className={style.heding2}>Real Time.</h1>  
           <p className={style.para}>Track crypto through a public api in real time. Visit the dashboard to
          do so!</p>
           <div className={style.buttons}>
            <span><Button text="Dashboard"/></span>
            <span><Button text='share' isoutlined='true'/></span>
           </div>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </div>
    );
  }
  
  export default LandingPage;