import { useState } from "react";

const AddUsers = ({setUsers , users} ) => {
  
  let [name, setName] = useState("");
  let [skill, setSkill] = useState("");
  let [email, setEmail] = useState("");

  const addUserData = () => {
    const newUsers ={
        id: Date.now().toString(),
        name: name,
        skill: skill,
        email: email
    }
    setUsers([...users,newUsers]);
    setName("");
    setSkill("");
    setEmail(""); 
  };

  return (
    <div className="box box--m">
      <div className="formFields">
        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>{
            setName(e.target.value);
        }} required />
        <input type="text" placeholder="Enter Your Skill" value={skill} onChange={(e)=>{
            setSkill(e.target.value);
        }} required />
        <input type="text" placeholder="Enter Your Email" value={email} onChange={(e)=>{
            setEmail(e.target.value);
        }} required />
        <button onClick={addUserData}>Add User</button>
      </div>
    </div>
  );
};

export default AddUsers;
