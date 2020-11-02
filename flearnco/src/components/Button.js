import {useState} from "react"
const Button = (props) => {
  const [variant] = useState(props.variant);

  return(
    <button className={`Button btn-${variant}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;