"use client";
import { useSession, signOut, signIn } from "next-auth/react";
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
        <div className="h-screen flex items-center justify-center">
          Hello and welcome {session.user.name}
          <Button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mx-10"
          >
            Sign out
          </Button>
        </div>
      ) : (
        <div>
          <p>This route is protected. Please sign in</p>
          <Button
            onClick={() => {
              signIn;
            }}
          >
            Sign in{" "}
          </Button>
        </div>
      )}
    </>
  );
}

export default ProtectedRoute;
