"use client";
import Image from "next/image";
import { useState } from "react";

export default function Galery({ images }) {
  const [position, setPosition] = useState(0);
  return (
    <figure className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src={images[position]}
          width={300}
          height={300}
          alt="sneaker"
          className="rounded-lg w-full object-cover"
        
        />

        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={100}
              height={100}
              alt="sneaker"
              className={`rounded-xl hover:cursor-pointer hover:scale-105 transition ${position === index ? "border-2 border-green-500 opacity-50" : ""}`}
              onClick={() => setPosition(index)}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
