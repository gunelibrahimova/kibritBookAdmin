import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { BASE_URL } from '../../api/config';

const CreateAuthor = () => {
  const [Name, setName] = useState("");
  const [description,setDescription] = useState("");
  const [photoURL, setPhoto] = useState("");
  const navigate = useNavigate();

  const postData = async () => {
    fetch(`${BASE_URL}author/add`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        photoURL: photoURL,
        description: description
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate('/author')
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
      <Form.Field>
        <label>Description</label>
        <input placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
      </Form.Field>
      <button className='btn btn-outline-success my-2' type="submit" onClick={postData}>
        <Link to={'/author'}>Submit</Link>
      </button>
    </Form>
  )
}

export default CreateAuthor