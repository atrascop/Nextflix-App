import { Movie } from "../typings";
import Image from "next/image";

interface props {
  // When using firebase
  // movie:Movie | DoucumentData
  movie: Movie;
}
function Thumbnail({ movie }: props) {
  return (
    <div className="relative h-20 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 ">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
