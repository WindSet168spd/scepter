"use client";

import { useEffect, useState } from "react";
import { User } from "../../../../../packages/domains/src/user";
import { useParams } from "next/navigation";
import { getUser } from "@/pages/user/api/get-user";
import CharacterCard from "@/widgets/character-card/ui/character-card";

const UserPage = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setLoading] = useState(true);
  const { uid } = useParams<{ uid: number }>();

  useEffect(() => {
    const initialRequest = async () => {
      const response = await getUser(uid);
      console.log(response);
      setUser(response);
      setLoading(false);
    };

    if (isLoading) {
      initialRequest();
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {user?.userCharacters && (
        <CharacterCard character={user?.userCharacters[1]} />
      )}
    </div>
  );
};

export default UserPage;
