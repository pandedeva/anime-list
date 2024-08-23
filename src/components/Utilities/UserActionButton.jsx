import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";
import React from "react";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="text-lg mr-3">
        {user ? (
          <Link href="/users/dashboard" className="font-semibold">
            Dashboard {user.name}
          </Link>
        ) : null}
      </div>
      <Link className="font-semibold text-sm py-1 px-3 flex w-24 border border-dark text-stone-800 hover:opacity-70 rounded items-center justify-center" href={actionUrl}>
        {user ? "Sign Out" : "Sign In"}
      </Link>
    </div>
  );
};

export default UserActionButton;
