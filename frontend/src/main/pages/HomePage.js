import React from "react"
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import CommonsList from "main/components/Commons/CommonsList";
import commonsFixtures from "fixtures/commonsFixtures";
import { Container, Row, Col } from "react-bootstrap";

export default function HomePage() {
  const commonsJoined = commonsFixtures.threeCommons; // TODO Get from backedn
  const commonsAll = commonsFixtures.threeCommons; // TODO Get from backend

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
            <Col sm><CommonsList commonList={commonsAll} buttonText={"Join"} buttonLink={onButtonClick}/></Col>
          </Row>
        </Container>
      </div>
    </BasicLayout>
  )
}