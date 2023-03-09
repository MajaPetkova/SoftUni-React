import { Header } from "./components/common/Header";
import "./App.css" ;
import { Footer } from "./components/common/Footer";
import { Search } from "./search/Search";
import { UserSection } from "./user-section/UserSection";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <main className="main">
        <section className="card users-container">
         <Search/>
         <UserSection/>
        </section>
        </main>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
