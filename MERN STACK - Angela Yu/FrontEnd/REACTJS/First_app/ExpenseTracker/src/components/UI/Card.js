import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //Combining all the classes that are called
  return <div className={classes}>{props.children}</div>; //props.children allows
};

export default Card;
