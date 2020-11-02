import {useState} from "react"
const Button = (props) => {
  const [variant] = useState(props.variant);
  const [label] = useState(props.label);

  return(
    <button className={`Button btn-${variant}`} onClick={props.onClick}>
      {label}
    </button>
  );
}

export default Button;