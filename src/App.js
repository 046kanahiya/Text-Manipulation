//import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light'); //whether darkMode enable
  const [alert, setAlert] = useState(null); // alert ek object hai // setalert alert ko set krega 
  const showAlert = (message,type)=>{ //we have make a method name setalert  //helps to show alert message
    setAlert({
      msg : message,
      type:type
    })
    
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#000000';
      showAlert("Dark mode has been enabled","success");
      // document.title = `TextUtils = dark` //to change title dynamically
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
    
  }
  return (
    <>     
   

 <Navbar title ="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
 {/* /*to paste*/ }
 <div className="container my-3">
  <TextForm  showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
</div>
{/*        
 <BrowserRouter>
<Routes>
          <Route path="/about" element={<About />} />
          
          < Route path="/"
            element= {<TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>
          </BrowserRouter> */}
   </>
  );
}

export default App;
