"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
      <Button
        size="lg"
        className="w-[150px]"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-9 w-9" />
      </Button>
  );
};