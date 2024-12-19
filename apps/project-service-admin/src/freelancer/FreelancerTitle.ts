import { Freelancer as TFreelancer } from "../api/freelancer/Freelancer";

export const FREELANCER_TITLE_FIELD = "id";

export const FreelancerTitle = (record: TFreelancer): string => {
  return record.id?.toString() || String(record.id);
};
