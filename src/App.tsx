import { useDispatch, useSelector } from "react-redux";
import { addCounter, setStep } from "./modules/counter";

function App() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const step = Number(e.target.value);
    dispatch(setStep(step));
  };

  return (
    <>
      <input type="number" value={state.step} onChange={handleChange} />
      <p>{state.count}</p>
      <button onClick={() => dispatch(addCounter())}>Add</button>
    </>
  );
}

export default App;
