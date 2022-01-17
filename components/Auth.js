import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

function Auth({ children }) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (status === "unauthenticated") signIn();
    // if (!isUser) {
    //   signIn();
    //   return;
    // } // If not authenticated, force log in
  }, [status]);

  if (status === "authenticated") {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}

export default Auth;
