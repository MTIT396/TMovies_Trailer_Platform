import { Loader2 } from "lucide-react";
import Logo from "../common/Logo";

const Loading = () => {
  return (
    <div className="text-sub-primary flex items-center justify-center space-x-2 text-xl">
      <Loader2 className="size-10 animate-spin" />
      <Logo />
    </div>
  );
};

export default Loading;
