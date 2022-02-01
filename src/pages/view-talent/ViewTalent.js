import './ViewTalent.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const getTalentData = async () =>{
  const response = await fetch('http://localhost:3000/get-talent-info');
  let data = await response.json();
  data =  data['data'];

  return data.filter(element => element['skills'] && element['profession']);
}

const getSkillsList = async (element) => {
  const skills = [];

  for(const key in element['skills']){
    skills.push(<>
      <Row key={key}>
        <Col>{key}</Col>
        <Col>{ element['skills'][key] }</Col>
      </Row>
    </>);
  }

  return skills;
}

const generateTalentList = async () =>{
  const data = await getTalentData();

  return data.map(async (element) => {
    const skills = await getSkillsList(element);
    
    return (<>
      <div key={element['id']}>
        <p>Profession: {element['profession']}</p>
        <p>Skills</p>
        <div>
          {skills}
        </div>
      </div>
    </>);
  });
}

function ViewTalent() {
  // const talentList;
  
  // () =>{
     
  // }

  return (<>
    <div>
      {async() => {
        await generateTalentList()
      }}
    </div>
  </>);
}

export default ViewTalent;
