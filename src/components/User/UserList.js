import {useEffect, useState} from "react";
import axios from "axios";

function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://api.github.com/users").then(res => {
            setUsers(res.data)
        })
    }, []);

    const searchUser = (evt) => {
        const username = evt.target.value;
        if (username) {
            axios.get("https://api.github.com/search/users?q=" + username).then((response) => {
                console.log(response.data);
                setUsers(response.data.items);
            })
        }
    }

    return (
        <>
            <input type="text" onChange={searchUser}/>
            <table>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>Avatar</th>
                    <th>Link</th>
                </tr>
                {users.length === 0 ? (<p>Loading....</p>) : users.map((user,index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.login}</td>
                        <td><img src={user.avatar_url} alt="" width="50"/></td>
                        <td><a href={user.html_url}></a></td>
                    </tr>
                ))}

            </table>
        </>
    )
}

export default UserList;