import {useState} from "react";

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const [focus, setFocus] = useState(false)

    const onChange = event => {
        setValue(event.target.value)
    }


    const onFocus = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false)
    }

    const clear = () => setValue('')

    return {

        value,
        focus,
        onFocus,
        onBlur,
        onChange,
        clear

        // bind: {focus, onFocus, onBlur},

        // value,
        // clear
    }
}