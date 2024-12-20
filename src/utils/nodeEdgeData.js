const createEdge = (source, target, nodes) => ({
  id: `e${source}-${target}`,
  source: source,
  target: target,
  type: "special",
  data: {
    positionTitle: nodes.find((n) => n.id === target).data.positionTitle,
    progress:
      nodes.find((n) => n.id === target).data.type === "vacant"
        ? "vacant"
        : 100,
  },
});

const nodes = [
  {
    id: "1",
    type: "special",
    position: { x: 250, y: 5 },
    data: {
      type: "person",
      positionTitle: "ผู้อำนวยการฝ่ายพัฒนาระบบ",
      positionType: "ผู้บริหาร",
      person: {
        id: "p001",
        name: "นายสมชาย ใจดี",
        rank: "อำนวยการระดับสูง",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=สมชาย&backgroundColor=b6e3f4",
        age: 45,
        serviceYears: 20,
        education: "ปริญญาโท วิศวกรรมคอมพิวเตอร์",
        specializations: ["การบริหารโครงการ", "การพัฒนาระบบ"],
        certifications: ["PMP", "ITIL v4"],
      },
      departmentStats: {
        totalPositions: 25,
        filledPositions: 20,
        vacantPositions: 5,
        averageAge: 35,
        averageServiceYears: 8,
        budgetUtilization: 85,
      },
    },
  },
  {
    id: "2",
    type: "special",
    position: { x: 100, y: 100 },
    data: {
      type: "person",
      positionTitle: "หัวหน้าทีมพัฒนา Frontend",
      positionType: "หัวหน้างาน",
      person: {
        id: "p002",
        name: "นางสาวสมหญิง รักเรียน",
        rank: "ชำนาญการพิเศษ",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=สมหญิง&backgroundColor=b6e3f4",
        age: 38,
        serviceYears: 12,
        education: "ปริญญาตรี วิทยาการคอมพิวเตอร์",
        specializations: ["Vue.js", "React", "UX/UI Design"],
        certifications: ["AWS Certified Developer"],
      },
    },
  },
  {
    id: "3",
    type: "special",
    position: { x: 400, y: 100 },
    data: {
      type: "vacant",
      positionTitle: "นักพัฒนาระบบ Frontend",
      positionType: "เจ้าหน้าที่",
      requirements: [
        "จบการศึกษาระดับปริญญาตรีขึ้นไป สาขาที่เกี่ยวข้อง",
        "มีประสบการณ์พัฒนา Frontend อย่างน้อย 2 ปี",
        "มีความเชี่ยวชาญด้าน Vue.js หรือ React",
      ],
      requestStatus: "อยู่ระหว่างการพิจารณา",
      requestDate: "2024-03-15",
    },
  },
  {
    id: "4",
    type: "special",
    position: { x: 100, y: 200 },
    data: {
      type: "person",
      positionTitle: "หัวหน้าทีมทดสอบระบบ",
      positionType: "หัวหน้างาน",
      person: {
        id: "p003",
        name: "นายวิชัย ทดสอบดี",
        rank: "ชำนาญการ",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=วิชัย&backgroundColor=c8e6c9",
        age: 35,
        serviceYears: 8,
        education: "ปริญญาตรี วิศวกรรมซอฟต์แวร์",
        specializations: [
          "Software Testing",
          "Test Automation",
          "Quality Assurance",
        ],
        certifications: ["ISTQB Advanced Level", "Selenium Certified"],
      },
    },
  },
  {
    id: "5",
    type: "special",
    position: { x: 250, y: 200 },
    data: {
      type: "person",
      positionTitle: "หัวหน้าทีมวิเคราะห์ระบบ",
      positionType: "หัวหน้างาน",
      person: {
        id: "p004",
        name: "นางสาวปราณี วิเคราะห์เก่ง",
        rank: "ชำนาญการพิเศษ",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=ปราณี&backgroundColor=ffecb3",
        age: 42,
        serviceYears: 15,
        education: "ปริญญาโท เทคโนโลยีสารสนเทศ",
        specializations: ["Business Analysis", "System Analysis", "UML"],
        certifications: ["CBAP", "PMI-PBA"],
      },
    },
  },
  {
    id: "6",
    type: "special",
    position: { x: 400, y: 200 },
    data: {
      type: "person",
      positionTitle: "หัวหน้าทีมดูแลระบบ",
      positionType: "หัวหน้างาน",
      person: {
        id: "p005",
        name: "นายศักดิ์ชัย ดูแลเยี่ยม",
        rank: "ชำนาญการ",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=ศักดิ์ชัย&backgroundColor=e1bee7",
        age: 37,
        serviceYears: 10,
        education: "ปริญญาตรี วิศวกรรมคอมพิวเตอร์",
        specializations: [
          "System Administration",
          "Cloud Infrastructure",
          "DevOps",
        ],
        certifications: ["AWS Solutions Architect", "Linux Professional"],
      },
    },
  },
  {
    id: "7",
    type: "special",
    position: { x: 50, y: 300 },
    data: {
      type: "person",
      positionTitle: "นักพัฒนาระบบ Frontend อาวุโส",
      positionType: "เจ้าหน้าที่",
      person: {
        id: "p006",
        name: "นางสาวรัตนา พัฒนาเก่ง",
        rank: "ชำนาญการ",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=รัตนา&backgroundColor=f8bbd0",
        age: 32,
        serviceYears: 6,
        education: "ปริญญาตรี วิทยาการคอมพิวเตอร์",
        specializations: ["Vue.js", "React", "TypeScript", "Web Performance"],
        certifications: ["Frontend Masters", "Vue.js Certified"],
      },
    },
  },
  {
    id: "8",
    type: "special",
    position: { x: 150, y: 300 },
    data: {
      type: "person",
      positionTitle: "นักพัฒนาระบบ Frontend",
      positionType: "เจ้าหน้าที่",
      person: {
        id: "p007",
        name: "นายภาณุ เว็บเก่ง",
        rank: "ปฏิบัติการ",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=ภาณุ&backgroundColor=bbdefb",
        age: 28,
        serviceYears: 3,
        education: "ปริญญาตรี วิศวกรรมซอฟต์แวร์",
        specializations: ["JavaScript", "CSS", "Web Accessibility"],
        certifications: ["JavaScript Certified Developer"],
      },
    },
  },
  {
    id: "9",
    type: "special",
    position: { x: 300, y: 300 },
    data: {
      type: "vacant",
      positionTitle: "นักทดสอบระบบอาวุโส",
      positionType: "เจ้าหน้าที่",
      requirements: [
        "ประสบการณ์ทดสอบระบบ 5 ปีขึ้นไป",
        "มีความเชี่ยวชาญด้าน Automated Testing",
        "มีประสบการณ์ด้าน Performance Testing",
      ],
      requestStatus: "รออนุมัติ",
      requestDate: "2024-03-10",
    },
  },
  {
    id: "10",
    type: "special",
    position: { x: 450, y: 300 },
    data: {
      type: "person",
      positionTitle: "นักวิเคราะห์ระบบอาวุโส",
      positionType: "เจ้าหน้าที่",
      person: {
        id: "p008",
        name: "นางสาวมณี วิเคราะห์ดี",
        rank: "ชำนาญการ",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=มณี&backgroundColor=c5cae9",
        age: 34,
        serviceYears: 7,
        education: "ปริญญาโท วิศวกรรมซอฟต์แวร์",
        specializations: [
          "Requirements Analysis",
          "Agile Methodologies",
          "Data Modeling",
        ],
        certifications: ["CPRE-FL", "Agile Analysis Certification"],
      },
    },
  },
  {
    id: "11",
    type: "special",
    position: { x: 550, y: 300 },
    data: {
      type: "person",
      positionTitle: "วิศวกรระบบ",
      positionType: "เจ้าหน้าที่",
      person: {
        id: "p009",
        name: "นายสุรชัย ระบบเยี่ยม",
        rank: "ชำนาญการ",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=สุรชัย&backgroundColor=b2dfdb",
        age: 36,
        serviceYears: 8,
        education: "ปริญญาตรี วิศวกรรมคอมพิวเตอร์",
        specializations: [
          "Cloud Architecture",
          "Kubernetes",
          "Infrastructure as Code",
        ],
        certifications: ["Kubernetes Administrator", "AWS DevOps Professional"],
      },
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
    createEdge("2", "7", nodes),
    createEdge("2", "8", nodes),
    createEdge("4", "9", nodes),
    createEdge("5", "10", nodes),
    createEdge("6", "11", nodes),
  ],
};
