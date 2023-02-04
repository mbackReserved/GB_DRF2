import React from "react";

const ToDoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.text}
            </td>           
            <td>
                {todo.author}
            </td>
            <td>
                {todo.updated_at}
            </td>
        </tr>
    )
}

const ToDoList = ({todos}) => {
    return (
        <table>
            <tr>
                <th>Description</th>
                <th>Author</th>
                <th>Last Update</th>
            </tr>
            {todos.map((todo) => <ToDoItem todo={todo} />)}
        </table>
    )
}

export default ToDoList