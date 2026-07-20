import Container from "@/components/ui/Container";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/components/ui/Logo";


export default function Header() {
  return (
    <header className="border-b">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="w-[80px]">
          <Logo />
        </Link>

        <nav className="flex gap-6">
            <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
            }
            >
            Home
            </NavLink>
            <NavLink
            to="/catalog"
            className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
            }
            >
            Catalog
            </NavLink>
            <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
            }
            >
            About
            </NavLink>
            <NavLink
            to="/contacts"
            className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
            }
            >
            Contacts
            </NavLink>
        </nav>
      </Container>
    </header>
  );
}