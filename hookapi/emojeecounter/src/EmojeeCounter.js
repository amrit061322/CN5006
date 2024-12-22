import React, { useState, useEffect } from "react";
import Love from './Love.png';
import Sad from './Sad.png';
import Like from './Like.png';
import Happy from './Happy.png';

function EmojeeCounter(props) {
  console.log("pic is", props.pic);


  const [pic, setPic] = useState(Love); 



  const [count, setCount] = useState(0); 




  useEffect(() => {
    console.log("useEffect triggered for", props.pic);
    if (props.pic === "Love") {
      setPic(Love);
    } else if (props.pic === "Like") {
      setPic(Like);
    } else if (props.pic === "Sad") {
      setPic(Sad);
  } else if (props.pic === "Happy") {
    setPic(Happy);
  }
  }, [props.pic]); 



  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>{props.pic}</p>


      <button onClick={handleClick}>
        {count} 
        <img src={pic} alt={props.pic} />
      </button>


    </div>
  );
}

export default EmojeeCounter;
