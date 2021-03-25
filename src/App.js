import React, { useState } from "react";
import InnerDiv from "./InnerDiv";
import "./style.css";

export default function App() {
  let [clicked, setClicked] = useState(false);
  const [target, setTarget] = useState();
  const performSplit = e => {
    if (e.target.id === "one") {
      setClicked(true);
      setTarget("one");
    }
    if (e.target.id === "two") {
      setClicked(true);
      setTarget("two");
    }
    if (e.target.id === "three") {
      setClicked(true);
      setTarget("three");
    }
    if (e.target.id === "four") {
      setClicked(true);
      setTarget("four");
    }
  };
  return (
    <div className="rectangle__container">
      <div
        id="one"
        onClick={performSplit}
        className={
          clicked && target === "one" ? "divStyle innerdiv" : "innerdiv"
        }
      >
        {clicked && target === "one" ? <InnerDiv /> : ""}
      </div>
      <div
        id="two"
        onClick={performSplit}
        className={
          clicked && target === "two" ? "divStyle innerdiv" : "innerdiv"
        }
      >
        {clicked && target === "two" ? <InnerDiv /> : ""}
      </div>
      <div
        id="three"
        onClick={performSplit}
        className={
          clicked && target === "three" ? "divStyle innerdiv" : "innerdiv"
        }
      >
        {clicked && target === "three" ? <InnerDiv /> : ""}
      </div>
      <div
        id="four"
        onClick={performSplit}
        className={
          clicked && target === "four" ? "divStyle innerdiv" : "innerdiv"
        }
      >
        {clicked && target === "four" ? <InnerDiv /> : ""}
      </div>
    </div>
  );
}
