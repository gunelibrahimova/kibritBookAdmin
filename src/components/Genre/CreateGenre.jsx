import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { BASE_URL } from '../../api/config';

const CreateGenre = () => {
  const [Name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const postData = async () => {
    fetch(`${BASE_URL}genre/add`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        photo: photo
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate("/genre");
      });
  };
  
  return (
    <Form className="create-form">
      <Form.Field>
        <label>Name</label>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Photo</label>
        <input
          placeholder="Photo"
          onChange={(e) => setPhoto(e.target.value)}
        />
      </Form.Field>
      <button className='btn btn-outline-success my-2' type="submit" onClick={postData}>
        <Link to={'/genre'}>Submit</Link>
      </button>
    </Form>
  )
}

export default CreateGenre