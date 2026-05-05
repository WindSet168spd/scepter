"use client";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { ChevronRightIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const HomePage = () => {
  const [uid, setUid] = useState("");

  const validateUid = () => {
    return uid.length !== 9;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirect(`${uid}`);
  };

  const handleChangeUid = (e: ChangeEvent<HTMLInputElement>) => {
    setUid(e.target.value);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Rupert Leaderboard</h1>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="UID"
            onChange={handleChangeUid}
            value={uid}
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
