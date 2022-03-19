export type ContactInfo = {
  id: number;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  position: string;
  department?: string;
};

export type TimeStamp = number;

export type DepartmentsList = {
  all: string;
  android: string;
  ios: string;
  design: string;
  management: string;
  qa: string;
  back_office: string;
  frontend: string;
  hr: string;
  pr: string;
  backend: string;
  support: string;
  analytics: string;
};
