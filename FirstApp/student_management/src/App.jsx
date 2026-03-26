import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentList from './components/StudentList'
import AddStudent from './components/AddStudent'

function App() {
  const [students, setStudents] = useState([
    { name: "Harshith", mark: 60, grade: "C" },
    { name: "P R Adithya", mark: 2, grade: "S" },
    { name: "Sanjay Rithesh", mark: 10, grade: "B" }
  ]);

  const addStudent = (newstudent) => {
    setStudents([...students, newstudent]);
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_,i) => i !== index);
    setStudents(updatedStudents);
  }

  

  return (
    <>
      <h1>Student Management system</h1>
      <AddStudent onaddStudent={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </>
  )
}

export default App
