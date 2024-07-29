"use client";
import { useSession, signOut } from "next-auth/react";
import { Button } from "../../components/ui/button";

function ProtectedRoute() {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      {session ? (
        <div>
          Hello and welcome {session.user.name}
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </>
  );
}

export default ProtectedRoute;
