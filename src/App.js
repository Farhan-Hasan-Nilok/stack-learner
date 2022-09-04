
import './App.css';
import Course from './Component/Course/Course';
import Header from './Component/Header/Header';
// import python from '/public/courses/python programing.png'
function App() {
  // const python1 = require('/courses/python programing.png');
  const courses = [
    { name: 'Python Programming Course', price: 84.99, rating: 4.4, instructor: 'The Codex', img: '/courses/python programing.png'},
    {name: 'Python for Data Analysis', price: 85.99, rating: 4.7, instructor: 'Jose Portila', img: '/courses/python data analysis.jpg'},
    { name: 'Python for Beginners', price: 50.99, rating: 4.5, instructor: 'Edwiz Diaz', img: '/courses/python for beginners.jpg'},
    {name: 'Python Object Oriented Programming', price: 60.99, rating: 4.6, instructor: 'Abrar Hussain', img: '/courses/python object oriented.png'},
    {name: 'React-The Complete Guide', price: 84.99, rating: 4.8, instructor: 'Infinite Skills', img: '/courses/React complete guide.png'},
    { name: 'Complete JavaScript Course', price: 64.99, rating: 4.3, instructor: 'Stephane Maarek', img: '/courses/javascript complete course.png'},
    { name: 'Web Developer Bootcamp', price: 74.99, rating: 4.5, instructor: 'Abrar Hussain', img: '/courses/web development bootcamp.jpg'},
    { name: 'Python for Machine Learning', price: 90.99, rating: 4.7, instructor: 'Andrew Colson', img: '/courses/python machine learning.png'},
    { name: 'Angular Bootcamp', price: 84.99, rating: 4.4, instructor: 'Hamded Mosh', img: '/courses/angular bootcamp.jpg'},
  
  ]
  return (
    <div >
      <Header></Header>
     <div className='course-card'>
        {
          courses.map(course => <Course course={course}></Course>)
        }
     </div>
     {/* <img src={python1} alt="" /> */}
    </div>
    
  );
}

export default App;
