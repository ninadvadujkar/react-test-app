import { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './Counter';

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [addr, setAddr] = useState<string>('');

  useEffect(() => {
    console.log('.,.,....');
    setName(`Ninad-${counter}`);
  }, [counter, setName]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     alert('HHHHH');
  //   }, 1000);
  // }, [name]);

  const onClick = () => {
    setCounter((prev) => {
      console.log('prev', prev);
      return prev + 1;
    });
  };

  const onSet = () => {
    setCounter(100);
  };

  return (<>
    Current count: {counter}
    <Counter counter={counter} onClick={onClick} onSet={onSet}>
      <strong>Hoi!!!</strong>
    </Counter>
    {name}
  </>);
}

export default App;
