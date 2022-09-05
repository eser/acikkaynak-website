import React from "react";

interface ConditionalProps {
  if: boolean;
  children?: React.ReactNode;
  then?: React.ReactNode;
  otherwise?: React.ReactNode;
}

const Conditional = function Conditional(
  props: ConditionalProps,
): JSX.Element {
  let result;

  if (props.if) {
    result = props.then ?? props.children;
  } else {
    result = props.otherwise;
  }

  if (result === null || result === undefined) {
    return null;
  }

  return <>{result}</>;
};

export { Conditional, Conditional as default };
