import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="text-primary flex items-center justify-center space-x-2 text-xl">
      <Loader2 className="size-12 animate-spin" />
      <span className="text-nowrap">Please wait a moment...</span>
    </div>
  );
};

export default Loading;
