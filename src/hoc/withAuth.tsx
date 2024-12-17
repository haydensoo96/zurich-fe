// filepath: /Users/haydensoo/Project/zurich-fe/src/hoc/withAuth.tsx
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { ComponentType } from "react";

const withAuth = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return; // Do nothing while loading
      if (!session) signIn(); // Redirect to sign in if not authenticated
    }, [session, status]);

    if (status === "loading" || !session) {
      return <div>Loading...</div>; // Show a loading indicator while checking auth status
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
