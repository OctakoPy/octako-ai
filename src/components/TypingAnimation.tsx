import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypingAnimation = ({
  text,
  speed = 50,
  className = "",
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    } else if (displayedText.length === text.length) {
      setIsComplete(true);
    }
  }, [displayedText, text, speed]);

  return (
    <h1 className={className}>
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse">|</span>
      )}
    </h1>
  );
};
