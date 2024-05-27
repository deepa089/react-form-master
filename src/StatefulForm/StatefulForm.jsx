import { useState } from "react";

const StatefulForm = () => {
    // const {email, setEmail} = useState(null);

    const handleSubmitButton = e => {
        //   by default page auto load will be stop
        e.preventDefault(); 
            console.log(e.target.name.value);
            console.log(e.target.email.value);
    }

    const handleEmailChange = (e) => {
            console.log(e.target.value);
    }
    return (
        <div>
            <h2>Stateful Form</h2>
            <form onSubmit={handleSubmitButton}>
                Name  : <input type='text' name='name'/>
                <br/>
                Email :  <input type='email' onChange={handleEmailChange} name='email'/>
                <br/>
                Phone :  <input type='password' name='password'/>
                <br/>
                <br/>
                <button type="submit"> Submit</button>
                </form>
        </div>
    );
};

export default StatefulForm;