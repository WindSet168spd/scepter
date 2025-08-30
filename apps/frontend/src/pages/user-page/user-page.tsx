"use client";

import { useParams } from "next/navigation";
import { getUser } from "./api/get-user";
import { useEffect, useState } from "react";
import ScepterChar from "../../../../backend/src/user.entity";

const UserPage = () => {
  const [chars, setChars] = useState<ScepterChar[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { uid } = useParams<{ uid: number }>();

  useEffect(() => {
    const initialRequest = async () => {
      const response = await getUser(uid);
      setChars(response);
      setLoading(false);
    };

    if (isLoading) initialRequest();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div>
      <p>{chars[0].name}</p>
      <img src={chars[0].splashArt} alt="splash" />
    </div>
  );
};

export default UserPage;
