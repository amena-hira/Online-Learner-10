import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';

const CheckOut = () => {
    const course = useLoaderData();
    const {mode} = useContext(ModeAuthContext);
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h6 className={`display-6 fw-bold text-${mode==='light'?'dark':'light'}`}>Course Name: {course.name}</h6>
            </div>
        </div>
    );
};

export default CheckOut;