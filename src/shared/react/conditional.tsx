import { type ReactElement } from "react";

interface ConditionalProps {
  if: boolean;
  children?: ReactElement<any, any>;
  then?: ReactElement<any, any>;
  otherwise?: ReactElement<any, any>;
}

function Conditional(props: ConditionalProps) {
  if (props.if) {
    return props.then ?? props.children ?? null;
  }

  return props.otherwise ?? null;
}

export { Conditional, Conditional as default };
