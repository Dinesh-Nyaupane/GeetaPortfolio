import { FaUserNurse, FaHospital, FaHeartbeat } from "react-icons/fa";

export const certifications = [
  {
    id: 1,
    name: "PCL Nursing Certificate",
    provider: "Tansen School of Health Science, Palpa, Nepal",
    expiry: "2023",
    // store the icon component and a class string (render with <item.icon className={item.iconClass} />)
    icon: FaUserNurse,
    iconClass: "text-teal-500 w-16 h-16 mx-auto"
  },
  {
    id: 2,
    name: "Dubai Health Authority (DHA) License – Assistant Nurse",
    provider: "Dubai Health Authority (DHA)",
    expiry: "04 June 2026",
    icon: FaHospital,
    iconClass: "text-rose-500 w-16 h-16 mx-auto"
  },
  {
    id: 3,
    name: "Basic Life Support (BLS)",
    provider: "National Health Care Provider Solutions",
    expiry: "05 May 2026",
    icon: FaHeartbeat,
    iconClass: "text-pink-500 w-16 h-16 mx-auto"
  }
];

// keep a Data-suffixed export because pages import `certificationsData`
export const certificationsData = certifications;
