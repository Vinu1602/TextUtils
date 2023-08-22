import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here'); 
    const [previewText, setPreviewText] = useState('');
    const [tColor, setTColor] = useState({
        backgroundColor : 'white'
    });

    const [tFont, setTFont] = useState({
        fontFamily : 'Arial'
    });

    const handleColor = (event)=>{
        let col = document.getElementById('bColor').value.toUpperCase();
        let f = document.getElementById('wFont').value;

        if (col==="BLACK" || col==="GREY"){
            setTColor({
                backgroundColor: col,
                color : 'white'
            });
        }
        else{
            setTColor({
                backgroundColor: col
            });
        }
        setTFont({
            fontFamily : f
        });
    }

    const clearTextHandle = (event) =>{
        setText('');
        setPreviewText('');
    }
    const handleLoClick = (event)=>{
        setPreviewText(text.toLowerCase())
    }
    const handleUpClick = (event)=>{
        setPreviewText(text.toUpperCase());
    }

    const removeExtraSpace = (str)=>{
        return str.replace(/\s+/g, ' ').trim();
    }

    const handleCopy = (event)=>{
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleTextChange = (event)=>{
        setText(event.target.value);
        setPreviewText(removeExtraSpace(event.target.value));
    }
    return (
        <div className={`container my-3 ${props.textColor}`}>
            <h3>Text Area Background Color </h3>
            <div className="mb-3">
                <textarea className="form-control" id="bColor" onChange={handleColor} rows="1"></textarea>
            </div>
            <h3>Text Area Font Family </h3>
            <div className="mb-3">
                <textarea className="form-control" id="wFont" onChange={handleColor} rows="1"></textarea>
            </div>
            <h3>{props.headings}</h3> 
            <div className="mb-3">
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" style={tColor} onChange={handleTextChange} rows="8"></textarea>
            </div>
            <div className="btn btn-primary mx-2" onClick={handleUpClick}>
                Convert To UpperCase
            </div>
            <div className="btn btn-primary mx-2" onClick={handleLoClick}>
                Convert To LowerCase
            </div>
            <div className="btn btn-primary mx-2" onClick={clearTextHandle}>
                Clear Text
            </div>
            <div className="btn btn-primary mx-2" onClick={handleCopy}>
                Copy Text
            </div>

            <div className="container my-4">
                <h5>Your Text Summary : </h5>
                <p className="textEntered" style={tFont}>
                    Total Number of Words : { previewText.split(" ").length } <br />
                    Length of the text : {previewText.length} <br />
                    Time taken to read the paragraph : {0.3 * (previewText.split(" ").length - 1)} Seconds <br /><br />
                    
                    <b className='h5' >Preview Text : </b> <br />
                    {previewText}
                </p>
            </div>
        </div>
    )
}