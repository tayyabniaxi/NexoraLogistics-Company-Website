import {
  Navigation,
  Users,
  Briefcase,
  BarChart3,
  Headset,
  Truck,
  IdCard,
  FileCheck2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/SocialIcons";

type SocialIconComponent = ComponentType<{
  size?: number;
  className?: string;
}>;

export const SITE = {
  name: "Naxora Logistics",
  tagline: "Reliable Dispatch | Better Rates | 24/7 Support",
  contactName: "Rao Jybe",
  phoneDisplay: "+1 (402) 949-3711",
  phoneHref: "tel:+14029493711",
  emailDisplay: "info@naxoralogistics.com",
  emailHref: "mailto:info@naxoralogistics.com",
  address: "229 S 5th St, Unit 5, Glendale Heights, IL 60139",
};

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
];

export type ServiceCategory = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    icon: Navigation,
    title: "Truck Dispatching",
    items: [
      "Load sourcing through major load boards",
      "Rate negotiation with brokers",
      "Load booking and confirmation",
      "Route planning and optimization",
      "Driver communication and support",
    ],
  },
  {
    icon: Users,
    title: "Carrier Management",
    items: [
      "Driver performance monitoring",
      "Daily check calls and status updates",
      "Appointment scheduling",
      "Detention and layover management",
      "Compliance monitoring",
    ],
  },
  {
    icon: Briefcase,
    title: "Back Office Support",
    items: [
      "Rate confirmation management",
      "POD (Proof of Delivery) collection",
      "Invoice preparation and submission",
      "Broker communication",
      "Document management",
    ],
  },
  {
    icon: BarChart3,
    title: "Tracking & Reporting",
    items: [
      "Real-time shipment tracking",
      "Daily operational reports",
      "Revenue and performance reporting",
      "Load and mileage analysis",
    ],
  },
  {
    icon: Headset,
    title: "Customer Service Support",
    items: [
      "Broker and customer communication",
      "Issue resolution",
      "Status updates",
      "Appointment confirmation",
    ],
  },
];

export const BENEFITS: string[] = [
  "Increased truck utilization",
  "Improved revenue per truck",
  "Reduced empty miles",
  "Professional broker relationships",
  "24/7 dispatch support",
  "Mature MC and insurance availability",
  "Faster document processing",
  "Enhanced operational efficiency",
  "Dedicated account management",
];

export const TOOLS: string[] = [
  "DAT Load Board",
  "Truckstop",
  "Google Workspace",
  "Five-in-One Load Board",
  "123 Load Board",
  "Direct Freight Services",
];

export const WHY_CHOOSE_US: string[] = [
  "Experienced dispatch professionals",
  "Dedicated support team",
  "Competitive pricing structure",
  "Scalable solutions for fleets of all sizes",
  "Strong focus on communication and performance",
  "Proven ability to maximize carrier profitability",
];

export type PricingPlan = {
  title: string;
  rate: string;
  description: string;
  highlighted?: boolean;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Own-MC Carrier",
    rate: "5% – 8%",
    description: "Of gross revenue per load, for carriers running under their own MC authority.",
  },
  {
    title: "Our-MC User",
    rate: "16% – 20%",
    description: "Of gross revenue per load, for drivers operating under Naxora Logistics' MC authority.",
    highlighted: true,
  },
  {
    title: "Fixed Monthly Rate",
    rate: "Custom",
    description: "Negotiated based on fleet size and service requirements — contact us for a quote.",
  },
];

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Ellison",
    title: "Owner-Operator",
    quote:
      "Naxora's dispatch team keeps my truck loaded and my rates competitive. I finally have time to focus on driving, not phone calls.",
  },
  {
    name: "Priya Nair",
    title: "Fleet Manager",
    quote:
      "Their back-office support cut our paperwork time in half. Invoices, PODs, and rate confirmations are always handled on time.",
  },
  {
    name: "Diego Ramirez",
    title: "Carrier Owner, 6-Truck Fleet",
    quote:
      "The daily reporting gives us real visibility into revenue per truck. It's the first time we've actually tracked performance properly.",
  },
  {
    name: "Angela Brooks",
    title: "Owner-Operator",
    quote:
      "Compliance and check calls used to eat my whole day. Naxora handles it all, and my broker relationships have never been better.",
  },
];

export type Requirement = {
  icon: LucideIcon;
  text: string;
};

export const REQUIREMENTS: Requirement[] = [
  { icon: Truck, text: "Own or lease a semi-truck operating in the US" },
  { icon: IdCard, text: "Valid Commercial Driver's License (CDL)" },
  { icon: FileCheck2, text: "Registered with the FMCSA Clearinghouse" },
  { icon: ShieldCheck, text: "Clean driving and safety record" },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: SocialIconComponent;
};

// TODO: replace the "#" placeholders below with the real profile URLs.
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Facebook", href: "#", icon: FacebookIcon },
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "LinkedIn", href: "#", icon: LinkedinIcon },
  { name: "X (Twitter)", href: "#", icon: XIcon },
];
