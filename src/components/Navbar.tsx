"use client";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/profile", label: "Profile" },
    { href: "/competitions", label: "Competitions" },
    { href: "/groups", label: "Groups" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <nav className="p-4 bg-gray-900 text-white flex gap-4 shadow-md">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="hover:underline">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
