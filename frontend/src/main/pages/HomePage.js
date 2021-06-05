import React from "react"
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import CommonsList from "main/components/Commons/CommonsList";
import { Container, Row, Col } from "react-bootstrap";
import { useCurrentUser } from "main/utils/currentUser";
import { useCommons } from "main/utils/commons";
import Background from './../../assets/HomePageBackground.jpg';

export default function HomePage() {
  const { data: currentUser } = useCurrentUser();
  const { data: commons }= useCommons();
  let commonsJoined = [];
  if(currentUser.root && currentUser.root.user.commons){
    commonsJoined = currentUser.root.user.commons;
  }

  const onButtonClick = ()=> {console.log("clicked")};

  // `url(${Background})` `url('file://${Background}')`  'url(' + require('./../../assets/HomePageBackground.jpg') + ')'  'url(' + Background + ')'  `url(${require('./../../assets/HomePageBackground.jpg')})`

  return (
    <div style={{height: "100vh", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${Background})`}}>
    <BasicLayout>
        <h1 data-testid="homePage-title" style={{fontSize: "75px", borderRadius: "7px", backgroundColor: "white", opacity:".9"}} className="text-center border-0 my-3">Howdy Farmer</h1>
        <Container>
          <Row>
            <Col sm><CommonsList commonList={commonsJoined} buttonText={"Visit"} buttonLink={onButtonClick}/></Col>
            <Col sm><CommonsList commonList={commons} buttonText={"Join"} buttonLink={onButtonClick}/></Col>
          </Row>
        </Container>
    </BasicLayout>
    </div>
  )
}