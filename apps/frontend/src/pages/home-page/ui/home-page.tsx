"use client";

import { Button } from "@shared/components/ui/button";
import { Input } from "@shared/components/ui/input";
import { ChevronRightIcon } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

const HomePage = () => {
  const [uid, setUid] = useState("");

  const handleChangeUid = (e: ChangeEvent<HTMLInputElement>) => {
    setUid(e.target.value);
  };

  const validateUid = () => {
    return uid.length !== 9;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(uid);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Rupert Leaderboards</h1>
        <div className="flex gap-2">
          <Input
            placeholder="UID"
            onChange={handleChangeUid}
            value={uid}
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
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
