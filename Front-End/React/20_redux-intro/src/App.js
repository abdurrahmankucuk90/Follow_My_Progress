import "./App.css";
import Counter from "./components/counter/Counter";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import { getStore } from "./redux";
import Todo from "./components/todo/Todo";
// import reducer from "./redux";


function App() {
  // const store = createStore(reducer)
  const store = getStore()
  return (
    <div className="App">
      <Provider store={store} >
        {/* <Counter /> */}
        <Todo/>
      </Provider>
    </div>
  );
}

export default App;
