import { z } from 'zod';
export const enquirySchema = z.object({
 name: z.string().trim().min(2).max(120), company: z.string().trim().min(2).max(160), country: z.string().trim().min(2).max(100),
 email: z.string().trim().email().max(254), phone: z.string().trim().max(60), industry: z.string().trim().min(1).max(100),
 packaging_requirement: z.string().trim().min(2).max(500), message: z.string().trim().min(10).max(5000),
 submission_key: z.string().uuid(), website: z.string().max(0),
});
