import React, {useState, useEffect, useRef} from 'react';

const Typing = (txt, delay) => {
  const useSetInterval = (callback, delay) => {
    const [state, setState] = useState(0);
    const savedCallback = useRef();
    const Delay = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      Delay.current = delay;
    }, [delay]);

    useEffect(() => {
      function inc() {
        setState((c) => c + 1);
        console.log(state); // Testing if there is any unnecessary renders.
      }
      function tick() {
        savedCallback.current();
        inc();
      }

      if (state === txt.length) {
        Delay.current = null;
      }

      if (Delay.current !== null) {
        let id = setInterval(tick, Delay.current);

        return () => clearTimeout(id);
      }
    }, [state]);
  };

  const [seconds, setSeconds] = React.useState(0);
  const [text, setText] = useState('');

  useSetInterval(() => {
    setSeconds(seconds + 1);
  }, delay);
  useEffect(() => {
    setText(txt.substring(0, seconds));
  }, [seconds, txt]);

  return text;
};

export default Typing;
