import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function App() {
   const [newName, setNewName] = useState("");

   const [newAge, setNewAge] = useState(0);

   const [newRole, setNewRole] = useState("");

   console.log("new name", newName);
   console.log("new age", newAge);

   const [users, setUsers] = useState([]);
   console.log(users);

   // data from firestore collection
   const usersCollectionRef = collection(db, "users");

   //create users
   const createUser = async () => {
      await addDoc(usersCollectionRef, { name: newName, age: newAge, role: newRole });
      
   };

   useEffect(() => {
      const getUsers = async () => {
         const data = await getDocs(usersCollectionRef);
         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
   }, []);

   return (
      <div className="App">
         <input
            onChange={(event) => {
               setNewName(event.target.value);
            }}
            placeholder="name"
            type="text"
         />
         <br />

         <input
            onChange={(event) => {
               setNewAge(event.target.value);
            }}
            placeholder="age"
            type="number"
         />
         <br />
         <input
            onChange={(event) => {
               setNewRole(event.target.value);
            }}
            placeholder="role"
            type="text"
         />
         <br />
         <button onClick={createUser}> Create User </button>
         {users?.map((user) => {
            return (
               <div>
                  {" "}
                  <h1> Name: {user?.name} </h1>
                  <h2> Age: {user?.age} </h2> <h3> Role: {user?.role} </h3>{" "}
               </div>
            );
         })}
      </div>
   );
}

export default App;
