import Gallery from "../components/Gallery";
import Overview from "@/components/Overview";

export default function Home() {
  const images = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  const product = {
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: "125.00",
    descuento: 50,
    realPrice: "250.00",
  };

  return (
    <main className="grid grid-cols-2 mt-[50px] place-content-center gap-10">
      <Gallery images={images} />
      <Overview product={product} />
    </main>
  );
}
