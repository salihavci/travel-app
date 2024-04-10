export default function Stats({ items }) {
  const itemCount = items.length;
  const packedItemsCount = items.filter((x) => x.packed).length;
  const percentage = Math.round((packedItemsCount / itemCount) * 100);

  if (!items.length) {
    return <footer className="stats">👜 You have no items on your list</footer>;
  }
  return (
    <footer className="stats">
      <em>
        👜 You have {itemCount} items on your list, and you allready packed{" "}
        {packedItemsCount} ({percentage}%)
      </em>
    </footer>
  );
}
