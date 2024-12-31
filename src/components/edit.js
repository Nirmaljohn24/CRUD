import React , {useEffect, useState}from "react";
import { Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";

import { Link, useNavigate } from "react-router-dom";

function Edit (){
    let history = useNavigate();

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [mobilenumber,setmobilenumber] = useState("")
    const [age,setage] = useState("")
    const [id,setid] = useState("")

    let index = users.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

         if(name === "" || email === "" || mobilenumber === "" || age === ""){
            alert("Invalid Input");
            return;

        }

        users[index].Name = name;
        users[index].Email = email;
        users[index].MobileNumber = mobilenumber;
        users[index].Age = age;

        history("/");
        

    }

    useEffect(() => {
      
        setname(localStorage.getItem("Name"))
        setemail(localStorage.getItem("Name"))
        setmobilenumber(localStorage.getItem("MobileNumber"))
        setage(localStorage.getItem("Age"))
        setid(localStorage.getItem("id"))
        
},[])

    
    return(
        <div>
           <Form className="d-grid gap-2" style={{margin:"5rem"}}>
            <Form.Group className="mb-3" controlId="Name"> 
                <Form.Control  
                value={name}
                onChange={(e) => setname (e.target.value)} type="text" placeholder="Enter Name"  required/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="Email"> 
                <Form.Control
                value={email}
                 onChange={(e) => setemail (e.target.value)} type="text" placeholder="Enter Email"  required/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="MobileNumber"> 
                <Form.Control
                value={mobilenumber}
                 onChange={(e) => setmobilenumber (e.target.value)} type="text" placeholder="Enter MobileNUmber"  required/>

            </Form.Group>
            <Form.Group className="mb-1" controlId="Age"> 
                <Form.Control
                value={age} 
                onChange={(e) => setage (e.target.value)} type="text" placeholder="Enter Age"  required/>

            </Form.Group>


           </Form>

           <Button className="m"
           onClick={(e) => handleSubmit(e)}
           variant="primary"
           type="submit">
            Update

           </Button>

           <Link className="d-grid gap-2" to="/">
           <Button variant="info" size="lg" >
            Home

           </Button>
           </Link>
        </div>
    )
}

export default Edit