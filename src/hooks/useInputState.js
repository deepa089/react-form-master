import { useState } from "react"

const useInputState = (defaultValue=null) => {
    const [value, SetValue] = useState(defaultValue);

    const handleChange = val =>{
        SetValue(val.target.value);
    }
    // // return array
    // return [value, handleChange]

    // // return object
    return {
        value, handleChange
    }
}

export default useInputState;