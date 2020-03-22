import React from "react";
import { useState, useEffect } from "react";

const Timers = {
  DELETING_SPEED: 200,
  TYPING_SPEED: 250
};

const getCurrentText = currentState => {
  return currentState.isDeleting
    ? currentState.message.substring(0, currentState.text.length - 1)
    : currentState.message.substring(0, currentState.text.length + 1);
};

const getMessage = (currentState, data) => {
  return data[Number(currentState.loopNum) % Number(data.length)];
};

const getTypingSpeed = currentState => {
  return currentState.isDeleting ? Timers.TYPING_SPEED : Timers.DELETING_SPEED;
};

export const Typewrite = ({ messages, heading }) => {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: Timers.TYPING_SPEED
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs)
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting, state.typingSpeed]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState(cs => ({
          ...cs,
          isDeleting: true
        }));
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState(cs => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages)
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  return (
    <>
      <span>
        {" "}
        <strong>{state.text}</strong>
      </span>
      <span id="cursor" />
    </>
  );
};
