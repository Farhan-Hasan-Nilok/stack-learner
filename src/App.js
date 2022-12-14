import { useState } from 'react';
import './App.css';
import Course from './Component/Course/Course';
import Header from './Component/Header/Header';
import Teacher from './Component/Teacher/Teacher';

function App() {
  const courses = [
    { name: 'Python Programming Course', price: 84.99, rating: 4.4, instructor: 'The Codex', img: '/courses/python programing.png'},
    { name: 'Python for Data Analysis', price: 85.99, rating: 4.7, instructor: 'Jose Portila', img: '/courses/python data analysis.jpg'},
    { name: 'Python for Beginners', price: 50.99, rating: 4.5, instructor: 'Edwiz Diaz', img: '/courses/python for beginners.jpg'},
    { name: 'Python Object Oriented Programming', price: 60.99, rating: 4.6, instructor: 'Abrar Hussain', img: '/courses/python object oriented.png'},
    { name: 'React-The Complete Guide', price: 84.99, rating: 4.8, instructor: 'Infinite Skills', img: '/courses/React complete guide.png'},
    { name: 'Complete JavaScript Course', price: 64.99, rating: 4.3, instructor: 'Stephane Maarek', img: '/courses/javascript complete course.png'},
    { name: 'Web Developer Bootcamp', price: 74.99, rating: 4.5, instructor: 'Abrar Hussain', img: '/courses/web development bootcamp.jpg'},
    { name: 'Python for Machine Learning', price: 90.99, rating: 4.7, instructor: 'Andrew Colson', img: '/courses/python machine learning.png'},
    { name: 'Angular Bootcamp', price: 82.99, rating: 4.4, instructor: 'Hamded Mosh', img: '/courses/angular bootcamp.jpg'},
    { name: 'NodeJs Complete Guide', price: 89.99, rating: 4.5, instructor: 'Maven Edwin', img: '/courses/nodejs.png'},
    { name: 'Mongo DB From Scratch', price: 84.99, rating: 4.6, instructor: 'Josh Russo', img: '/courses/mongo.jpg'},
    { name: 'Java From Zero to Hero', price: 84.99, rating: 4.4, instructor: 'Cris Bynor', img: '/courses/java.png'},
  
  ]
  const allCourse = courses.slice(0, 12);
  const [courseAdd, setCourseAdd] = useState([allCourse]);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (courseAdd) => {
    const newCart = [...cart, courseAdd];
    setCart(newCart);
    console.log(newCart);
  }
  return (
    <div >
      <Header cart = {cart}></Header>
     <div className='course-card'>
        {
          courses.map(course => <Course handleAddProduct = {handleAddProduct} course={course}></Course>)
        }
     </div>
       <div className="teacher">
         <Teacher></Teacher>
      </div>
    </div>
    
  );
}

export default App;
