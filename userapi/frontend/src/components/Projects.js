import React from "react";
import {Link} from 'react-router-dom'


const ProjectItem = ({item, deleteProject}) => {
    return (
        <tr>
            <td>
                {item.id}
            </td>
            <td>
                {item.name}
            </td>           
            <td>
                {item.url}
            </td>
            <td>
                {item.users}
            </td>
            <td>
                <button onClick={() => deleteProject(item.id)} type='button'>Delete</button>
            </td>
        </tr>
    )
}

const ProjectList = ({items, deleteProject}) => {
    return (
        <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>URL</th>
                <th>Users</th>
                <th></th>
            </tr>
            {items.map((project) => <ProjectItem item={project} deleteProject = {deleteProject}/>)}
        </table>
        <Link to='/Projects/create'>Create</Link>
        </div>
    )
}

export default ProjectList