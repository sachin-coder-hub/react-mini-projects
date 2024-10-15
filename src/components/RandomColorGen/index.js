import { useEffect, useState } from "react";

export default function RandomColorGen() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const generateRandomColorHex = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(color);
    setColor(hexColor);
  };
  const generateRandomColorRgb = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    console.log(color);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") generateRandomColorRgb();
    else generateRandomColorHex();
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{ width: "100vw", height: "100vh", backgroundColor: color }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? generateRandomColorHex
            : generateRandomColorRgb
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
