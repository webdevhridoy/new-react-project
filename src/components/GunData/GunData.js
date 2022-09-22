import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const GunData = ({ increaseProudct }) => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data));

    }, []);

    return (
        <div className='py-14'>
            <h2>Total gun: {guns.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] mx-auto'>
                {
                    guns.map(gun =>
                        <SingleGun gun={gun} increaseProudct={increaseProudct}></SingleGun>
                    )
                }
            </div>
        </div>
    );
};

export default GunData;