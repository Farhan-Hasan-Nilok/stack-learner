import React from 'react';
import './Course.css'
const Course = (props) => {
    console.log(props.course.img);
    const {name, instructor, img } = props.course
    return (
        <div className='course'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Course;