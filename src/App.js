import "./App.css";
import { useState } from "react";
import Title from "./components/Title";

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState(
    { title: "THOR : love and thunder ", id: 1 },
    { title: "THOR : Books and Pens ", id: 2 },
    { title: "THOR : Home and Car ", id: 3 },
    { title: "THOR : Mobile and Tablets ", id: 4 },
    { title: "THOR : Iran and America ", id: 1 }
  );

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  return (
    <div className="App">
      <Title />;
      {showEvents && (
        <div>
          <button onClick={() => setEvents(false)}>Hide</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setEvents(true)}>Show</button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => {
          <div key={event.id}>
            <h2>
              {index + 1} - {event.title}
            </h2>
            <button
              onClick={() => {
                handleClick(event.id);
              }}
            >
              Delete
            </button>
          </div>;
        })}
    </div>
  );
}

export default App;
