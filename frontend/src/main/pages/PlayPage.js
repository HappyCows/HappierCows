import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import React from "react"; 
import { useCurrentUser} from "main/utils/currentUser";
import CommonsPlay from "main/components/Commons/CommonsPlay";
import {useParams} from "react-router-dom"; 
import CommonsAnnouncement from "main/components/Commons/CommonsAnnouncement"; 
import {Container, CardGroup} from "react-bootstrap"; 
import ManageCows from "main/components/Commons/ManageCows";
import FarmStatus from "main/components/Commons/FarmStatus"; 
import Profits from "main/components/Commons/Profits"; 

export default function PlayPage() {
    let { _commonsId } = useParams();
    const commons = {}; //TODO: look up the commons using its commonsId 
    const { data: currentUser } = useCurrentUser(); 
  return (
    <BasicLayout >
      <Container >
        <CommonsPlay commons = {commons} currentUser = {currentUser}/>
        <CommonsAnnouncement />
        <br />
        <CardGroup>
          <ManageCows /> 
          <FarmStatus /> 
          <Profits /> 
        </CardGroup>
      </Container>  
    </BasicLayout>
  )
}