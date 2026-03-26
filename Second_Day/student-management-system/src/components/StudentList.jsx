import React from 'react'
import data from "../data/db.json"

const StudentList = () => {
  return (
    <div>
        <h1>StudentList</h1>
        {
            data.students.map((student) => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <p>Price: ${student.mark1}</p>
                    <p>Category: {student.mark2}</p>
                    <p>In Stock: {student.inStock ? 'Yes' : 'No'}</p>
                    <br></br>
                </div>
             )
            )
        }
    </div>
  )
}

export default StudentList