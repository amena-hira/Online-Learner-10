import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    return (
        <div class="d-flex align-items-center justify-content-center">
            <div class="text-center">
                <h6 class="display-6 fw-bold">Course Name: {course.name}</h6>
            </div>
        </div>
    );
};

export default CheckOut;