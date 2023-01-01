import Authenticate from "@/Layouts/Authenticated/Authenticate";
import { Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({ auth, featuredMovies, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticate auth={auth}>
            <Head title="Dashboard">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {featuredMovies.map((featureMovie) => (
                        <FeaturedMovie
                            key={featureMovie.id}
                            slug={featureMovie.slug}
                            name={`The Batman In Love ${featureMovie}`}
                            category={featureMovie.category}
                            thumbnail={featureMovie.thumbnail}
                            rating={featureMovie.rating}
                        />
                    ))}
                </Flickity>
            </div>

            <div className="mt-[30px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {/* Movies 1 */}
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            slug={movie.slug}
                            name={`The Batman In Love ${movie}`}
                            category={movie.category}
                            thumbnail={movie.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticate>
    );
}
