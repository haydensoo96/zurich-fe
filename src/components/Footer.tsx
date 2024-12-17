const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.text}>© 2023 My Application. All rights reserved.</p>
  </footer>
);

const styles = {
  footer: {
    width: "100%",
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Footer;
