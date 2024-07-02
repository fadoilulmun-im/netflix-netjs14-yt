"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import GmailIcon from "../../../public/gmail.svg";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function EmailSignInButton() {
  return (
    <Link href="/api/auth/signin">
      <Button variant="outline" size="icon">
        <Image src={GmailIcon} alt="Email icon" className="w-6 h-6" />
      </Button>
    </Link>
  );
}
