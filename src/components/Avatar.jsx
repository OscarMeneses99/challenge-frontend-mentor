import Image from "next/image";
import Loading from "./Loading";

function Avatar({ data, loading, error }) {
  return (
    <>
      {loading && <Loading />}
      {data && (
        <Image
          src={data.data === undefined ? "/image-avatar.png" : data.data.avatar}
          width={50}
          height={50}
          alt="avatar"
          className="rounded-full"
        />
      )}
      {error && (
        <Image
          src={"/image-avatar.png"}
          width={50}
          height={50}
          alt="avatar"
          className="rounded-full"
        />
      )}
    </>
  );
}

export default Avatar;
