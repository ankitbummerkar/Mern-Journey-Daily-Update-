// useMemo

const a = useMemo(() => {}, []);

const App = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("calculating...");
    return 100000 * 10000;
  }, []);

  return (
    <>
      <div>{expensiveCalculation}</div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> click me</button>
    </>
  );
};

// useCallback
const b = useCallback(() => {}, []);

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("button is clicked");
  }, []);

  return (
    <>
      <button onClick={handleClick}>click me!</button>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

// useReducer

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
};

// useLayoutEffect

const App = () => {
  const box = useRef();

  useLayoutEffect(() => {
    const a = box.current.getBoundingClientRect();
    console.log(a);
  }, []);

  return (
    <>
      <div ref={box}> hello, locate my position</div>
    </>
  );
};

// custom hooks

const useSomethig = () => {
  return "something";
};

// example of custom hook

// useCounter.js
const useCounter = (intialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    settCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

//App.jsx

const App = () => {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

// pagination
