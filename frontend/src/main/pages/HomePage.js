import React from "react"
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import CommonsList from "main/components/Commons/CommonsList";
import { Container, Row, Col } from "react-bootstrap";
import { useCurrentUser } from "main/utils/currentUser";
import { useCommons } from "main/utils/commons";

export default function HomePage() {
  const { data: currentUser } = useCurrentUser();
  const { data: commons }= useCommons();
  let commonsJoined = [];
  if(currentUser.root && currentUser.root.user.commons){
    commonsJoined = currentUser.root.user.commons;
  }

  const onButtonClick = ()=> {console.log("clicked")};

  return (
    <BasicLayout>
      <div>
        <h1>Hello, world!</h1>
        <p>
          This is a webapp containing a bunch of different Spring Boot/React examples.
        </p>
        <Container>
          <Row>
            <Col sm><CommonsList commonList={commonsJoined} buttonText={"Visit"} buttonLink={onButtonClick}/></Col>
            <Col sm><CommonsList commonList={commons} buttonText={"Join"} buttonLink={onButtonClick}/></Col>
          </Row>
        </Container>
      </div>
    </BasicLayout>
  )
}