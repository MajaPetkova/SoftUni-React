import "./App.css" ;

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import { UserList } from "./user-list/UserList";
import { UserProvider } from "./context/UserContext";




function App() {
    
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <UserProvider>
        <main className="main">
        <section className="card users-container">
         <Search/>
         <UserList/>
        </section>
        </main>
        </UserProvider>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
