import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface NavLinkProps {
  href: string;
  activeRoute: string;
  icon: IconType;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, activeRoute, icon: Icon, label }) => {
  const isActive = activeRoute === href;

  return (
    <Link
      href={href}
      className={`flex flex-col md:flex-row items-center justify-center md:justify-start py-3 px-4 mx-2 rounded-lg font-medium transition-all duration-300 ${isActive
          ? 'text-emerald-400 bg-emerald-500/10 border-b-4 md:border-b-0 border-l-0 md:border-l-4 border-emerald-500 shadow-lg shadow-emerald-500/20'
          : 'text-neutral-400 hover:text-emerald-400 hover:bg-neutral-800/50'
        }`}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon className="w-6 h-6 md:w-5 md:h-5 md:mr-3" aria-hidden="true" />
      <span className="text-xs md:text-base mt-1 md:mt-0">{label}</span>
    </Link>
  );
};

export default NavLink;
