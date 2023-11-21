import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#e2e2e2] sm:text-xl rounded md:p-0 hover:text-[#E8486F]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
