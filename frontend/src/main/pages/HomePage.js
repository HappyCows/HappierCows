import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import HomePageCommonsView from "main/components/Commons/HomePageCommonsView"
import commonsFixtures from "fixtures/commonsFixtures";


export default function HomePage() {

  const commonsJoined = commonsFixtures.threeCommons; // TODO Get from backedn
  const commonsNotJoined = commonsFixtures.threeCommons; // TODO Get from backedn

  return (
    <BasicLayout>
      
      <div className="pt-2" style={{backgroundColor:"lightBlue"}}>
        <h1>Hello, world!</h1>
        <p>
          This is a webapp containing a bunch of different Spring Boot/React examples.
        </p>
        <HomePageCommonsView
          commonsJoined = {commonsJoined}
          commonsNotJoined = {commonsNotJoined}
        />
      </div>
    </BasicLayout>
  )
}