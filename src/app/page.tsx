'use client'
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import '@uploadcare/react-uploader/core.css';
import Image from "next/image";

export default function Home() {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/2698473/pexels-photo-2698473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/29357132/pexels-photo-29357132/free-photo-of-calm-dog-relaxing-on-green-grass-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/7506265/pexels-photo-7506265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/7506265/pexels-photo-7506265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ]

  return (
    <main className="container mx-auto">
      <div className=" bg-gray-100 p-8 flex justify-between">
        <h1 className="text-lg font-mono font-medium">Galazy Gallery</h1>
        <div>
          <FileUploaderRegular
            useCloudImageEditor={false}
            sourceList="local, url, camera"
            classNameUploader="uc-light uc-gray"
            pubkey="21b19fd9155001bcce1f"
          />
        </div>
      </div>
      <div className="flex justify-between">
        {galleryImages.map((item) =>
          <Image
            key={item.id}
            src={item.url}
            alt="gallery-image"
            width={360}
            height={200}
          />)}
      </div>
    </main>
  );
}
