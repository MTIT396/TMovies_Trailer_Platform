/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { movieServices } from "@/services/movie.service";
import { BASE_IMG_URL } from "@/lib/constant";
import Link from "next/link";
import { MessageCircle, Plus, Send } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { useModalStore } from "@/store/useModalStore";
import { truncateText } from "@/lib/utils";
import Loading from "@/components/ui/Loading";
import { Cast } from "@/types/credit";

export default function MovieDetailPage() {
  const { id } = useParams();
  const { handlePlayTrailer } = useModalStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie_detail", id],
    queryFn: () => movieServices.getMovieDetail(id as string),
    enabled: !!id,
  });

  const movie = data?.data;

  if (isError)
    return (
      <div className="p-10 text-primary font-semibold">
        Không tìm thấy phim.
      </div>
    );

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );

  if (!movie)
    return (
      <div className="p-10 text-primary font-semibold">
        Không tìm thấy dữ liệu phim.
      </div>
    );

  return (
    <div className="w-full min-h-screen text-white font-inter">
      {/* BACKDROP */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src={`${BASE_IMG_URL}${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title}
          fill
          className="object-cover brightness-50"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#090D18] to-transparent z-10"></div>

        <div className="absolute bottom-10 left-6 md:left-20 z-20 max-w-3xl">
          <h1 className="text-3xl leading-snug text-balance md:text-5xl font-bold mb-3">
            {movie.title}
          </h1>
          <p className="opacity-80 text-lg lg:text-xl">{movie.tagline}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* POSTER + INFO */}
          <div>
            <Image
              src={`${BASE_IMG_URL}${movie.poster_path}`}
              width={350}
              height={400}
              alt={movie.title}
              className="rounded-xl shadow-xl mx-auto sm:mx-0"
            />

            <div className="mt-8 space-y-4 text-gray-200 text-sm">
              <p className="flex gap-2 font-light">
                <span className="text-white font-semibold font-inter">
                  Tên gốc:
                </span>{" "}
                {movie.original_title}
              </p>
              <p className="flex gap-2 font-light">
                <span className="text-white font-semibold font-inter">
                  Phát hành:
                </span>{" "}
                {movie.release_date}
              </p>
              <p>
                <span className="text-white font-semibold font-inter">
                  Trạng thái:
                </span>{" "}
                {movie.status}
              </p>
              <p className="flex gap-2 font-light">
                <span className="text-white font-semibold font-inter">
                  Thời lượng:
                </span>{" "}
                {movie.runtime} phút
              </p>
              <p className="flex gap-2 font-light">
                <span className="text-white font-semibold font-inter">
                  Ngôn ngữ:
                </span>{" "}
                {movie.original_language.toUpperCase()}
              </p>
              {movie.vote_average > 0 && (
                <p className="flex gap-2 font-light">
                  <span className="text-white font-semibold font-inter">
                    Đánh giá:
                  </span>{" "}
                  ⭐ {movie.vote_average.toFixed(1)}
                </p>
              )}

              <p className="flex gap-2 font-light">
                <span className="text-white font-semibold font-inter">
                  Lượt đánh giá:
                </span>{" "}
                {movie.vote_count.toLocaleString()}
              </p>
              {movie.budget > 0 && (
                <p className="flex gap-2 font-light">
                  <span className="text-white font-semibold font-inter">
                    Ngân sách:
                  </span>{" "}
                  ${movie.budget.toLocaleString()}
                </p>
              )}

              {movie.revenue > 0 && (
                <p className="flex gap-2 font-light">
                  <span className="text-white font-semibold font-inter">
                    Doanh thu:
                  </span>{" "}
                  ${movie.revenue.toLocaleString()}
                </p>
              )}

              {movie.homepage && (
                <p>
                  <span className="text-white font-semibold">Website:</span>{" "}
                  <Link
                    href={movie.homepage}
                    target="_blank"
                    className="text-blue-400 underline"
                  >
                    {movie.homepage}
                  </Link>
                </p>
              )}
            </div>
          </div>

          {/* DETAILS */}
          <div className="md:col-span-2 space-y-10">
            <div className="flex flex-wrap items-center gap-10 justify-between w-full px-6 py-4 text-white">
              {/* Left actions */}
              <div className="flex xl:flex-row flex-col mx-auto xl:mx-0 items-center gap-10">
                {/* Play Button */}
                <button
                  onClick={(e) => handlePlayTrailer(id as string, e)}
                  className="
                   hover:scale-105 
                   active:scale-95 duration-300 flex items-center gap-2 bg-linear-to-r from-sub-primary to-[#ffecba] drop-shadow-[0_2px_8px_#fed56d] cursor-pointer text-black font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
                >
                  <BiSolidRightArrow size={20} className="text-background" />
                  Xem Ngay
                </button>

                <div className="flex items-center sm:gap-10 gap-4">
                  {/* Like */}
                  <div className="hover:text-sub-primary flex flex-col items-center gap-1 text-xs sm:text-sm text-nowrap opacity-80 hover:opacity-100 cursor-pointer transition">
                    <FaHeart size={20} />
                    <span>Yêu thích</span>
                  </div>

                  {/* Add */}
                  <div className="hover:text-sub-primary flex flex-col items-center gap-1 text-xs sm:text-sm text-nowrap opacity-80 hover:opacity-100 cursor-pointer transition">
                    <Plus size={20} />
                    <span>Thêm vào</span>
                  </div>

                  {/* Share */}
                  <div className="hover:text-sub-primary flex flex-col items-center gap-1 text-xs sm:text-sm text-nowrap opacity-80 hover:opacity-100 cursor-pointer transition">
                    <Send size={20} />
                    <span>Chia sẻ</span>
                  </div>

                  {/* Comment */}
                  <div className="hover:text-sub-primary flex flex-col items-center gap-1 text-xs sm:text-sm text-nowrap opacity-80 hover:opacity-100 cursor-pointer transition">
                    <MessageCircle size={20} />
                    <span>Bình luận</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              {movie.vote_count > 0 && (
                <div className="mx-auto xl:mx-0 flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-white font-medium cursor-pointer hover:bg-blue-500 transition">
                  <span className="text-base sm:text-xl">🍿</span>
                  <span> {movie.vote_count.toLocaleString()}</span>
                  <span className="opacity-90">Đánh giá</span>
                </div>
              )}
            </div>
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Giới thiệu</h2>
              <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            </section>

            {/* Genres */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Thể loại</h2>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((g: any) => (
                  <span
                    key={g.id}
                    className="bg-white/10 px-4 py-1 rounded-full text-sm"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </section>

            {/* Production companies */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Hãng sản xuất</h2>
              <div className="flex flex-wrap items-center gap-2">
                {movie.production_companies.map((pc, index) => (
                  <span key={pc.id} className="text-sm text-gray-400">
                    {pc.name}
                    {index !== movie.production_companies.length - 1 && ","}
                  </span>
                ))}
              </div>
            </section>

            {/* CAST */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Diễn viên chính</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {movie.credits.cast.slice(0, 10).map((actor: Cast) => (
                  <div key={actor.id} className="text-center">
                    <Image
                      src={
                        actor.profile_path
                          ? `${BASE_IMG_URL}${actor.profile_path}`
                          : "/no_img.jpg"
                      }
                      alt={actor.name}
                      width={150}
                      height={200}
                      className="rounded-xl object-cover mx-auto h-[200px]"
                    />

                    <p className="mt-2 font-medium text-sm">{actor.name}</p>
                    <p className="text-gray-400 text-xs">{actor.character}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* REVIEWS */}
            {movie.reviews.results.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold mb-3">Đánh giá</h2>
                <div className="space-y-4">
                  {movie.reviews.results.slice(0, 3).map((review: any) => (
                    <div key={review.id} className="bg-white/5 p-4 rounded-xl">
                      <p className="font-semibold">{review.author}</p>
                      <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                        {truncateText(review.content, 300)}...
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SIMILAR MOVIES */}
            {movie.similar.results.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold mb-3">Phim tương tự</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {movie.similar.results.slice(0, 10).map((m: any) => (
                    <Link key={m.id} href={`/movie/${m.id}`}>
                      <Image
                        src={
                          m.poster_path
                            ? `${BASE_IMG_URL}${m.poster_path}`
                            : "/no_img.jpg"
                        }
                        alt={m.title}
                        width={200}
                        height={300}
                        className="rounded-xl hover:scale-105 h-[250px] object-cover transition duration-300"
                      />
                      <p className="mt-2 text-sm text-balance">{m.title}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
