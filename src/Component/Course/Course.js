import React from 'react';
import './Course.css'
const Course = (props) => {
    console.log(props.course.img);
    const {name, instructor, img } = props.course
    return (
        <div>
            <img src={img} alt="" />
            <h5>helloi</h5>
        </div>
    );
};

export default Course;