export type NavItem = {
  label: string;
  href: string;
};

export type StudentStatus = "demo" | "published";

export type Student = {
  id: string;
  name: string;
  role: string;
  location: string;
  availability: string;
  summary: string;
  skills: string[];
  interests: string[];
  image?: string;
  status: StudentStatus;
};

export type OpportunityType = {
  title: string;
  description: string;
  icon: string;
};
