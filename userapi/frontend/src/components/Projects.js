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
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        URL
                    </th>
                    <th>
                        Users
                    </th>
                </tr>
            </thead>
            {items.map((item) => <ProjectItem item={item} />)}
        </table>
    )
}

export default ProjectList