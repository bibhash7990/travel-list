import { useState } from "react";

export default function Accordian({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordian">
      {data.map((el, i) => (
        <AccordianItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordianItem>
      ))}

      <AccordianItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
      </AccordianItem>
    </div>
  );
}

function AccordianItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
