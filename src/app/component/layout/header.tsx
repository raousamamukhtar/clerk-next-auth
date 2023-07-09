"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";

const Header = () => {
  return (
    <>
      <header className="z-10 py-10 ml-8 text-stone-400">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold uppercase tracking-widest"
            >
              CAFE
            </Link>
          </div>

          {/* Nav links */}
          <ul className="flex items-center gap-10">
            <li className="text-sm font-medium uppercase tracking-wider">
              <Link href="/products">Products</Link>
            </li>
            <SignedIn>
              <li className="text-sm font-medium uppercase tracking-wider">
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </SignedIn>
          </ul>

          {/* Shopping cart */}
          <div className="flex items-center justify-between gap-6">
            <button className="flex items-center gap-x-2 pl-4">
              <ShoppingCartIcon className="h-7 w-7" />

              <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-600 text-xs font-medium text-white">
                0
              </span>
            </button>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="rounded border border-gray-400 px-3 py-0.5">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
