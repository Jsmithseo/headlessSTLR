"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import stlrLogo from "../../../public/images/stlr-logo-brand-vert-web.webp";
function ProtectedRoute() {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      {session ? (
        <div className="flex flex-col items-center justify-center gap-36">
          <header className="text-3xl font-bold flex flex-row gap-1">
            <Image src={stlrLogo} alt="stlr" width={64} height={64} />
            <div className="flex flex-col justify-center gap-1">
              <p className="text-4xl">Welcome to Stlr Entertainment</p>
              <p className="text-lg">We Book Premier Talent</p>
            </div>
          </header>

          <div className="flex items-center flex-col gap-6">
            <p className="text-2xl">Actions</p>

            <div>
              <Button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="mx-10"
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p>This route is protected. Please sign in</p>
          <Button
            onClick={() => {
              signIn;
            }}
          >
            Sign in
          </Button>
          <Button>Create EPK</Button>
        </div>
      )}
    </>
  );
}

export default ProtectedRoute;
