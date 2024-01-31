import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleDoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClear=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied","success");
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed","success");
    }
   
    const handleCase=()=>{
        if(text.length!==0){
            const words = text.split(" ");
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            setText(words.join(" "));
        }
        props.showAlert("Converted to Capitalisation Case","success");
    }
    const [text,setText]=useState('');
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='container mx-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control mx-4" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'#383645':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-secondary mx-4 my-2" onClick={handleUpClick}>Uppercase</button>
    <button disabled={text.length===0} className="btn btn-secondary  my-2" onClick={handleDoClick}>Lowercase</button>
    <button disabled={text.length===0} className="btn btn-secondary mx-4 my-2" onClick={handleClear}>Clear Text </button>
    <button disabled={text.length===0} className="btn btn-secondary  my-2" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-secondary mx-4 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-secondary  my-2" onClick={handleCase}>Capitalisation</button>
    
    </div>
    <div className='container my-4 mx-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview it here"}</p>
    </div>
    </>
  )
}
