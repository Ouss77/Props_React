import './App.css';
import {MyFunctionComponent} from './HooksFunc';
import  Adress  from './Profile/Adress';
import { FullName } from './Profile/FullName';
import { Infor } from './Profile/Infor';
import { ProfilePic } from './Profile/PhotoProfile';
import MyComponent from './Profile/TimeInterval';

function App() {
  function HandleName(){
    alert("Hello !!!!!!!")
  }
  return (
    <div className="App">
      <FullName></FullName>
      <ProfilePic  src = "pic2.jpg" alt = "Oleudeniz Parachute"/>
      <Adress />
      {/* <Infor bio={"Seeking a job as a fullstack"} HandleName={HandleName} age="hzl"><img src = "pic2.jpg" alt="My picture" /> </Infor> */}
      <MyFunctionComponent /> 
      <MyComponent/>
    </div>
  );
}

export default App;
