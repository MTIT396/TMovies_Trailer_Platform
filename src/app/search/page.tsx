import SearchPage from "@/components/feature/SearchPage";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

export default function Search() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchPage />
    </Suspense>
  );
}
