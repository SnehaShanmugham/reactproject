import React ,{useState} from "react"
export const Register = (props) => {
    const [Name,setName]=useState('');
    const [Password,setPassword]=useState('');
    const [Email,setMail]=useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(Email);
    }
    return(
        <>
          <form onSubmit={handleSubmit}>
            <label for="Name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/><br></br>
            <label for="Password">Password</label>
            <input type="password" name="Password" id="pass" placeholder="Enter your password"/><br></br>
            <label for="Email">Email</label>
            <input type="email" name="Email" id="email" placeholder="Enter your mail"/><br></br>
            <button type="submit">Create</button>
          </form>
        </>
    )
    
}