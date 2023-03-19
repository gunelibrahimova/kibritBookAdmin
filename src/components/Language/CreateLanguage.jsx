import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { BASE_URL } from '../../api/config';

const CreateLanguage = () => {
    const [Name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const navigate = useNavigate();


    const postData = async () => {
        fetch(`${BASE_URL}language/add`, {
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
            navigate('/language');
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
        <button className='btn btn-outline-success' type="submit" onClick={postData}>Submit</button>
      </Form>
  )
}

export default CreateLanguage