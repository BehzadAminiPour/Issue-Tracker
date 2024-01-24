import { AiFillBug } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  const links = [
    {
      label: "داشبورد",
      href: "/",
    },
    {
      label: "موضوع",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/" className="mx-5">
        <AiFillBug size={24} />
      </Link>
      <ul className="flex gap-6">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
