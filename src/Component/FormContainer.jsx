
function FormContainer({
    studentName,
    setStudentName,
    SrCode,
    setSrCode,
    studentProgram,
    setStudentProgram,
    handleSubmit
}) {
    return (
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
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                    />

                </div>

                <div className="input-group">

                    <label htmlFor="Sr Code">
                        Sr Code
                    </label>

                    <input
                        type="text"
                        id="Sr Code"
                        placeholder="Enter Sr Code"
                        value={SrCode}
                        onChange={(e) => setSrCode(e.target.value)}
                        required
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
                        onChange={(e) => setStudentProgram(e.target.value)}
                        required
                    />

                </div>

                <button type="submit" className="add-btn">
                    Add Student
                </button>

            </form>

        </section>
    );
}

export default FormContainer;
