"use client";

import { useParams } from "next/navigation";

const UserPage = () => {
  const { uid } = useParams<{ uid: number }>();

  return (
    <div>
      <p>{uid}</p>
    </div>
  );
};

export default UserPage;
