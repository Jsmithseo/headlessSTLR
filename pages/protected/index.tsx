"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";
import { useState } from "react";

function ProtectedRoute() {
  const { data: session, status } = useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);

  console.log(session);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const handleSignOut = () => {
    setIsSigningOut(true);
    signOut({ callbackUrl: "/" });
  };
  return (
    <>
      {session ? (
        <div className="h-screen flex items-center justify-center">
          Hello and welcome {session.user.name}
          <Button
            onClick={handleSignOut}
            className="mx-10"
            disabled={isSigningOut}
          >
            {isSigningOut ? "Signing out" : "Sign out"}
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
