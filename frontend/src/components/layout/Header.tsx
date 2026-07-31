import Container from "@/components/ui/Container";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/components/ui/Logo";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <header className="bg-white sticky left-0 top-0 z-99">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="logo flex items-center gap-3 w-[300px]">
          <Logo />
        </Link>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(prev => !prev)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <nav className={isMenuOpen ? "p-[20px] absolute left-0 top-(--header-height) w-full flex flex-col gap-6 z-99" : "hidden lg:flex gap-6"}>
            <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "active" : ""
            }
            onClick={() => setIsMenuOpen(false)}
            >
            Home
            </NavLink>
            <NavLink
            to="/catalog"
            className={({ isActive }) =>
                isActive ? "active" : "" 
            }
            onClick={() => setIsMenuOpen(false)}
            >
            Catalog
            </NavLink>
            <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive ? "active" : ""
            }
            onClick={() => setIsMenuOpen(false)}
            >
            About
            </NavLink>
            <NavLink
            to="/contacts"
            className={({ isActive }) =>
                isActive ? "active" : ""
            }
            onClick={() => setIsMenuOpen(false)}
            >
            Contacts
            </NavLink>
        </nav>
      </Container>
    </header>
  );
}