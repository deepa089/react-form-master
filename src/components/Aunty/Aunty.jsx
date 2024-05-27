import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <div className='flex'>
                <Cousin name={'Cousin 3'}></Cousin>
                <Cousin name={'Cousin 4'}></Cousin>
            </div>
        </div>
    );
};

export default Aunty;