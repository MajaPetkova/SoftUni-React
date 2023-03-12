import "./App.css";

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    console.log(username, password);
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username"></input>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"></input>
          </div>
          <input type="submit" value="Login" />
        </form>
      </header>
    </div>
  );
}

export default App;
