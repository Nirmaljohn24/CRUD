import React , {useState}from "react";
import { Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import {v4 as uuidv4} from "uuid";
import { Link, useNavigate } from "react-router-dom";




function Create() {

    let history = useNavigate();

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [mobilenumber,setmobilenumber] = useState("")
    const [age,setage] = useState("")
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuidv4();
        let uni = ids.slice(0,8);
       
        
        if(name === "" || email === "" || mobilenumber === "" || age === ""){
            alert("Invalid Input");
            return;

        }

        users.push({
            id:uni,
            Name:name,
            Email:email,
            MobileNumber:mobilenumber,
            Age:age
        });

        history("/");
        

    }


    return(
        <div>
           <Form className="d-grid gap-2" style={{margin:"5rem"}}>
            <Form.Group className="mb-3" controlId="Name"> 
                <Form.Control  
                onChange={(e) => setname (e.target.value)} type="text" placeholder="Enter Name"  required/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="Email"> 
                <Form.Control onChange={(e) => setemail (e.target.value)} type="text" placeholder="Enter Email"  required/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="MobileNumber"> 
                <Form.Control onChange={(e) => setmobilenumber (e.target.value)} type="text" placeholder="Enter MobileNUmber"  required/>

            </Form.Group>
            <Form.Group className="mb-1" controlId="Age"> 
                <Form.Control onChange={(e) => setage (e.target.value)} type="text" placeholder="Enter Age"  required/>

            </Form.Group>


           </Form>

           <Button className="m"
           onClick={(e) => handleSubmit(e)}
           variant="primary"
           type="submit">
            Submit

           </Button>

           <Link className="d-grid gap-2" to="/">
           <Button variant="info" size="lg" >
            Home

           </Button>
           </Link>
        </div>
    )

}

 export default Create;