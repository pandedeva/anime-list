// api untuk pribadi agar bisa menyatukan serverside dan clientside

import prisma from "@/libs/prisma";

export async function POST(request) {
  // menangkap data dari front-end
  const { anime_mal_id, user_email, username, comment, anime_title, user_profile, rating } = await request.json();
  const data = { anime_mal_id, user_email, username, comment, anime_title, user_profile, rating };

  // mengcreate comment
  const postComment = await prisma.comment.create({ data });

  if (!postComment) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
