import { useEffect, useState } from "react";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

type ImageCarouselProps = {
  url: string;
  limit?: number;
  page?: number;
};

function ImageCarousel({ url, limit = 5, page = 1 }: ImageCarouselProps) {
  const [images, setImages] = useState<any[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchUrl(targetUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(`${targetUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) fetchUrl(url);
  }, [url]);

  const handlePrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center w-full">
        {loading ? (
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        ) : (
          <>
            <div className="relative flex items-center justify-center w-full max-w-xl">
              <HiArrowCircleLeft
                onClick={handlePrev}
                className="absolute left-4 z-10 h-10 w-10 cursor-pointer text-white hover:text-gray-200 drop-shadow-lg"
              />

              {images.map((img: any, index: number) => (
                <img
                  key={img.id}
                  src={img.download_url}
                  alt={img.author}
                  className={`${
                    current === index ? "block" : "hidden"
                  } w-full h-96 bg-cover bg-center rounded-lg shadow-xl`}
                />
              ))}

              <HiArrowCircleRight
                onClick={handleNext}
                className="absolute right-4 z-10 h-10 w-10 cursor-pointer text-white hover:text-gray-200 drop-shadow-lg"
              />
            </div>

            <div className="mt-4 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    current === index ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 text-sm text-gray-500">
        Made with 💖 By{" "}
        <a
          href="https://mustaphabouddahr.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:underline"
        >
          Mustapha Bouddahr
        </a>
      </div>
    </>
  );
}

export default ImageCarousel;
