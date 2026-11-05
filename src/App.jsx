
import { useState } from 'react';
import './App.css';

function App() {

    // Store student information
    const [students, setStudents] = useState([]);

    // Store input values
    const [studentName, setStudentName] = useState('');
    const [studentProgram, setStudentProgram] = useState('');

    // Add student
    function handleSubmit(event) {

        event.preventDefault();

        const name = studentName.trim();
        const program = studentProgram.trim();

        if (name === '' || program === '') {
            alert('Please enter the student name and program.');
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: name,
            program: program
        };

        setStudents([...students, newStudent]);

        // Clear input fields
        setStudentName('');
        setStudentProgram('');
    }

    // Remove student
    function removeStudent(id) {

        setStudents(
            students.filter(student => student.id !== id)
        );

    }

    return (

        <>

            {/* Header */}
            <header>
                <h1>Student Directory</h1>
                <p>Add and manage student information easily.</p>
            </header>


            {/* Main Content */}
            <main className="container">

                {/* Student Form */}
                <section className="form-section">

                    <h2>Add Student</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">

                            <label htmlFor="studentName">
                                Student Name
                            </label>

                            <input
                                type="text"
                                id="studentName"
                                placeholder="Enter student name"
                                value={studentName}
                                onChange={(e) =>
                                    setStudentName(e.target.value)
                                }
                            />

                        </div>


                        <div className="input-group">

                            <label htmlFor="studentProgram">
                                Program
                            </label>

                            <input
                                type="text"
                                id="studentProgram"
                                placeholder="Enter program"
                                value={studentProgram}
                                onChange={(e) =>
                                    setStudentProgram(e.target.value)
                                }
                            />

                        </div>


                        <button type="submit" className="add-btn">
                            Add Student
                        </button>

                    </form>

                </section>


                {/* Student Display Area */}
                <section className="students-section">

                    <div className="section-header">

                        <h2>Student List</h2>

                        <span id="studentCount">
                            {students.length}{' '}
                            {students.length === 1 ? 'Student' : 'Students'}
                        </span>

                    </div>


                    {/* Student Cards */}
                    <div className="student-grid">

                        {students.length === 0 ? (

                            <div className="empty-message">
                                No students added yet.
                            </div>

                        ) : (

                            students.map(student => (

                                <div className="student-card" key={student.id}>

                                    <div className="student-icon">
                                        {student.name.charAt(0).toUpperCase()}
                                    </div>

                                    <h3>{student.name}</h3>

                                    <p>
                                        <strong>Program:</strong><br />
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

            </main>

        </>

    );
}

export default App;
