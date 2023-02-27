import React from "react";
import {Link} from 'react-router-dom'


const ToDoItem = ({todo, deleteTodo}) => {
    return (
        <tr>
            <td>
                {todo.id}
            </td>
            <td>
                {todo.text}
            </td>           
            <td>
                {todo.author}
            </td>
            <td>
                {todo.updated_at}
            </td>
            <td>
                <button onClick={() => deleteTodo(todo.id)} type='button'>Delete</button>
            </td>
        </tr>
    )
}

const ToDoList = ({todos, deleteTodo}) => {
    return (
        <div>
        <table>
            <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Author</th>
                <th>Last Update</th>
                <th></th>
            </tr>
            {todos.map((todo) => <ToDoItem todo={todo} deleteTodo={deleteTodo} />)}
        </table>
        <Link to='/Todo/create'>Create</Link>
        </div>
    )
}

export default ToDoList