import { cva } from "class-variance-authority";
import React, { PropsWithChildren } from "react";

interface ChipProps {
  size: "sm" | "md" | "lg";
  color: "red" | "blue" | "yellow";
}

// 인자로 base와 바뀔값이 들어감
const chipVariant = cva("text-white rounded-xl", {
  variants: {
    size: {
      sm: "text-xs px-1.5 py-0.5",
      md: "text-sm px-2.5 py-1.5",
      lg: "text-base px-4 py-2",
    },
    color: {
      red: "bg-red-500 ",
      blue: "bg-blue-500 ",
      yellow: "bg-yellow-500 ",
    },
  },
});

function Chip({ children, size, color }: PropsWithChildren<ChipProps>) {
  return <span className={chipVariant({ size, color })}>{children}</span>;
}

export default Chip;
