import React, {useEffect, useState} from 'react'
import { useNavigate , useLocation} from 'react-router-dom'
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';


const initialState = {
  name: "",
  contact: "",
  remark: "",
};
const Register = () => {
  const [state, setState] = useState(initialState);
  const [selectedFile, setSelectedFile] = useState(null);
  //add distructer 
  const { name, contact, remark } = state; 
  
  const navigate = useNavigate();

  const handleFileChange = e => {
    console.log({ file: e.target.files[0] })
    setSelectedFile({ file: e.target.files[0] });
  };


 

  const addUser = async () => { 

    let data = new FormData();
    data.append("file", selectedFile.file)
    console.log({data})
    const res = await axios.post("/register", data); 
    if (res.status === 200) {
      toast.success(res.data);
    }
    
  };


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(state)
    if(
      !name || !contact || !remark 
      ||
       !selectedFile
       ){
      toast.error("Please provide the value into input fields");
    } else {
      addUser();
      navigate("/");
    }

  }

  const handleInputChange = (e) =>{
    let { value, id} = e.target;
    console.log( {id, value})
    // console.log( "id",e.target.files, id)
    setState({...state, [id]:value })
   };

  
  return (
//Here the Old

    <div className="container">        
      <Form onSubmit={handleSubmit}>

        <Form.Group className="m-3 pt-5" 
          controlId="name" 
          id="name" name="name" onChange={handleInputChange} value="name">
          <Form.Label style={{fontWeight: "bold"}} >FUll Name</Form.Label>
          <Form.Control type="name" placeholder="Mike" />
        </Form.Group>

        <Form.Group className="m-3" controlId="contact"
         id="contact" name="contact" onChange={handleInputChange} value="contact">
          <Form.Label style={{fontWeight: "bold"}}>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="+60 1234567" />
        </Form.Group>

        <Form.Group className="m-3" controlId="remark"
         id="remark" name="remark" onChange={handleInputChange} value="remark">
          <Form.Label style={{fontWeight: "bold"}}>remark</Form.Label>
          <Form.Control type="text" placeholder="Your Notes ..." />
        </Form.Group>

        <Form.Group controlId="file" className="m-3"
         id="file" name="file" onChange={handleFileChange} value="file">
          <Form.Label style={{fontWeight: "bold"}}>Attachtment <code>Choose Multiple</code></Form.Label>    
          <Form.Control type="file" multiple />
        </Form.Group>
        
        <Button  style={{fontWeight: "bold"}} as="input" type="submit" value="Submit" />{' '}
        {/* <input type="submit" value="Submit"></input> */}
</Form>
    </div>


  )
}

export default Register