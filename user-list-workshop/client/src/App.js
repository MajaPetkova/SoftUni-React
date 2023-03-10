import { useEffect, useState } from "react";
import * as userService from "./services/userService"
import "./App.css" ;

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import { UserList } from "./user-list/UserList";




function App() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll()
        .then (users => setUsers(users))
    }, [])
 
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
