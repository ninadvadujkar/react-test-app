import { CounterProps, RealCounter } from "./RealCounter";

type Props = CounterProps;

export const Counter: React.FC<Props> = ({ children, ...rest }) => {
  return (<RealCounter {...rest}>{children}</RealCounter>);
};
