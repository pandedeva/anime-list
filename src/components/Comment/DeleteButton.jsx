"use client";

import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ id, endpoint }) => {
  const router = useRouter();

  const HandleDeleteComment = async (id) => {
    if (confirm("Yakin mau dihapus?")) {
      const data = { id };

      const response = await fetch("/api/personal/" + endpoint, {
        method: "DELETE",
        body: JSON.stringify(data),
      });
      const deleted = await response.json();

      deleted.isCreated;
      alert("Delete Success");
      console.log(endpoint);
      router.refresh();
      return;
    }
    alert("Delete Failed");
  };

  return (
    <button onClick={() => HandleDeleteComment(id)} className="py-2 px-4 bg-accent rounded font-semibold">
      HAPUS
    </button>
  );
};

export default DeleteButton;
