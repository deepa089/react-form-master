const SimpleForm = () => {
    const handleSubmitButton = e => {
        e.preventDefault();
            console.log(' i m here');
    } 

    return (
        <div>
            <form onSubmit={handleSubmitButton}>
                <h2>Hello Form</h2>
                Name  : <input type='text' name='name'/>
                <br/>
                Email :  <input type='email' name='name'/>
                <br/>
                <br/>
                <button type="submit"> Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;