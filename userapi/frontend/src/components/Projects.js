import React from "react";

const ProjectItem = ({item, deleteProject}) => {
    return (
        <tr>
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
        <table>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Users</th>
                <th></th>
            </tr>
            {items.map((project) => <ProjectItem item={project} deleteProject = {deleteProject}/>)}
        </table>
    )
}

export default ProjectList