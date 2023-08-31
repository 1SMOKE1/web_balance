import { useEffect, useState } from "react";
import { TypewriterOptions } from "../interfaces/TypewriterOptions";
import { TypewriterHook } from "../interfaces/TypewriterHook";

export function UseTypewriter({ initialDelay = 0, typingSpeed = 50, text = '', onTypingEnd }: TypewriterOptions): TypewriterHook {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    if (isTyping && currentIndex < text.length) {
      typingTimeout = setTimeout(() => {
        setTypedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
    } else {
      if (onTypingEnd) {
        onTypingEnd();
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, text, typingSpeed, isTyping, onTypingEnd]);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setIsTyping(true);
    }, initialDelay);

    return () => clearTimeout(initialTimeout);
  }, [initialDelay]);

  function startTyping() {
    setIsTyping(true);
  }

  return { typedText, startTyping };
}