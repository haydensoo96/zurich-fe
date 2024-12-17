import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import User from "./user";

const Login = () => {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      // Fetch user details or set user state here
      setUsers([session.user]);
      // Redirect to user page
    }
  }, [status, session, router]);

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        {status === "authenticated" ? <User /> : <h1>Login to see more</h1>}
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Login;
