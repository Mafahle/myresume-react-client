import './SubmitResume.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function SubmitResume() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();

    const response = await fetch('http://localhost:3000/submit-info', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputs.name,
        surname: inputs.surname
      })
    });

    console.log(await response.json());
  };
  
  return (<>
    <Container>
      <div className='form-container pt-4 pb-5'>
        <form onSubmit={handleSubmit}>
          <Container>
            <div>
              <label className='label-align'>Name</label>
              <input 
                className='text-input'
                type='text'
                name="name" 
                value={inputs.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <label className='label-align'>Surname</label>
              <input 
                className='text-input'
                type='text' 
                name="surname"
                value={inputs.surname}
                onChange={handleChange}
                required 
              />
            </div>
            <input type="submit" value="Submit Info"/>
          </Container>
        </form>
      </div>
    </Container>
  </>);
}

export default SubmitResume;
