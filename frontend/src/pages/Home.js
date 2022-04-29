import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import axios from "axios";
import { Table } from 'react-bootstrap';


const Home = () => {
const [data, setData] = useState([]);

  useEffect(() => {
      getUsers();
  },[]);
  
  const getUsers = async () => { 
    const res = await axios.get("http://localhost:7000/api/users");
    if (res.status === 200) {
        setData(res.data);
    }
  };
  
  return (
    <div>
        <h1>Home</h1>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Remark</th>
      <th>Attachtment</th>

    </tr>
  </thead>
  <tbody>
    {data &&
      data.map((item, index) => {
        return (
          <tr key={index}>
          <th scope = "row"> {index + 1}</th>
      <td> {item.name} </td>
      <td> {item.contact} </td>
      <td> {item.remark} </td>
      <td> {item.file} </td>
    </tr>
        )
      })
    }
  </tbody>
</Table>
    </div>
  )
}

export default Home