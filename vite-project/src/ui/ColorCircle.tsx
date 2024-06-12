import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const ColorCircle = ({ color, ...rest }: IProps) => {
  return (
    <span
      className={`w-5 h-5 rounded-full cursor-pointer`}
      style={{
        backgroundColor: color,
      }}
      key={color}
      {...rest}
    />
  );
};

export default ColorCircle;
