import React from "react";

class Form1 extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }


    render(){
        
         return(
            <>
            <h2 className="text-center font-bold mb-10 text-4xl">Form Validations</h2>
            <form className="flex  flex-col m-auto">  
                <label htmlFor="name" >Text Input</label>
                <input type= "text" id="name"/>
                <label htmlFor="date" >Date Input</label>
                <input type= "date"  id="date"/>
                <label htmlFor="mediaFile" >File Input</label>
                <input type= "file" id="mediaFile"/>
                <label htmlFor="readOnly" >Read-Only-input</label>
                <input type= "text" id="readOnly" placeholder="This can only be copied" readOnly />
                <label htmlFor="disabled" >Disabled Input</label>
                <input type= "text" id="disabled" disabled />
                <label htmlFor="textarea" >Textarea</label>
                <textarea id="textarea"></textarea>
                <label htmlFor="disabledText" >Textarea</label>
                <textarea id="disabledText" disabled></textarea>
                <input className="submitBtn" type= "submit"/>
            </form>
            </>
        )
    }
}



export default Form1

