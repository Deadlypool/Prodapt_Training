import React, { useState } from "react"

const AddStudent = ({onaddStudent}) => {
    const [name, setName] = useState("");
    const [mark, setMark] = useState("");
    const [grade, setGrade] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newStudent = {name, mark, grade};
        onaddStudent(newStudent);
        setName("");
        setMark("");
        setGrade("");
    }

    return (
        <div>
            <h1>Add Student</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
                </div>
                <div>
                    <label>Mark:</label>
                    <input type="text" value={mark} onChange={(e) => setMark(e.target.value)} ></input>
                </div>
                <div>
                    <label>Grade:</label>
                    <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} ></input>
                </div>

                <button type="submit" onClick={handleSubmit}>Add Student</button>
            </form>
        </div>
    )
}
export default AddStudent;