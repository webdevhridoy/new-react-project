import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [ModalData, setModalData] = useState({});
    console.log(ModalData);
    const { gun, increaseProudct } = props;
    const { bullet, capacity, category, img, name, price } = gun;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl h-full">
                <figure>
                    <img className='w-96 h-60' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='text-start'>
                        <span className="badge badge-secondary mr-2">{category}</span>
                        <span className="badge badge-secondary me-2">Price: {price}</span>
                    </div>

                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">Bullet: {bullet}</div>
                        <div className="badge badge-outline">Category: {capacity}</div>
                    </div>
                    <div className="card-actions justify-center pt-6">
                        <button onClick={() => increaseProudct()} className="btn btn-outline btn-sm">Cart</button>
                        <label onClick={() => setModalData(gun)} htmlFor="my-modal-6" className="btn modal-button btn-sm">Details</label>
                        {
                            ModalData && (<Modal data={ModalData} setModalData={setModalData}></Modal>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;