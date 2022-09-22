import React from 'react';

const Modal = ({ data, setModalData }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{data.name}</h3>
                    <figure>
                        <img className='w-96 h-60' src={data.img} alt="Shoes" />
                    </figure>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label onClick={() => setModalData(null)} htmlFor="my-modal-6" className="btn">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;