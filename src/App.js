import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
   const [users, setUsers] = useState([]);
   console.log(users);

   //reading data from firestore collection
   const usersCollectionRef = collection(db, "users");

   useEffect(() => {
      const getUsers = async () => {
         const data = await getDocs(usersCollectionRef);
         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
   }, []);

   return (
      <div className="App">
         {users.map((user) => {
            return (
               <div>
                  {" "}
                  <h1> Name: {user.name} </h1>{" "}
                  <h2> Age: {user.age} </h2>{" "}
                  <h3> Role: {user.role} </h3>{" "}
               </div>
            );
         })}
      </div>
   );
}

export default App;
