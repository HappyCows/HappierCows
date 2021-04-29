import { Button, Container, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser, useLogout } from "main/utils/user";

export default function Navbar() {
  const { data: currentUser } = useCurrentUser();
  const doLogout = useLogout();

  return (
    <BootstrapNavbar expand="xl" variant="dark" bg="dark" sticky="top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          Happier Cows
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle />

        <BootstrapNavbar.Collapse className="justify-content-end">
          {
            currentUser.loggedIn ? (
              <>
                <BootstrapNavbar.Text className="me-3" as={Link} to="/profile">Welcome, {currentUser.user.email}</BootstrapNavbar.Text>
                <Button onClick={doLogout}>Log Out</Button>
              </>
            ) : (
              <Button href="/oauth2/authorization/google">Log In</Button>
            )
          }
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}