import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import React from "react"; 
import { useCurrentUser} from "main/utils/currentUser";
import CommonsPlay from "main/components/Commons/CommonsPlay";
import {useParams} from "react-router-dom"; 

export default function PlayPage() {
    let { _commonsId } = useParams();
    const commons = {}; //TODO: look up the commons using its commonsId 
    const { data: currentUser } = useCurrentUser(); 
  return (
    <BasicLayout>
        <CommonsPlay commons = {commons} currentUser = {currentUser}/>
    </BasicLayout>
  )
}