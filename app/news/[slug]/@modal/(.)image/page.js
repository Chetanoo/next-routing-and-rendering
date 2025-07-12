import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const { slug } = await params;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
