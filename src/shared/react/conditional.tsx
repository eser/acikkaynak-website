import { type ReactNode } from "react";

interface ConditionalProps {
  if: boolean;
  children?: ReactNode;
  then?: ReactNode;
  otherwise?: ReactNode;
}

function Conditional(props: ConditionalProps) {
  if (props.if) {
    return props.then ?? props.children ?? null;
  }

  return props.otherwise ?? null;
}

export { Conditional, Conditional as default };
