"use client";

import { Button } from "@/shared/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import UidInput from "./uid-input";

const HomePage = () => {
  const [uid, setUid] = useState("");

  const validateUid = () => {
    return uid.length !== 9;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirect(`${uid}`);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Rupert Leaderboards</h1>
        <div className="flex gap-2">
          <UidInput uid={uid} changeUid={setUid} />
          <Button type="submit" disabled={validateUid()}>
            <ChevronRightIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
