import style from './style.module.css'

function Button({isoutlined,text,onclick}) {
  return (
    <div >
     <span className={isoutlined?style.outlinedbtn:style.btn}>{text}</span>
    </div>
  );
}

export default Button;
