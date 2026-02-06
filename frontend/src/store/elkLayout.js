import ELK from "elkjs/lib/elk.bundled.js";

const elk = new ELK();

export async function autoLayout(nodes, edges) {
  const graph = {
    id: "workflow",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.spacing.nodeNode": "60",
      "elk.direction": "RIGHT",
    },
    children: nodes.map((n) => ({
      id: n.id,
      width: 240,
      height: 120,
    })),
    edges: edges.map((e) => ({
      id: e.id,
      sources: [e.source],
      targets: [e.target],
    })),
  };

  const layout = await elk.layout(graph);

  return nodes.map((n) => {
    const pos = layout.children.find((c) => c.id === n.id);
    if (!pos) return n;
    return {
      ...n,
      position: { x: pos.x, y: pos.y },
    };
  });
}
