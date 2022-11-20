import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';

const LeftSideNav = ({course}) => {
    const {mode} =useContext(ModeAuthContext);
    const {id,name} = course;
    
    return (  
        <Link to={`/course/${id}`} className={`list-group-item text-center bg-${mode} text-${mode==='light'?'dark':'light'}`}>
            {name}
        </Link>
    );
};

export default LeftSideNav;