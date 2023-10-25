import React from "react";
import { useState } from "react";

function Text() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Metindeki karakter sayısını döndürmeyi sağlayan fonksiyon
  const charCount = text.length;

  //Metnin sıfırlanmasını sağlayan method
  const resetText = () =>{
    setText("");
  };

  // Metnin hafrlerinin büyük küçük durumunu değiştiren method
  const toggleCase = () => {
    const updatedText =
      text === text.toLowerCase() ? text.toUpperCase() : text.toLowerCase();
    setText(updatedText);
  };

  //Metni tersten yazdıran method
  const reverseText = () => {
    setText(text.split("").reverse().join(""));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Metin: {text}</p>
      <p>Karekter Sayısı: {charCount}</p>
      <button onClick={resetText}>Metni Sıfırla</button>
      <button onClick={toggleCase}>Karakter büyült/küçült</button>
      <button onClick={reverseText}>Metni terse çevir</button>
    </div>
  );
}

export default Text;
