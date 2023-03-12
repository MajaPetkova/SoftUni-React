import "./App.css" ;

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import { UserList } from "./user-list/UserList";




function App() {
    
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <main className="main">
        <section className="card users-container">
         <Search/>
         <UserList/>
        </section>
        </main>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
