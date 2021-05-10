import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import CommonsList from "main/components/Commons/CommonsList";

const commonList = [
  {
    id: 5,
    name: 'Seths Common'
  },
  {
    id: 4,
    name: 'Phils Common'
  },
  {
    id: 18,
    name: 'Kevins Common'
  },
]
const onButtonClick = ()=> {console.log("clicked")};

export default function HomePage() {
  return (
    <BasicLayout>
      <div className="pt-2" style={{backgroundColor:"lightBlue"}}>
        <h1>Hello, world!</h1>
        <p>
          This is a webapp containing a bunch of different Spring Boot/React examples.
        </p>
        <div style={{width:"auto", display:"inline-flex", flexDirection:"row"}}>
          <CommonsList commonList={commonList} buttonText={"Visit"} buttonLink={onButtonClick}/>
          <CommonsList commonList={commonList} buttonText={"Join"} buttonLink={onButtonClick}/>
        </div>
      </div>
    </BasicLayout>
  )
}