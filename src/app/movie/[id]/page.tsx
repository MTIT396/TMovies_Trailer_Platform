import MovieDetailPage from "@/components/feature/MoviePage";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

export default function Movie() {
  return (
    <Suspense fallback={<Loading />}>
      <MovieDetailPage />
    </Suspense>
  );
}
