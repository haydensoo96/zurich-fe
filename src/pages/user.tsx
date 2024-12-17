import axios from "axios";
import { useEffect, useState } from "react";
import withAuth from "../hoc/withAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (page: number) => {
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    const { data: usersData, total_pages } = data;

    setUsers(usersData);
    setTotalPages(total_pages);
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>First Name</th>
              <th style={styles.tableHeader}>Last Name</th>
              <th style={styles.tableHeader}>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{user.first_name}</td>
                <td style={styles.tableCell}>{user.last_name}</td>
                <td style={styles.tableCell}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={styles.pagination}>
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            style={styles.button}
          >
            Previous
          </button>
          <span style={styles.pageInfo}>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            style={styles.button}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  tableContainer: {
    width: "100%",
    maxWidth: "800px",
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    textAlign: "left" as "left",
    backgroundColor: "#f2f2f2",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "10px",
  },
  pagination: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
  pageInfo: {
    fontSize: "16px",
  },
};

export default withAuth(Users);
