import Container from "@/components/ui/Container";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/components/ui/Logo";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <header className="sticky border-b">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 w-[300px]">
          <Logo />
        </Link>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(prev => !prev)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <nav className={isMenuOpen ? "bg-white p-[20px] absolute left-0 top-(--header-height) w-full flex flex-col gap-6" : "hidden lg:flex gap-6"}>
            <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
            }
            onClick={() => setIsMenuOpen(false)}
            >
            Home
            </NavLink>
            <NavLink
            to="/catalog"
            className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "" 
            }
            onClick={() => setIsMenuOpen(false)}
            >
            Catalog
            </NavLink>
            <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
            }
            onClick={() => setIsMenuOpen(false)}
            >
            About
            </NavLink>
            <NavLink
            to="/contacts"
            className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
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