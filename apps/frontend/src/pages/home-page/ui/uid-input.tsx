"use client";

import { Input } from "@/shared/components/ui/input";
import { ChangeEvent } from "react";

interface InputProps {
  uid: string;
  changeUid: (data: string) => void;
}

const UidInput = ({ uid, changeUid }: InputProps) => {
  const handleChangeUid = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    if (inputValue.length >= 9) inputValue = inputValue.slice(0, 9);
    changeUid(inputValue);
  };

  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="UID"
        onChange={handleChangeUid}
        value={uid}
      />
    </div>
  );
};

export default UidInput;
