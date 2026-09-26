export const beneficiary = {
  name: "Ravi",
  district: "Bhopal",
  state: "Madhya Pradesh",
  location: "Bhopal, MP",
  age: 27,
  education: "Class 12",
  experience: "2 years",
  preferredSector: "Renewable Energy",
};

export const notifications = [
  {
    title: "New training batch open",
    body: "Solar PV Installer training starts on 18 July in Bhopal.",
  },
  {
    title: "Application reminder",
    body: "Your application for a technician opportunity is due in 2 days.",
  },
  {
    title: "Skill milestone",
    body: "You are 80% ready for the Electrical Safety course.",
  },
];

export const opportunities = [
  {
    id: "solar-technician",
    title: "Solar Technician",
    location: "Bhopal",
    state: "Madhya Pradesh",
    pay: "₹18,000–₹25,000/month",
    type: "Skilled job",
    seats: 18,
    match: "92% Match",
    description: "Install and maintain rooftop solar systems with an emphasis on safety and maintenance.",
    skills: ["Electrical Repair", "Safety", "Solar Installation"],
    applicationUrl: "https://example.gov.in/solar-technician",
  },
  {
    id: "field-service-engineer",
    title: "Field Service Engineer",
    location: "Indore",
    state: "Madhya Pradesh",
    pay: "₹20,000–₹28,000/month",
    type: "Technical role",
    seats: 12,
    match: "88% Match",
    description: "Support site inspection, wiring checks, and equipment troubleshooting for solar operations.",
    skills: ["Troubleshooting", "Wiring", "Customer Support"],
    applicationUrl: "https://example.gov.in/field-service-engineer",
  },
  {
    id: "electrician-helper",
    title: "Electrician Helper",
    location: "Jabalpur",
    state: "Madhya Pradesh",
    pay: "₹15,000–₹20,000/month",
    type: "Apprenticeship",
    seats: 25,
    match: "85% Match",
    description: "Assist with electrical maintenance, installation, and safety checks across community sites.",
    skills: ["Basic Wiring", "Maintenance", "Safety"],
    applicationUrl: "https://example.gov.in/electrician-helper",
  },
];

export const learningLessons = [
  { id: "lesson-1", courseId: "solar-path", title: "Solar Basics", completed: true },
  { id: "lesson-2", courseId: "solar-path", title: "Electrical Safety", completed: true },
  { id: "lesson-3", courseId: "solar-path", title: "Panel Installation", completed: false },
  { id: "lesson-4", courseId: "solar-path", title: "Maintenance Workflow", completed: false },
  { id: "lesson-5", courseId: "solar-path", title: "Troubleshooting", completed: false },
];
