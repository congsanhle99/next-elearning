"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

interface HandleClickProps {
  mode: boolean;
}

export default function Home() {
  const handleClick = ({ mode }: HandleClickProps): void => {
    mode ? toast.success("This is a success message!") : toast.error("This is an error message!");
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button
        className="bg-blue-500 text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        variant="default"
        size="default"
        onClick={() => handleClick({ mode: true })}
      >
        Click Me
      </Button>
      <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
    </div>
  );
}
