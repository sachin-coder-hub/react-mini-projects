import { useRef, useState } from "react";
import useOutsideClickHook from "./test";

export default function UseOutsideClick() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClickHook(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>If you want me to disappear click outside of my scope</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
