import {useState} from "react"
const Button = (props) => {
  const [variant] = useState(props.variant);
  const [size] = useState(props.size);

  return(
    <button className={`Button btn-${variant} btn-${size}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;