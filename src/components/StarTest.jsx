import React, { useState } from "react";
import { Rating } from "./Rating.jsx";

function StarTest() {
  const [, setRating1] = useState(0);
  const [, setRating2] = useState(0);
  const [, setRating3] = useState(0);
  const [, setRating4] = useState(0);
  const [, setRating5] = useState(0);
  const [rating6, setRating6] = useState(0);
  const [, setRating7] = useState(0);
  const [, setRating8] = useState(0);
  const [, setRating9] = useState(0);
  const [, setRating10] = useState(0);
  const [, setRating11] = useState(0);
  const [, setRating12] = useState(0);

  const handleRating2 = (rate) => setRating2(rate);

  return (
    <main className="flex-shrink-0">
      <Rating onClick={handleRating2} transition size={50} />
    </main>
  );
}

export default StarTest;
