"use client";

import { Button } from "@/components/ui/button";
import GithubIcon from "../../../public/github.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function GithubSignInButton() {
  return (
    <Button variant="outline" size="icon" onClick={() => signIn("github")}>
      <Image
        src={GithubIcon}
        alt="Github icon"
        className="w-6 h-6 text-white"
      />
    </Button>
  );
}
