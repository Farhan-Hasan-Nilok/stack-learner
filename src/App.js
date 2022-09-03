
import './App.css';
import Course from './Component/Course/Course';
import Header from './Component/Header/Header';
import python from '../src/courses/python programing.png'
function App() {
  const courses = [
    {name: 'Python Programming Course', price: 84.99, rating: 4.4, instructor: 'The Codex', img: {python}},
    {name: 'Python for Data Analysis', price: 85.99, rating: 4.7, instructor: 'Jose Portila'},
    {name: 'Python for Beginners', price: 50.99, rating: 4.5, instructor: 'Edwiz Diaz'},
    {name: 'Python Object Oriented Programming', price: 60.99, rating: 4.6, instructor: 'Abrar Hussain'},
    {name: 'React-The Complete Guide', price: 84.99, rating: 4.8, instructor: 'Infinite Skills'},
    {name: 'Complete JavaScript Course', price: 64.99, rating: 4.3, instructor: 'Stephane Maarek'},
    {name: 'Web Developer Bootcamp', price: 74.99, rating: 4.5, instructor: 'Abrar Hussain'},
    {name: 'Python for Machine Learning', price: 90.99, rating: 4.7, instructor: 'Andrew Colson'},
    {name: 'Angular Bootcamp', price: 84.99, rating: 4.4, instructor: 'Hamded Mosh'},
  
  ]
  return (
    <div >
      <Header></Header>
      {
        courses.map(course => <Course course ={course}></Course>)
      }
    </div>
  );
}

export default App;
