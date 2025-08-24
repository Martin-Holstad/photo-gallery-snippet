import { type Photo } from "../../types/Photo";

export default async function getPhotos(): Promise<Photo[]> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return photos;
}

const photos: Photo[] = [
  { id: 1, favorite: false, src: "/images/image1.jpg", alt: "Photo 1" },
  { id: 2, favorite: false, src: "/images/image2.jpg", alt: "Photo 2" },
  { id: 3, favorite: false, src: "/images/image3.jpg", alt: "Photo 3" },
  { id: 4, favorite: false, src: "/images/image4.jpg", alt: "Photo 4" },
  { id: 5, favorite: false, src: "/images/image5.jpg", alt: "Photo 5" },
  { id: 6, favorite: false, src: "/images/image6.jpg", alt: "Photo 6" },
  { id: 7, favorite: false, src: "/images/image7.jpg", alt: "Photo 7" },
  { id: 8, favorite: false, src: "/images/image8.jpg", alt: "Photo 8" },
  { id: 9, favorite: false, src: "/images/image9.jpg", alt: "Photo 9" },
  { id: 10, favorite: false, src: "/images/image10.jpg", alt: "Photo 10" },
  { id: 11, favorite: false, src: "/images/image11.jpg", alt: "Photo 11" },
  { id: 12, favorite: false, src: "/images/image12.jpg", alt: "Photo 12" },
  { id: 13, favorite: false, src: "/images/image13.jpg", alt: "Photo 13" },
  { id: 14, favorite: false, src: "/images/image14.jpg", alt: "Photo 14" },
  { id: 15, favorite: false, src: "/images/image15.jpg", alt: "Photo 15" },
  { id: 16, favorite: false, src: "/images/image16.jpg", alt: "Photo 16" },
];
