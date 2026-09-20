export type NavItem = {
  label: string;
  href: string;
};

export type Student = {
  id: string;
  name: string;
  role: string;
  location: string;
  availability: string;
  skills: string[];
  interests: string[];
  image?: string;
};

export type OpportunityType = {
  title: string;
  description: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  category: string;
  image?: string;
};
