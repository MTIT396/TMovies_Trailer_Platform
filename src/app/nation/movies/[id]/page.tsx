import NationalMoviesPage from "@/components/feature/NationPage";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

export default function NationMovies() {
  return (
    <Suspense fallback={<Loading />}>
      <NationalMoviesPage />
    </Suspense>
  );
}
