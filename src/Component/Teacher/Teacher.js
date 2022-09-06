import React from 'react';
import './Teacher.css';
import teacher from '../../images/instructor.jpg'
const Teacher = () => {
    return (
        <div className='wrapper'>
            <div className='instructor'>
                <img src={teacher} alt="" />
                
                <div className="info">
                    <h3>Become an Instructor</h3>
                    <p className='des'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Teacher;