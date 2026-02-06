
const MiniMap = ({ nodes }) => {
  if (!nodes.length) return null;

  const minX = Math.min(...nodes.map((n) => n.position.x));
  const minY = Math.min(...nodes.map((n) => n.position.y));
  const maxX = Math.max(...nodes.map((n) => n.position.x + 220));
  const maxY = Math.max(...nodes.map((n) => n.position.y + 120));

  const width = maxX - minX || 1;
  const height = maxY - minY || 1;

  return (
    <div className="absolute bottom-4 left-4 w-40 h-28 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden flex items-center justify-center opacity-60">
      <div className="relative w-full h-full p-2 grayscale">
        {nodes.map((n) => {
          const x = ((n.position.x - minX) / width) * 100;
          const y = ((n.position.y - minY) / height) * 100;
          return (
            <div
              key={n.id}
              className="absolute bg-primary/40 rounded"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: "16%",
                height: "14%",
              }}
            />
          );
        })}
        <div className="w-full h-full border-2 border-primary/20 rounded pointer-events-none" />
      </div>
    </div>
  );
}

export default MiniMap;