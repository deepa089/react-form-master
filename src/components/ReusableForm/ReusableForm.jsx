import React from 'react';

const ReusableForm = ({formTitle ,handleSubmitButton,  submitBtnText = 'Submit', children}) => {

   const handleLocalSubmit = e => {
    e.preventDefault();
    const data = {
        name : e.target.name.value,
        email : e.target.email.value,
        phone : e.target.phone.value
    }
    handleSubmitButton(data);
   }
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                {/* <h2>Hello Form</h2> */}
                Name  : <input type='text' name='name' />
                <br />
                Email :  <input type='email' name='email' />
                <br />
                Phone :  <input type='text' name='phone' />
                <br />
                <br />
                <button type="submit"> {submitBtnText}</button>
            </form>
        </div>
    );
};

export default ReusableForm;