"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { ChevronRightIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const invalidChars = ["-", "+", "e", "."];

const HomePage = () => {
  const [uid, setUid] = useState("");

  const handleChangeUid = (e: ChangeEvent<HTMLInputElement>) => {
    if (uid.length === 9) e.target.value = e.target.value.slice(0, 9);
    // remove everything except digits on input
    e.target.value = e.target.value.replace(/[e\+\-\.]/gi, "");
    setUid(e.target.value);
  };

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
          <Input
            type="number"
            placeholder="UID"
            onChange={handleChangeUid}
            onKeyDown={(e) => {
              if (invalidChars.includes(e.key)) e.preventDefault();
            }}
            value={uid}
            inputMode="numeric"
          />
          <Button type="submit" disabled={validateUid()}>
            <ChevronRightIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
