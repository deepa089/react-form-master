import React, { createContext } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const AssestContext = createContext('gold');

const GrandPa = () => {
    const asset = 'diamond';
    return (
        <div className='grandPa'>
            <h2>Grand Pa</h2>
            <AssestContext.Provider value='gold'>
                <section className='flex'>
                    <Dad asset={asset}>

                    </Dad>
                    <Uncle asset={asset}>

                    </Uncle>
                    <Aunty>

                    </Aunty>
                </section>
            </AssestContext.Provider>
        </div>
    );
};

export default GrandPa;

/**
 * 1. Create createContext and export it
 * 2. Add provider for the context with a value, value may String, object or array.
 *  3. useContext to access value in the context  API 
 */