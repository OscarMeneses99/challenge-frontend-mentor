import { useState } from "react";
import Image from "next/image";

function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubtract() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <button
        className="flex justify-center items-center w-[50px]"
        onClick={handleSubtract}
      >
        <Image
          src={"/icon-minus.svg"}
          width={20}
          height={20}
          alt="menos"
        />
      </button>
      <span className="px-3 font-bold text-xl tabular-nums">{count}</span>
      <button
        className="flex justify-center items-center w-[50px]"
        onClick={handleAdd}
      >
        <Image
          src={"/icon-plus.svg"}
          width={20}
          height={20}
          alt="mas"
        />
      </button>
    </>
  );
}

export default Counter;
