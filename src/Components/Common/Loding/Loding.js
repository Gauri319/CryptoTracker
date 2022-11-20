import { CircularProgress } from "@mui/material";
import './style.css'
function Loding(){
  return (<div className="loder-container">
        <CircularProgress sx={{color:"var(--blue)"}}/>
  </div>)
}
export default Loding