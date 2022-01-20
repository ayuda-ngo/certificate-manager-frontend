import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

function Auth({ children }) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") signIn();
  }, [status]);

  if (status === "authenticated") {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}

export default Auth;
