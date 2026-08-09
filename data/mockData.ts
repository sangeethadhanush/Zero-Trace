export const securityStats = [
  {
    title: "Active Exams",
    value: "12",
    change: "+8.2%",
    description: "from last week",
    type: "neutral",
  },
  {
    title: "Active Threats",
    value: "03",
    change: "+2",
    description: "requires attention",
    type: "danger",
  },
  {
    title: "Risk Score",
    value: "87%",
    change: "-4.6%",
    description: "from last week",
    type: "success",
  },
  {
    title: "Devices Online",
    value: "148",
    change: "+12",
    description: "currently monitored",
    type: "info",
  },
];

export const riskData = [
  { day: "Mon", risk: 42, blocked: 18 },
  { day: "Tue", risk: 48, blocked: 23 },
  { day: "Wed", risk: 44, blocked: 19 },
  { day: "Thu", risk: 61, blocked: 32 },
  { day: "Fri", risk: 57, blocked: 28 },
  { day: "Sat", risk: 73, blocked: 41 },
  { day: "Sun", risk: 68, blocked: 35 },
];

export const securityEvents = [
  {
    id: 1,
    event: "Paper extraction attempt",
    user: "Unknown User",
    device: "DESKTOP-7F2A",
    time: "2 min ago",
    status: "Blocked",
    severity: "Critical",
  },
  {
    id: 2,
    event: "Unrecognized device detected",
    user: "Student #2048",
    device: "ANDROID-A82F",
    time: "8 min ago",
    status: "Review",
    severity: "High",
  },
  {
    id: 3,
    event: "Multiple login attempts",
    user: "Student #1192",
    device: "LAB-PC-031",
    time: "16 min ago",
    status: "Blocked",
    severity: "High",
  },
  {
    id: 4,
    event: "Normal examination access",
    user: "Student #3821",
    device: "LAB-PC-087",
    time: "24 min ago",
    status: "Allowed",
    severity: "Low",
  },
  {
    id: 5,
    event: "Session verification completed",
    user: "Student #4217",
    device: "LAB-PC-112",
    time: "31 min ago",
    status: "Allowed",
    severity: "Low",
  },
];

export const systemStatus = [
  {
    name: "Authentication Service",
    status: "Operational",
    uptime: "99.99%",
  },
  {
    name: "Threat Detection Engine",
    status: "Operational",
    uptime: "99.97%",
  },
  {
    name: "Audit Logging",
    status: "Operational",
    uptime: "99.99%",
  },
  {
    name: "Paper Vault",
    status: "Operational",
    uptime: "99.95%",
  },
];