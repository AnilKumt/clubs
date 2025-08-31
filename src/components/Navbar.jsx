"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-7 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link to="/">
          <MenuItem setActive={setActive} active={active} item="Home">
            {" "}
          </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Clubs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/club/gdg">GDG</HoveredLink>
            <HoveredLink href="/club/datawork">Dataworks</HoveredLink>
            <HoveredLink href="/club/bitsquad">Bitsquad</HoveredLink>
          </div>
        </MenuItem>

        <Link to="/events">
          <MenuItem setActive={setActive} active={active} item="Events">
            {" "}
          </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Blogs"></MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="Gallery"
        ></MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
