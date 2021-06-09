import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import React from "react"; 
import { useCurrentUser} from "main/utils/currentUser";
import CommonsPlay from "main/components/Commons/CommonsPlay";
import {useParams} from "react-router-dom"; 
import CommonsOverview from "main/components/Commons/CommonsOverview"; 
import {Container, CardGroup} from "react-bootstrap"; 
import ManageCows from "main/components/Commons/ManageCows";
import FarmStats from "main/components/Commons/FarmStats"; 
import Profits from "main/components/Commons/Profits"; 
import commonsFixtures from "fixtures/commonsFixtures"; 


export default function PlayPage() {
    let { _commonsId } = useParams();
    const commons = {}; //TODO: look up the commons using its commonsId 
    const { data: currentUser } = useCurrentUser(); 
    // const day = commonsFixtures.oneCommons[0].day
    // const endDate = commonsFixtures.oneCommons[0].endDate
    // const totalPlayers = commonsFixtures.oneCommons[0].totalPlayers

  return (
    <BasicLayout >
      <Container >
        <CommonsPlay commons = {commons} currentUser = {currentUser}/>
      {/* add parameters for CommonsOverView, ManageCows, FarmStatus, Profits */}
        {/* <CommonsOverview day = {day} endDate = {endDate} totalPlayers = {totalPlayers}/> */}
        {/* day = {day} endDate = {endDate} totalPlayers = {totalPlayers}  */}
        {/* testCommon = {commonsFixtures} */}
        <CommonsOverview testCommon = {commonsFixtures} />
        <br />
        <CardGroup >
          <ManageCows testCommon = {commonsFixtures}/> 
          <FarmStats testCommon = {commonsFixtures}/> 
          <Profits /> 
        </CardGroup>
      </Container>  
    </BasicLayout>
  )
}