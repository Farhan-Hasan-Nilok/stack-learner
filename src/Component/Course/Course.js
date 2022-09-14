import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const {name, instructor, img, rating, price} = props.course;
// console.log(props);
    return (
        <div className='course'>
            <img src={img} alt="" />
            <span><strong>{name}</strong></span>
            <br />
            <span className='teacher'><small>{instructor}</small></span>
            <br />
            <span className='rating'><strong>{rating}  <FontAwesomeIcon className='star' icon={faStar} size="xs" /><FontAwesomeIcon className='star' icon={faStar} size="xs" /><FontAwesomeIcon className='star' icon={faStar} size="xs" /><FontAwesomeIcon className='star' icon={faStar} size="xs" /><FontAwesomeIcon className='star' icon={faStarHalfStroke} size="xs" /></strong></span>
            <span><strong>${price}</strong></span>
            <button onClick = {props.handleAddProduct}>Buy Now <FontAwesomeIcon icon={faChevronRight}/></button>
        </div>
    );
};

export default Course;