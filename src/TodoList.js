export default function TodoList(){

    function handleSubmit(event){
        event.preventDefault()

        let task=event.target.task.value
        alert("my task", task)

        event.target.reset()
    }
    return(
        <div className="container my-5">
            <div className="mx-auto rounded border p-4" style={{width:"500px",backgroundColor:"#08618d"}}>
                <h2 className="text-white text-center mb-5">My Todo List</h2>

                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2"  placeholder="New Task" name="task"/>
                    <button className="btn btn-outline-light" type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}