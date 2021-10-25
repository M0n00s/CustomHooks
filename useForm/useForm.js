import { useState } from "react"


export const useForm = ( initialState = {} ) => {

    const [FormValues, setValues] = useState(initialState); 

    const reset = () =>{
        setValues(initialState);
    }


    const handleInputChange = ({target}) => {
        setValues({
            ...FormValues,
            [ target.name ] : target.value

        });

    }

    return [ 
        FormValues,
        handleInputChange,
        reset
    ]

}
