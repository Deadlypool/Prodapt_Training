const StudentList = ({ students , onDelete, onEdit }) => {
    return (
        <div>
            <h3>Student List</h3>
            
                {students.map((student, index) => (
                    <div key={index}>
                        <span> {student.name} - {student.mark}</span>
                        {/* <strong>{student.name}</strong> - Mark: {student.mark}, Grade: {student.grade} */}
                        <button onClick={() => onEdit(student,index)}>Edit</button>
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </div>
                ))}
            
        </div>
    );
}

export default StudentList;