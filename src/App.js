import './App.css';
import { Adress } from './Profile/Adress';
import { FullName } from './Profile/FullName';
import { Infor } from './Profile/Infor';
import { ProfilePic } from './Profile/PhotoProfile';

function App() {
  function HandleName(){
    alert("Hello !!!!!!!")
  }
  return (
    <div className="App">
      <FullName></FullName>
      <ProfilePic  src = "pic2.jpg" alt = "Oleudeniz Parachute"/>
      <Adress> </Adress>
      <Infor bio={"Seeking a job as a fullstack"} HandleName={HandleName} age="hzl"><img src = "pic2.jpg" alt="My picture" /> </Infor>
    </div>
  );
}

export default App;
