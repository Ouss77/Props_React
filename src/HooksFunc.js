import {useState} from "react"
export const  MyFunctionComponent = () => {
    // setting the state hooks
    const [name, setName] = useState("Arya Stark");
    return (
      <div>
        <p>hello my name is {name}</p>
        <button onClick={()=>setName("Oussma")}>Check the difference</button>
      </div>
    );
   };