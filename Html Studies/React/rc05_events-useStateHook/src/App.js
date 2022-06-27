import Event from "./components/1-event-intro/Event";
import Counter from "./components/2-classCompanents/Counter";

function App() {
  return (
    <div>
      <Event/>
      <Counter count={10}/>
      <Counter/>
    </div>
  );
}

export default App;
