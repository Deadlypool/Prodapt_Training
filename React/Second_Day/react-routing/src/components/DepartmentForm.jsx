import {useState} from 'react'

const DepartmentForm = () => {
    const [departmentName, setDepartmentName] = useState('')
  return (
    <div>
        <h1>DepartmentForm</h1>
        <form>
            <label htmlFor='deptname'>Department Name: </label>
            <select id="deptname" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)}>
                <option value="You selected nothing">Select a department</option>
                <option value="HR">Human Resources</option>
                <option value="IT">Information Technology</option>
                <option value="Finance">Finance</option>
            </select>
            <p>Selected Department: {departmentName}</p>
        </form>
    </div>
  )
}

export default DepartmentForm