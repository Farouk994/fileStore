import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="border-b py-4 bg-gray-50">
      <div className="items-center container mx-auto justify-between flex">
        <div>File Store</div>
        <div className="flex gap-2">
        </div>
          <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
