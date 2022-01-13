import { ReactNode } from "react";

export interface LoadingProps {
  message?: ReactNode;
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <div className="relative mx-auto my-24">
      <div className="w-16 h-16 rounded-full mx-auto border-8 border-gray-100 border-l-green-600 animate-spin" />
      <div className="text-center text-green-600 mt-4">{message}</div>
    </div>
  );
};

export default Loading;
