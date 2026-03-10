import GenrePage from "@/components/feature/GenrePage";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

export default function Genre() {
  return (
    <Suspense fallback={<Loading />}>
      <GenrePage />
    </Suspense>
  );
}
