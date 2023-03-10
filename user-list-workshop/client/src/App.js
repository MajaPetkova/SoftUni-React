import { useEffect, useState } from "react";
import "./App.css" ;
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./search/Search";
import { UserList } from "./user-list/UserList";

const baseUrl= "http://localhost:3005/api";
function App() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
       fetch(`${baseUrl}/users`)
       .then(res =>res.json())
       .then(data => setUsers(data.users))
    }, [])
    console.log(users)
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <main className="main">
        <section className="card users-container">
         <Search/>
         <UserList users={users}/>
        </section>
        </main>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
