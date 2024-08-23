"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Star } from "@phosphor-icons/react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title, user_profile }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [rating, setRating] = useState(0);

  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (comment.length < 3 || comment.trim() === "") {
      return alert("Komentar Minimal 3 Huruf!");
    }

    e.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title, user_profile, rating };

    const response = await fetch("/api/personal/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const submitComment = await response.json();

    if (submitComment.status === 200) {
      setIsCreated(true);
      setComment("");
      setRating(0);
      // untuk merefresh setelah submit komentar, dan akan langsung muncul di UI router.refresh()
      router.refresh();
    }
    return;
  };

  const RatingAnime = () => {
    return (
      <div className="pb-4 flex items-center">
        <h2 className="mr-2 text-primary">Masukan Rating:</h2>
        {[...Array(5)].map((_, index) => {
          return (
            <span>
              <Star size={32} color={index + 1 <= rating ? "yellow" : "grey"} className="cursor-pointer" weight="fill" onClick={() => setRating(index + 1)} key={index} />
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="text-dark">
      {isCreated && <p className="text-primary">Komentar terkirim...</p>}
      <textarea className="w-full p-4 rounded-lg" value={comment} onChange={handleInput} placeholder="Masukan komentar..." />
      <RatingAnime />
      <button className="px-4 py-2 bg-accent w-32 rounded-lg font-semibold cursor-pointer" onClick={handleSubmit}>
        Kirim
      </button>
    </div>
  );
};

export default CommentInput;
