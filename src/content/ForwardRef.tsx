import { forwardRef, HTMLAttributes, ReactNode, useRef, useState } from "react";

const ForwardRef = () => {
  const reference = useRef<HTMLButtonElement>(null);

  console.log(reference);
  return (
    <div>
      <FancyButton type="submit" ref={reference}>
        Button fancy
      </FancyButton>
    </div>
  );
};

//Component fancy button

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type: "submit" | "button";
}

const FancyButton = forwardRef<HTMLButtonElement, IProps>((props, ref) => (
  <button ref={ref} className="MyClassName" {...props}>
    {props.children}
  </button>
));

export default ForwardRef;
