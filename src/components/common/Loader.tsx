import { cn } from "@/lib/utils";

export const Loader = ({
  loading,
  page,
  maxPage,
}: {
  loading: boolean;
  page: number;
  maxPage: number;
}) => {
  return (
    <div
      className={cn(
        "opacity-100 align-middle text-2xl text-white text-center quicksand-700 animate-pulse select-none",
        { "opacity-0 animate-none": !loading },
        { "opacity-100 animate-none": page > maxPage }
      )}
    >
      {page <= maxPage
        ? "Đợi xíu, web đang fetch data..."
        : "Hết data mất rồi :(("}
    </div>
  );
};
