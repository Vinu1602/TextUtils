import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Home from './components/Home';

function App() {
  const [textColor, setTextColor] = useState('text-light');
  const [bgColor, setBgColor] = useState("#002157");
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: bgColor
  // });

  document.body.style.backgroundColor = bgColor;

  const toggleMode = () => {
    var a = document.getElementById("flexSwitchCheckDefault").value;
    setBgColor(a);
    // setMyStyle({
    //   backgroundColor: bgColor
    // });
    console.log(a);
    const hexadecimalValue = a[1]; // Replace with your hexadecimal value
    const decimalValue = parseInt(hexadecimalValue, 16);

    if (decimalValue > 8) {
      setTextColor("text-dark")
    }
    else {
      setTextColor("text-light");
    }
  }


  return (
    <>
    {/* <Router>
      <Navbar title="TextUtils" aboutText="About" toggleMode={toggleMode} textColor={textColor} />
      <Switch>
        <Route exact path="/about">
          <About bgColor={bgColor} toggleMode={toggleMode} textColor={textColor} myStyle={myStyle} />
        </Route>
        <Route exact path="/home">
          <Home textColor={textColor}/>
        </Route>
        <Route exact path="/">
          <Home textColor={textColor}/>
        </Route>
        <Route exact path="/textform">
          <TextForm headings="Enter the Text Here" textColor={textColor} toggleMode={toggleMode} />
        </Route>
      </Switch>
      </Router> */}
      <Navbar title="TextUtils" aboutText="About" toggleMode={toggleMode} textColor={textColor} />
      <TextForm headings="Enter the Text Here" textColor={textColor} toggleMode={toggleMode} />
    </>
  );
}

export default App;