import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { BASE_URL } from '../../api/config';

const CreatePublisher = () => {
  const [Name, setName] = useState("");
  const [photoURL, setPhoto] = useState("");
  const [publishDate,setPublishDate] = useState("");
  const navigate = useNavigate();

  const postData = async () => {
    fetch(`${BASE_URL}publisher/add`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        photoURL: photoURL,
        publishDate: publishDate
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate('/publisher')
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
        <label>publishDate</label>
        <input placeholder="publishDate" type="datetime-local" onChange={(e) => setPublishDate(e.target.value)}/>
      </Form.Field>
      <button className='btn btn-outline-success my-2' type="submit" onClick={postData}>
        <Link to={'/publisher'}>Submit</Link>
      </button>
    </Form>
  )
}

export default CreatePublisher