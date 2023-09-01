import { useState, useEffect, useRef } from "react";
import { TypewriterProps } from "../../interfaces/TypewriterProps";

export const Typewriter: React.FC<TypewriterProps> = ({ text, triggerTyping, onTypingEnd  }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const resetTypewriter = () => {
    setDisplayedText("");
    setCurrentIndex(0);

  };

  useEffect(() => {
 
   
    if (triggerTyping) {
      const typingInterval = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } 

      }, 100); // Adjust the typing speed as needed

      return () => clearTimeout(typingInterval)
    } else {
      resetTypewriter()
    }
  }, [text, currentIndex, triggerTyping, onTypingEnd]);

  

  return <span>{displayedText}</span>;
};