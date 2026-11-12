const ListContainer = ({data}) => {

    return(
        <>
           <section id="list-container">
            {data.map((student) => (
                <article key={student.id} className="list-item">
                    <h1>{student.name}</h1>
                    <p>{student.srcode}</p>
                    <p>{student.program}</p>
                    <button>Delete</button>
                </article>

            ))}
           </section>

        </>
    )
}
export default ListContainer;