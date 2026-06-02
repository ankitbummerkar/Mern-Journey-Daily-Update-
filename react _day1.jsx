// basic jsx syntx
const app = () => {
  return (
    <>
      <h1>hello world</h1>
    </>
  );
};

// if else
const app = () => {
  const a = 10;
  let b = "good morning";
  if (a > 5) {
    b = "good evening";
  }
  return (
    <>
      <h1>{b}</h1>
    </>
  );
};

// ternary operator
const app = () => {
  const a = 10;
  return (
    <>
      <h1>{a > 5 ? "Good morning" : "Good evening"}</h1>
    </>
  );
};

// react components

const Car = () => {
  return <div>hello world</div>;
};
const App = () => {
  return (
    <>
      <Car />
    </>
  );
};

// props
const student = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

// destructuring props
const student = ({ name, age }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
    </>
  );
};

// list rendering
const app = () => {
  const students = [
    { id: 1, name: "john", age: 20 },
    { id: 2, name: "doe", age: 22 },
  ];

  return (
    <>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} and {student.age}
          </li>
        ))}
      </ul>
    </>
  );
};

//  form handling

import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // handle input change

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>username</label>
        <input
          type="text"
          name="username"
          placeholder="enter username"
          value={formData.username}
          onChange={handleChange}
        ></input>
      </div>

      <button type="submit"></button>
    </form>
  );
};

// All hooks

// useState hook

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

// useEffect hook

const App = () => {
  useEffect(() => {}, []);

  return <h1>hello</h1>;
};

// ref

const App = () => {
  const inputRef = useRef();

  return (
    <>
      <h2>click the button</h2>
      <input type="text" ref={inputRef} />

      <button onClick={() => inputRef.current.focus()}> click me</button>
    </>
  );
};

// useContext

const Usercontext = createContext();

const Child = () => {
  const user = useContext(Usercontext);
  return <h1>{user}</h1>;
};

const App = () => {
  return (
    <Usercontext.Provider value="ankit">
      <Child />
    </Usercontext.Provider>
  );
};
