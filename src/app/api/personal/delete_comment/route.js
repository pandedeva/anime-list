// api untuk pribadi agar bisa menyatukan serverside dan clientside

import prisma from "@/libs/prisma";

export async function DELETE(request) {
  // menangkap ID dari front-end
  const { id } = await request.json();
  const deleteComment = await prisma.comment.delete({
    where: {
      id: id,
    },
  });

  if (!deleteComment) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
