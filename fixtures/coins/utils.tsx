export const render = (e: string[]) => {
  const items = e[0].split("|");
  return (
    <>
      {items.map((item, i) => (
        <p key={i} className="mt-2 text-base text-gray-500">
          {item}
        </p>
      ))}
    </>
  );
};
