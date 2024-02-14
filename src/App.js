import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Timer from "./components/Timer/Timer";


const App = () => {

  const [time, setTime] = useState(0);

  const [timer, setTimer] = useState('');

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);

  const start = e => {
    e.preventDefault();
    console.log('start');
    setTimer( setInterval( () => {
      setTime( prevValue => prevValue + 1);
    },1));
  };

  const stop = e => {
    e.preventDefault();
    console.log('stop');
    clearInterval(timer);
  };

  const reset = e => {
    e.preventDefault();
    console.log('reset');
    clearInterval(timer);
    setTime(0);
  };

 

  return (
    <Container>
      <Timer time={time}/>
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </Container>
  );
};

export default App;
