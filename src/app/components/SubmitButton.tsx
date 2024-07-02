import { Button } from "@/components/ui/button";
import clsx from "clsx";

const SubmitButton = ({ label, loading }: { label: string, loading: Boolean }) => {

  const className = clsx("w-full bg-[#e50914]", {
    "opacity-50 cursor-progress": loading,
  });

  return (
    <Button variant="destructive" className={className} type="submit">
      {loading ? "Loading..." : label}
    </Button>
  );
};

export default SubmitButton;
