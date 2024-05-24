import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=> {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared!", "success");
    }

    const handleCapitalizedClick = () => {
        if (typeof text === 'string') {
            const newText = text.split(" ");

            const capitalizedText = newText.map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            });
    
            const modifiedText = capitalizedText.join(" ");
    
            // Update the state with the modified text
            setText(modifiedText);
        }
        props.showAlert("Text has been capitalized.", "success");
    };
    

    const handleOnChange = (event)=> {
        setText(event.target.value)
    }


    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white'}} >
        <h4 style={{color: props.mode === 'dark' ? 'white' : 'black'}} >{props.heading}</h4>        
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={text}
            style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: 'grey'}} 
             onChange={handleOnChange}></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCapitalizedClick}>Capitalized Case</button>
        
    </div>
    <div className='container my-3' style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white'}} >
        <h4 style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Your text summary:</h4>
        <p style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
            {text.split(" ").filter((element)=> {return element.length !== 0}).length} Words and {text.length} Characters </p>
        <p style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
            {0.008 * text.split(" ").filter((element)=> {return element.length !== 0}).length} Minutes to read.</p>
        <h5 style={{color: props.mode === 'dark' ? 'white' : 'black'}} >Preview:</h5>
        <p style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
            {text.length>0 ? text : "Nothing to preview!"}
        </p>
    </div>
    </>
  )
}
