const createEdge = (source, target, nodes) => ({
  id: `e${source}-${target}`,
  source: source,
  target: target,
  type: "special",
  data: {
    progress: nodes.find((n) => n.id === target).data.progress,
  },
});

const nodes = [
  {
    id: "1",
    type: "special",
    position: { x: 250, y: 5 },
    data: {
      label: "ผู้อำนวยการฝ่ายพัฒนาระบบ",
      type: "ผู้บริหาร",
      maxProfiles: 5,
      profiles: [
        { avatar: "/avatars/1.jpg" },
        { avatar: "/avatars/2.jpg" },
        { avatar: "/avatars/3.jpg" },
        { avatar: "/avatars/4.jpg" },
      ],
      progress: Math.floor((4 / 5) * 100),
    },
  },
  {
    id: "2",
    type: "special",
    position: { x: 100, y: 100 },
    data: {
      label: "หัวหน้าทีมพัฒนา Frontend",
      type: "หัวหน้างาน",
      maxProfiles: 3,
      profiles: [
        { avatar: "/avatars/2.jpg" },
        { avatar: "/avatars/3.jpg" },
        { avatar: "/avatars/4.jpg" },
      ],
      progress: Math.floor((3 / 3) * 100),
    },
  },
  {
    id: "3",
    type: "special",
    position: { x: 400, y: 100 },
    data: {
      label: "หัวหน้าทีมพัฒนา Backend",
      type: "หัวหน้างาน",
      maxProfiles: 5,
      profiles: [
        { avatar: "/avatars/1.jpg" },
        { avatar: "/avatars/2.jpg" },
        { avatar: "/avatars/3.jpg" },
      ],
      progress: Math.floor((3 / 5) * 100),
    },
  },
  {
    id: "4",
    type: "special",
    position: { x: 100, y: 200 },
    data: {
      label: "หัวหน้าทีมทดสอบระบบ",
      type: "หัวหน้างาน",
      maxProfiles: 2,
      profiles: [{ avatar: "/avatars/4.jpg" }, { avatar: "/avatars/5.jpg" }],
      progress: Math.floor((2 / 2) * 100),
    },
  },
  {
    id: "5",
    type: "special",
    position: { x: 250, y: 200 },
    data: {
      label: "หัวหน้าทีมวิเคราะห์ระบบ",
      type: "หัวหน้างาน",
      maxProfiles: 6,
      profiles: [
        { avatar: "/avatars/1.jpg" },
        { avatar: "/avatars/3.jpg" },
        { avatar: "/avatars/5.jpg" },
      ],
      progress: Math.floor((3 / 6) * 100),
    },
  },
  {
    id: "6",
    type: "special",
    position: { x: 400, y: 200 },
    data: {
      label: "หัวหน้าทีมดูแลระบบ",
      type: "หัวหน้างาน",
      maxProfiles: 10,
      profiles: [{ avatar: "/avatars/2.jpg" }, { avatar: "/avatars/4.jpg" }],
      progress: Math.floor((2 / 10) * 100),
    },
  },
];

export const nodeEdgeData = {
  nodes,
  edges: [
    createEdge("1", "2", nodes),
    createEdge("1", "3", nodes),
    createEdge("2", "4", nodes),
    createEdge("3", "5", nodes),
    createEdge("3", "6", nodes),
  ],
};
