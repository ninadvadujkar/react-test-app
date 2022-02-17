import { useEffect } from "react";

export interface CounterProps {
  counter: number;
  onClick: () => void;
  onSet: () => void;
  children: React.ReactNode;
}

export const RealCounter: React.FC<CounterProps> = ({ counter, children, onClick, onSet }) => {

  useEffect(() => {
    console.log('log....from real');
  }, [counter]);

  return (<>
    <h1>{children}</h1>
    <h2>{counter}</h2>
    <button onClick={onClick}>Increment</button>
    <button onClick={onSet}>Set</button>
  </>);
}