import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>ZURICH FE</h1>
      <nav style={styles.nav}>
        {status === "authenticated" ? (
          <>
            <span style={styles.userName}>Hello, {session.user.name}</span>
            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => signIn("google")} style={styles.button}>
            Login
          </button>
        )}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    width: "100%",
    padding: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontSize: "24px",
  },
  nav: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  userName: {
    color: "#fff",
    fontSize: "16px",
    marginRight: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#007bff",
    border: "none",
    borderRadius: "4px",
  },
};

export default Header;
