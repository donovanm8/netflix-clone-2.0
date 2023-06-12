import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typings";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { modalState, movieState } from "@/atoms/modalAtom";
import { useRecoilState} from "recoil"

interface Props {
  netflixOriginals: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col py-16 space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-shadow-xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-xl">
        {movie?.overview}
      </p>

      <div className="flex items-center space-x-4">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="bannerIcon text-black" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70"
        onClick={() => {
          setCurrentMovie(movie)
          setShowModal(true)
        }}>
          More Info
          <InformationCircleIcon className="w-5 md:w-8" />
        </button>
      </div>
    </div>
  );
}
