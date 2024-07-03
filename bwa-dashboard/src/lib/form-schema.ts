import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job Title is required" })
    .min(3, { message: "Job title must be at least 3 character" }),
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a job type",
  }),
  salaryFrom: z.string({ required_error: "oalary From is required" }),
  salaryTo: z.string({ required_error: "Select To is required" }),
  categoryId: z.string({ required_error: "You need to select a category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skill must be a least one skill" }),
  jobDesctiption: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job description must be at least 10 character" }),
  responsibility: z
    .string({ required_error: "Responsibility is required" })
    .min(10, { message: "Responsibility must be at least 10 character" }),
  whoYouAre: z
    .string({ required_error: "Who You are is required" })
    .min(10, { message: "Who you are must be at least 10 character" }),
  niceToHaves: z
    .string({ required_error: "Nice to haves is required" })
    .min(10, { message: "Nice to haves must be at least 10 character" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefit must be a least 1 benefit" }),
});
