import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { BASE_URL } from '../../api/config';

const UpdateSlider = () => {
    const [photoUrl, setPhoto] = useState("");
    const [id, setID] = useState(null);
    const navigate = useNavigate();
  
    const updateAPIData = async () => {
      fetch(`${BASE_URL}slider/update/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          photoUrl: photoUrl,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          navigate("/slider");
        });
    }
  
    useEffect(() => {
      setID(localStorage.getItem('ID'))
      setPhoto(localStorage.getItem('photoUrl'));
    }, []);
  
    return (
      <div>
        <Form className="create-form">
          <Form.Field>
            <label>Photo</label>
            <input
              placeholder="Photo"
              value={photoUrl}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </Form.Field>
          <button type="submit" className='btn btn-outline-warning my-2' onClick={updateAPIData}>Update</button>
        </Form>
      </div>
    )
}

export default UpdateSlider