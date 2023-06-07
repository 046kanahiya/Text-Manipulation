import React , {useState,useEffect} from 'react' //use state hook ko import kra from react

// humara ek variable hai text-> uske andar default value aajye yeh->'Enter text here'
//aur mein jab bhi iss text ko update karunga toh ->setText function ka use karunga
export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("Uppercase was click" + text);
        let newtext = text.toUpperCase();
        setText(newtext) //state change krdi 
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowerClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext) //state change krdi 
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick = ()=>{ 
        let newtext = ' ';
        setText(newtext) //state change krdi 
        props.showAlert("Text clear","success");
    }
    const handleReverseClick = ()=>{ 
        let newtext =text.split('').reverse().join('');
        setText(newtext) //state change krdi 
    }
    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }  
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);//ek array ban gya
        setText(newText.join(" ")) //uske baad usse join kr rahe hai sirf ek space se
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value); //new value dene ke liye
    }

  
    const [text, setText] = useState('');
   
    //text = "new text " //wrong way to change the state
   // setName("John"); // Throws React Error: Too many re-renders
  
   // therefore correct way
//    useEffect(()=>{
//     setText("John");
// }, [])

    return (
       <>
       <div className="container "style={{background:props.mode==='light'?'white':'#000000',height: '10%'}} >
            <h1 className='mb-4' style={{color :props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{background:props.mode==='dark'?'rgb(53 60 65)':'white',color :props.mode==='dark'?'white':'black',width:'100%'}} id="myBox" rows="7"></textarea>
            </div>
{/* style={{}} -> pehle {} for javascript dusra {} javascript ke andar object ke liye*/}
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase </button>
            <button disabled={text.length===0}className="btn btn-danger mx-2 my-1" onClick={handleLowerClick}>Convert To Lowercase </button>
            <button disabled={text.length===0}className="btn btn-success mx-2 my-1" onClick={handleClearClick}>Clear the Text</button>
            <button disabled={text.length===0}className="btn btn-warning mx-2 my-1" onClick={handleReverseClick} >Reverse the Text</button>
            <button disabled={text.length===0}className="btn btn-info mx-2 my-1" onClick={handleCopy} >Copy the Text</button>
            <button disabled={text.length===0}className="btn btn-dark mx-2 my-1" onClick={handleExtraSpaces} >Remove Space</button>
        </div>
        <div className="container mb-2 " style={{background:props.mode==='dark'?'#000000':'white',color :props.mode==='dark'?'white':'black',width:'100%'}} >
            <h2>your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
    )
}
//in bootstrap color for button -> success ->green,danger->red,primary ->blue
//eg <button className="btn btn-danger ***for more go to component then in button