// api untuk pribadi agar bisa menyatukan serverside dan clientside

import prisma from "@/libs/prisma";

export async function POST(request) {
  // menangkap data dari front-end
  const { anime_mal_id, user_email, anime_image, anime_title } = await request.json();
  const data = { anime_mal_id, user_email, anime_image, anime_title };

  // mengcreate collection
  const createCollection = await prisma.collection.create({ data });

  if (!createCollection) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
