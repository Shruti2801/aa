import React, {useEffect , useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, 
  Route, Navigate, Routes, Redirect,  Link, useNavigate  } from "react-router-dom";

function GetData() {

  let navigate = useNavigate();
  const[data,setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8080/get-all-person-info").then((result) => {
      result.json().then((resp) => {
        console.log("result ",resp );
        setData(resp);
      })
    });
  },[]);


  return (
    <>
    {console.log("data " ,data)}
    <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Zip</th>
    </tr>
  </thead>
  <tbody>
  {
              data.map((item)=>(
              <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.password}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.zipcode}</td>
              </tr>)
              )
          }      
    
  </tbody>
</table>
<br></br>

<button type="submit"  className="btn btn-primary" onClick={() => {navigate("/")}} >Sign in</button>
</>
  )
}

export default GetData