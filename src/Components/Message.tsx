import { useState } from "react";
import './Message.css';

function Message(){
    const [selectedOption, setSelectedOption] = useState("option1");
    const [isSaved, onSubmit] = useState("Not saved");
    let date = new Date();

    const  handleDropdownChange = (event:any) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = ()=>{
        onSubmit("Saved")
    };

    return <>
    <p>Current DateTime: {date.toDateString()}</p>
    <form onSubmit={handleSubmit} className="form-box">
        <label>
        Select an option:
                <select  value={selectedOption} onChange={handleDropdownChange}>
                <option  value="option1">Option 1</option>
                <option  value="option2">Option 2</option>
                <option  value="option3">Option 3</option>
            </select>
        </label>
        <p>Selected option: {selectedOption}</p>
        <p>Form :{isSaved}</p>
        <button>Save</button>
    </form>
    </>
}

export default Message;