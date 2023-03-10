import React from "react";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>           
            <td>
                {user.firstname}
            </td>
            <td>
                {user.lastname}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        UserName
                    </th>
                    <th>
                        Firstname
                    </th>
                    <th>
                        Lastname
                    </th>
                    <th>
                        mailfield
                    </th>
                </tr>
            </thead>
        {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}

export default UserList
