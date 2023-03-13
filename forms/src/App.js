import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    age: "",
    bio: "",
    gender: "f",
    userType: "individual",
    tac: true,
  });
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [age, setAge] = useState("");
  //   const [bio, setBio] = useState("");
  //  const [gender, setGender] = useState("f");
  //  const [userType, setUserType] = useState("corporate");
  //  const [tac, setUserTac] = useState(false);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  
  const checkboxChangeHandler = (e) => {
    setValues((state) => ({
        ...state,
        [e.target.name]:!state[e.target.name] ,
      }));
  };

  //   const onChangeHandler = (e) => {
  //     setUsername(e.target.value);
  //   };
  const submitHandler = (e) => {
    e.preventDefault();
    let values = Object.fromEntries(new FormData(e.target));
    console.log(values);
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
              onChange={changeHandler}
              value={values.username}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              name="age"
              value={values.age}
              onChange={changeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="bio">Bio: </label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="7"
              value={values.bio}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender: </label>
            <select
              id="gender"
              name="gender"
              value={values.gender}
              onChange={changeHandler}
            >
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="individual-user-type">Individual</label>
            <input
              onChange={changeHandler}
              checked={values.userType == "individual"}
              type="radio"
              id="individual-user-type"
              name="userType"
              value="individual"
            />
            <label htmlFor="corporate-user-type">Corporate</label>
            <input
              onChange={changeHandler}
              checked={values.userType == "corporate"}
              type="radio"
              id="corporate-user-type"
              name="userType"
              value="corporate"
            />
          </div>
          <div>
            <label htmlFor="tac">Terms and Conditions: </label>
            <input
              type="checkbox"
              id="tac"
              name="tac"
              checked={values.tac}
              onChange={checkboxChangeHandler}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </header>
    </div>
  );
}

export default App;
