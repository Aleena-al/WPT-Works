import { useState } from "react";

function App() {
  return (
    <div>
      <img src="https://picsum.photos/id/237/200/300" alt="imagedemoo" />
      <EventDemo />
      <Decrement />
    </div>
  );
}
function EventDemo() {
  let [counter, setCounter] = useState(100);
  let likeMe = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span>
            <h1>{counter}</h1>
            <input type="button" value="Like" onClick={likeMe} />
          </span>
        </div>
      </div>
    </div>
  );
}
function Decrement() {
  let [counter, setCounter] = useState(0);
  let UnlikeMe = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  return (
    <div className="container">
      <div className="display-flex justify-content-center">
        <span>
          <h1>{counter}</h1>
          <input type="button" value="Dislike" onClick={UnlikeMe} />
        </span>
      </div>
    </div>
  );
}

export default App;
