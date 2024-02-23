import IconCard from "@/assets/IconCart";
function AddToCardButton() {
  return (
    <>
      <button className="bg-orange-600 text-white h-[60px] w-[230px] rounded-xl flex justify-center items-center py-5 gap-2 hover:bg-orange-500 transition-colors">
        <IconCard />
        <span className="font-semibold text-lg">Add to cart</span>
      </button>
    </>
  );
}

export default AddToCardButton;
