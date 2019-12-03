import React, { useState } from "react";
import csvtojson from "csvtojson";


const JSONInput = (props) => {
    const [inputValue, setInputValue] = useState('');

    function onSubmitClick() {
        csvtojson().fromString(inputValue)
            .then(jsonObject => {
                props.onCoversion(jsonObject);
            });
    }


    return <div>
        <textarea onChange={(e) => setInputValue(e.target.value)}>

        </textarea>
        <button onClick={onSubmitClick}>
            Convert
        </button>
    </div>


};

export default JSONInput;