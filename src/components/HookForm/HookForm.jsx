import React from 'react';
import useInputState from '../../hooks/useInputState';

const HookForm = () => {
    // // when useInputState return array
    // const [name, handleState] = useInputState('abc');

    // when useInputState return object
    const inputState = useInputState('test@abc.com')

    const handleSubmitButton = e => {
        e.preventDefault();
        console.log('rongila', inputState);
    }

    return (
        <div>
            <form onSubmit={handleSubmitButton}>
                <h2>Hello Form</h2>
                {/* Name  : <input type='text' name='name' value={name} onChange={handleState}/> */}
                <br/>
                Email :  <input type='email' name='email' value={inputState.value} onChange={inputState.handleChange}/>
                <br/>
                Phone :  <input type='text' name='phone'/>
                <br/>
                <br/>
                <button type="submit"> Submit</button>
            </form>
        </div>
    );
};

export default HookForm;