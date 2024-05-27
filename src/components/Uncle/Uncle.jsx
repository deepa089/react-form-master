import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <div className='flex'>
                <Cousin name={'Cousin 1'}></Cousin>
                <Cousin name={'Cousin 2'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;