import { useState } from "react";
import data from "./data";
import styles from "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, SetMultiple] = useState([]);
  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };
  const handleMultiSelection = (currentId) => {
    let copies = [...multiple];
    let indexOfCurrentId = copies.indexOf(currentId);
    if (indexOfCurrentId === -1) copies.push(currentId);
    else copies.splice(indexOfCurrentId, 1);

    SetMultiple(copies);
  };
  return (
    <div className="wrapper">
      <button
        className="multiselection"
        onClick={() => setEnableMulti(!enableMulti)}
      >
        {enableMulti ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={() =>
                  enableMulti
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMulti
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                : selected === dataItem.id && <div>{dataItem.answer}</div>}
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
}
