import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGen() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const genreateQr = () => {
    setQrCode(input);
  };

  return (
    <div>
      <h1>QR code genrator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button onClick={genreateQr}>Generate Code Here</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
}
