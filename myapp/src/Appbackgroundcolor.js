import './App.css';

function Appbackground(props) {
  function changeColor(e) {
    document.body.style.backgroundColor = props.color;
    alert(`Background color changed to ${props.color}`);
  }

  return (
    <div className="App">
      <h1>{props.heading}</h1>
      <button onClick={changeColor}>Change to {props.color}</button>
    </div>
  );
}

export default Appbackground;
