"use client";

import { FileX } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

// next sudah ada page notfound default, tapi ini buat custom untuk sendiri
const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex items-center flex-col">
        <div className="flex items-center gap-2">
          <FileX size={58} className="text-accent" />
          <h3 className="text-accent text-4xl font-bold">NOT FOUND</h3>
        </div>
        <div className="pt-2">
          <button onClick={() => router.back()} className="text-primary hover:text-accent transition-all text-xl underline">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
