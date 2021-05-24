import React, { useState, useEffect } from "react"
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import CommonsList from "main/components/Commons/CommonsList";
import { Container, Row, Col } from "react-bootstrap";
import { useCurrentUser } from "main/utils/currentUser";
import { useCommons, JoinCommons } from "main/utils/commons";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [commons, setCommons] = useState([]);
  const [commonsJoined, setCommonsJoined] = useState([]);
  const { data: currentUser } = useCurrentUser();
  const { data: c }= useCommons();

  useEffect(
    () => {
      if(currentUser.root){
        setCommonsJoined(currentUser.root.user.commons);
      }
    },[currentUser]
  );

  useEffect(
    () => {
      if(c){
        setCommons(c);
      }
    },[c]
  );

  let navigate = useNavigate();
  const visitButtonClick = (id)=> {navigate("/play/"+id)};
  const joinButtonClick = (id)=> {
    JoinCommons(id);
    window.location.reload(false);
  };

  return (
    <BasicLayout>
      <div>
        <h1>Hello, world!</h1>
        <p>
          This is a webapp containing a bunch of different Spring Boot/React examples.
        </p>
        <Container>
          <Row>
            <Col sm><CommonsList commonList={commonsJoined} buttonText={"Visit"} buttonLink={visitButtonClick}/></Col>
            <Col sm><CommonsList commonList={commons} buttonText={"Join"} buttonLink={joinButtonClick}/></Col>
          </Row>
        </Container>
      </div>
    </BasicLayout>
  )
}