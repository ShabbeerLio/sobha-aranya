import React, { useState } from 'react'
import "./Plans.css"
import FormFloat from '../Navbar/FormFloat'

const Plans = () => {

    const [formopen, setFormopen] = useState(false);
    const formIsOpen = () => {
        setFormopen(!formopen);
    };

    const formIsClose = () => {
        setFormopen(false);
    };
    return (
        <div className='Plans'>
            <div className='Plans-main'>
                <h3>Floor Plans & Pricing</h3>
                <div className="plans-box">
                    <div className="plans-card">
                        <div className="plans-card-title">
                            <p>3 BHK - 2836 Sq.Ft.</p>
                            <span>@ ₹6.79 cr*</span>
                        </div>
                    </div>
                    <div className="plans-card">
                        {/* <img src={floor2} alt="GODREJ JARDINIA NOIDA" onClick={formIsOpen} /> */}
                        <div className="plans-card-title">
                            <p>4 BHK - 3691 Sq.Ft.</p>
                            <span>@ ₹8.85 cr*</span>
                        </div>
                    </div>
                    <div className="plans-card">
                        <div className="plans-card-title">
                            <p>4+ BHK - 4285 Sq.Ft.</p>
                            <span>@ ₹10.28 cr*</span>
                        </div>
                    </div>
                </div>
            </div>
            {formopen && (
                <>
                    <FormFloat formIsClose={formIsClose} />
                </>
            )}
        </div>
    )
}

export default Plans
