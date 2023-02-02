import React from "react";

const ProjectItem = ({item}) => {
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
        </tr>
    )
}

const ProjectList = ({items}) => {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Users</th>
            </tr>
            {items.map((project) => <ProjectItem item={project} />)}
        </table>
    )
}

export default ProjectList