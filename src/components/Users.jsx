import React from 'react';

const Users = () => {
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
        })
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleAddUser} action="">
                <input type="text" name='name' placeholder='name' /><br /><br />
                <input type="email" name='email' placeholder='Email' /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Users;