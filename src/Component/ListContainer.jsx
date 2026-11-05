
function ListContainer({ students, removeStudent }) {
    return (
        <section className="students-section">

            <div className="section-header">

                <h2>Student List</h2>

                <span id="studentCount">
                    {students.length}{' '}
                    {students.length === 1 ? 'Student' : 'Students'}
                </span>

            </div>

            <div className="student-grid">

                {students.length === 0 ? (

                    <div className="empty-message">
                        No students added yet.
                    </div>

                ) : (

                    students.map((student) => (

                        <div className="student-card" key={student.id}>

                            <div className="student-icon">
                                {student.name.charAt(0).toUpperCase()}
                            </div>

                            <h3>{student.name}</h3>

                            <p>
                                <strong>Program:</strong>
                                <br />
                                {student.program}
                            </p>

                            <button
                                className="remove-btn"
                                onClick={() => removeStudent(student.id)}
                            >
                                Remove Student
                            </button>

                        </div>

                    ))

                )}

            </div>

        </section>
    );
}

export default ListContainer;
