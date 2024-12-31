import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users";
import { Link, useNavigate } from "react-router-dom";


function Home() {
    let history = useNavigate();

    function setID(id,Name,Email,MobileNumber,Age) {
       localStorage.setItem("id",id);
        localStorage.setItem("Name",Name);
        localStorage.setItem("Email",Email);
        localStorage.setItem("MobileNumber",MobileNumber);
        localStorage.setItem("Age",Age);

    }

    function deleted(id) {
        let index = users.map(function(e){
            return e.id
        }).indexOf(id);
        users.splice(index,1);
        history("/")

    }


    return (
        <div style={{}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>MobileNumber</th>
                        <th>Age</th>

                    </tr>

                </thead>
                <tbody>
                 {
                     users.map((user) => (
                        <tr>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.MobileNumber}</td>
                            <td>{user.Age}</td>
                            <td>
                                <Link to={"/edit"}>
                                <Button onClick={(e) => setID(user.id,user.Name,user.Email,user.MobileNumber,user.Age)}
                                    variant="primary">Update</Button>
                                </Link>
                            </td>
                            {/* <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.MobileNumber}</td>
                            <td>{user.Age}</td>
                            <td> */}
                                
                                <Button onClick={(e) => deleted(user.id)}
                                    variant="danger">Delete</Button>
                                
                            {/* </td> */}
                        </tr>
                      ))
                 }
                </tbody>

            </Table>

            <Link className="d-grid gap-2" style={{"textDecoration": "none"}} to={"/create"}>
                <Button variant="primary" size="lg">
                    Create Record
                </Button>
            </Link>

        </div>
    )
}

export default Home;
