import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleClearList() {
    const confirm = window.confirm("Are you sure you want delete this items?");
    if (confirm) setItems([]);
  }
  function handleToggleItem(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      })
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
