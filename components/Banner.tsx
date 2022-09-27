import { Movie } from "../typings";
import { useEffect, useState } from "react";
import Image from "next/image";
import { baseUrl } from "../constants/movie";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  netflixOriginals: Movie[];
}
function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  console.log(movie);
  return (
    <div className="flex flex-col space-y-2 py-40 md:space-y-4 lg:h-[65vh] lg:justify-center lg:pb-20 ">
      <div className=" absolute top-0 left-0 h-[100vh] -z-10 w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl text-shadow-xl lg:text-6xl md:text-2xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerBut bg-white text-black ">
          <FaPlay className="h-4 w-4 text-black md:h-4 md:w-4" /> Play
        </button>
        <button className="bannerBut bg-[gray]/70 shadow-md">
          More Info
          <InformationCircleIcon className="h-5  w-5 md:h-4 md:w-4" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
