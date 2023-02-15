import "../css/App.css";
import Header from "./Header";
import Card from "./Card";
import items from "../meta.json";
import { useState } from "react";

const App = () => {
  const [filteredItem, setFilteredItem] = useState(items);
  function applyFilter(filter) {
    const filteredItems = items.filter(item => (
      item.type === filter
    ));
    setFilteredItem(filteredItems);
  }

  function showAllItems() {
    if (items !== filteredItem)
      setFilteredItem(items);
  }

  return (
    <div id="App">
      <Header applyFilter={applyFilter} logoClick={showAllItems} />
      <div className="card-container">
        {filteredItem.map((item) => (
          <Card desc={item.description} key={item.id} link={item.link} git={item.git} />
        ))}
      </div>
    </div>
  );
};

export default App;
