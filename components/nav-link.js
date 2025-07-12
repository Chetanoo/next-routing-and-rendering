"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link className={clsx(path.startsWith(href) && "active")} href={href}>
      {children}
    </Link>
  );
}
