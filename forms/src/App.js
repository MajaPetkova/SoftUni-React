import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("f");
  const [userType, setUserType] = useState("");
  const [tac, setUserTac] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    let values= Object.fromEntries(new FormData(e.target))
    console.log(values)
  };

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={onChangeHandler}
              value={username}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" value={password} onChange ={(e)=>setPassword(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input type="number" id="age" name="age" value={age} onChange ={(e)=>setAge(Number(e.target.value))}></input>
          </div>
          <div>
            <label htmlFor="bio">Bio: </label>
            <textarea name="bio" id="bio" cols="30" rows="7" value={bio} onChange ={(e)=>setBio(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="gender">Gender: </label>
            <select id="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} >
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
                   <div>
            <label htmlFor="individual-user-type">Individual</label>
            <input
              type="radio"
              id="userType"
              name="individual"
              value="individual"
            />
            <label htmlFor="corporate-user-type">Corporate</label>
            <input
              type="radio"
              id="userType"
              name="corporate"
              value="corporate"
            />
          </div>
          <div>
            <label htmlFor="tac">Terms and Conditions: </label>
            <input type="checkbox" id="tac" name="tac" />
          </div>
          <input type="submit" value="Login" />
        </form>
      </header>
    </div>
  );
}

export default App;
