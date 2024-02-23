function Link({ title, url }) {
  return (
    <a
      href={url}
      className="transition duration-300 ease-in-out hover:last:border-b-2 hover:last:border-orange-500"
    >
      {title}
    </a>
  );
}

export default Link;
