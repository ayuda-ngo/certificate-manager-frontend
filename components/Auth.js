import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

// project imports
import PageLoading from "../containers/PageLoading";

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
  return <PageLoading />;
}

export default Auth;
