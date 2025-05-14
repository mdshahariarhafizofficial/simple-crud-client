import React from 'react';
import { Link, useLoaderData } from 'react-router';

const EditUser = () => {
    const data = useLoaderData();

    const handleEditUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const userInfo = { name, email }
        console.log(userInfo);
        
        fetch(`http://localhost:3000/users/${data._id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log( "Updated data : ",data);
            
        })
        
    }

    return (
        <div>
            <Link to="/">Users</Link>
            <h1>Edit Info</h1>
            <form onSubmit={handleEditUser}>
                <input type="text" defaultValue={data.name} name='name' placeholder='Name' /> <br /> <br />
                <input type="Email" defaultValue={data.email} name='email' placeholder='Name' /> <br /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditUser;