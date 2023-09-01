export interface TypewriterProps {
  text: string;
  triggerTyping: boolean;
  onTypingEnd?: () => void;
  speed?: number;
}