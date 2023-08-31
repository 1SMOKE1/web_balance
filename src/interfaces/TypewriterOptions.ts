export interface TypewriterOptions {
  initialDelay?: number;
  typingSpeed?: number;
  text?: string;
  onTypingEnd?: () => void;
}