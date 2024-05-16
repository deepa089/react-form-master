const SimpleForm = () => {
    const handleSubmitButton = e => {
        //   by default page auto load will be stop
        e.preventDefault(); 

            console.log(' i m here');
            console.log(e.target.name.value);
            console.log(e.target.email.value);
    } 

    return (
        <div>
            <form onSubmit={handleSubmitButton}>
                <h2>Hello Form</h2>
                Name  : <input type='text' name='name'/>
                <br/>
                Email :  <input type='email' name='email'/>
                <br/>
                Phone :  <input type='text' name='phone'/>
                <br/>
                <br/>
                <button type="submit"> Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;