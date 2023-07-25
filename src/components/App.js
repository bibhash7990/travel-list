import Logo from "./logo";
import Form from "./form";
import { useState } from "react";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Accordian from "./Accordian";
import Tipcalculator from "./tipcalculator";

const faqs = [
  {
    title: "Where are these chairs assembled",
    text: "the chair are assembled in the roof of the window. ",
  },
  {
    title: "Where are these chairs assembled",
    text: "the chair are assembled in the roof of the window. ",
  },
  {
    title: "Where are these chairs assembled",
    text: "the chair are assembled in the roof of the window. ",
  },
];

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItems={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
      <Accordian data={faqs} />
      <Tipcalculator />
    </>
  );
}
