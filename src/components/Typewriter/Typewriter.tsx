import { useState, useEffect } from "react";
import { TypewriterProps } from "../../interfaces/TypewriterProps";

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  triggerTyping,
  onTypingEnd,
  speed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const resetTypewriter = () => {
    setDisplayedText("");
    setCurrentIndex(0);
  };

  useEffect(() => {
    if (triggerTyping) {
      // Add a delay before typing starts (e.g., 2000 milliseconds or 2 seconds)
      const typingInterval = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }, speed); // Adjust the typing speed as needed

      return () => clearTimeout(typingInterval);
    } else {
      resetTypewriter();
    }
  }, [text, currentIndex, triggerTyping, onTypingEnd, speed]);

  return <span>{displayedText}</span>;
};