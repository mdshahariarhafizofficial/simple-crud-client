import React, { use, useState } from 'react';

const Users = ({fetchUsers}) => {
    const loadUsers = use(fetchUsers);
    const [users, setUsers] = useState(loadUsers);
    
    const handleAddUser = (e) =>{
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };
        // console.log(newUser);
        
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Data After Adding Db", data);
            if (data.insertedId) {
                newUser._id = data.insertedId;
                setUsers([...users, newUser])
                alert('User Added on Db')
                e.target.reset();
            }
        })

    };
    const handleDeleteUser = (id) => {
        console.log("Delete User id", id);
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {     
                console.log("Deleted user", data);
                const remainingUsers = users.filter( user => user._id !== id);
                setUsers(remainingUsers)
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleAddUser} action="">
                <input type="text" name='name' placeholder='name' /><br /><br />
                <input type="email" name='email' placeholder='Email' /><br /><br />
                <input type="submit" value="Submit" />
            </form>

            <div>
                <h2>Total Users : {users.length}</h2>
                {
                    users.map(user => <p key={user._id} >
                        {user.name} : {user.email} 
                        <button onClick={()=> handleDeleteUser(user._id)}>X</button>
                    </p> )
                }
            </div>
        </div>
    );
};

export default Users;