import React from 'react';
import logo from '../../images/logo.png';
import  carousel1  from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel2.jpg'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
    return (
        <div className='navbar'>
            <nav>
                <a href="./"><img src={logo} alt="" /></a>
                <form action="">
                    <FontAwesomeIcon className='search' icon={faMagnifyingGlass} size="lg" />
                    <input type="text" placeholder='Search anything'/>
                </form>
                <a href="./teach" className='nav-links teach'>Teach on Udemy</a>
                <a href="./log-in" className='nav-links log-in'>Log in</a>
                <a href="./sign" className='nav-links sign-up'>Sign up</a>
                <a href="./cart" className='nav-links cart'><FontAwesomeIcon icon={ faShoppingCart} size="lg" /><span className='cart-num'>0</span></a>
            </nav>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        <div className='billboard'>
                            <h1>Learning that gets you</h1>
                            <p>Skills for your present (and your future). Get started with us.</p>
                        </div>
                        <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='billboard'>
                            <h1>Unlock the power of people</h1>
                            <p>Udemy is trusted by 10.5K+ companies around the world. </p>
                        </div>
                        <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <div className='heading'>
                    <h1 className='title'>A broad selection of course</h1>
                    <p>Choose from 204,000 online video courses with new additions published every month.</p>
                </div>

                <div>
                    <h2 className='title'>Courses</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;