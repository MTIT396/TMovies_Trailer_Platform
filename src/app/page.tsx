import Banner from "@/components/common/Banner";
import CartoonMoviesList from "@/components/sections/CartoonMoviesList";
import Categories from "@/components/sections/Categories";
import NationalMovies from "@/components/sections/NationalMovies";
import SeriesMovies from "@/components/sections/TVSeries";
import TrendingMovies from "@/components/sections/TrendingMovies";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <TrendingMovies />
      <NationalMovies />
      <SeriesMovies />
      <CartoonMoviesList />
    </>
  );
}
