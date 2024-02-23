"use client";
import AddToCardButton from "./AddToCardButton";
import Counter from "./Counter";
export default function Overview({ product }) {
  return (
    <article className="flex flex-col justify-start items-center">
      <h1 className="text-sm font-medium uppercase text-orange-600 self-start">
        {product.company}
      </h1>
      <h1 className="font-bold text-4xl mt-3 self-start">{product.title}</h1>
      <p className="text-black/80 mt-8">{product.description}</p>
      <p className="mt-8 font-extrabold text-2xl self-start">
        $ {product.price}
        <span className="text-orange-600 bg-orange-100 rounded-lg ml-3 p-2">
          {product.descuento} %
        </span>
      </p>
      <p className="self-start font-medium tex-xl text-black/50 line-through">
        $ {product.realPrice}
      </p>
      <div className="flex justify-center items-center gap-4 mt-6">
        <div className="flex justify-center items-center bg-black/10 rounded-xl h-[45px]">
          <Counter />
        </div>
        <AddToCardButton />
      </div>
    </article>
  );
}
