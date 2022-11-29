import DisplayCounter from "./components/DisplayCounter";
import AddSubtractCounter from "./components/AddSubtractCounter";
import IncrementDecrementCounter from "./components/IncrementDecrementCounter";

function App(props) {
  return (
    <>
    <AddSubtractCounter />
    <DisplayCounter />
    <IncrementDecrementCounter />
    </>
  );
}

export default App