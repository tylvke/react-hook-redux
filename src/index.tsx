import React, { useContext } from "react";
import { render } from "react-dom";
import useRedux, { Provider, Context } from "@/hooks/useRedux";
import models from "@/store";

const Home = () => {
  const {
    counter: { count },
    todos: { undo }
  } = useContext(Context);
  return (
    <div>
      <h1>counter:{count}</h1>
      <h2>undo:{undo}</h2>
    </div>
  );
};

const About = () => {
  const {
    counter: { count, loading },
    todos:{undo},
    dispatch
  } = useContext(Context);
  const handleAddCount = () => {
    dispatch({
      type: "counter/add",
      payload: count + 1
    });
  };

  const handleAddUndo = () => {
    dispatch({
      type: "todos/add",
      payload: undo + 1
    });
  };

  return (
    <div>
      <button onClick={handleAddCount}>{loading ? "请稍等..." : "增加count"}</button><br />
      <button onClick={handleAddUndo}>增加undo</button>
    </div>
  );
};

const App = (props: any) => {
  const [store, dispatch] = useRedux(models);

  return (
    <Provider
      store={{
        ...store,
        dispatch
      }}
    >
      {props.children}
    </Provider>
  );
};
render(
  <App>
    <Home />
    <About />
  </App>,
  document.getElementById("app")
);
