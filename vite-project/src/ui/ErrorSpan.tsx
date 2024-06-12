interface IProps {
  text: string;
}

const ErrorSpan = ({ text }: IProps) => {
  return <span className="text-red-500">{text}</span>;
};

export default ErrorSpan;
