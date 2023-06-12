import { modalState, movieState } from "@/atoms/modalAtom";
import { Movie } from "@/typings";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

interface Props {
  movie: Movie 
  // movie: Movie | Document
}
export default function Thumbnail({ movie }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)
  return (
    <div className="relative h-28 min-w-[180px] md:h-36 md:min-w-[260px] md:hover:scale-105 cursor-pointer transition duration-200
    ease-out">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
        alt=""
        onClick={() => {
          setCurrentMovie(movie)
          setShowModal(true)
        }}
      />
    </div>
  );
}
