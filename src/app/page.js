"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <>
      NEXT 14 App!
      {session.data ? (
        <>
          <h1>{session.data.user.email}</h1>
          <h2>{session.data.user.role}</h2>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
