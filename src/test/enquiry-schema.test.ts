import { describe, expect, it } from 'vitest';
import { enquirySchema } from '@/lib/enquiry-schema';
const valid = { name:'Alex Sample', company:'Produce Example', country:'Netherlands', email:'alex@example.com', phone:'', industry:'Fresh Produce', packaging_requirement:'Berry export films', message:'We need packaging for berries shipped overseas.', submission_key:'61a17811-4d9b-4faa-8b31-cc9c1ce4e1aa', website:'' };
describe('B2B enquiry data', () => {
 it('accepts all eight requested enquiry fields', () => expect(enquirySchema.parse(valid).company).toBe('Produce Example'));
 it('rejects malformed email addresses', () => expect(enquirySchema.safeParse({...valid,email:'not-an-email'}).success).toBe(false));
 it('requires an industry', () => expect(enquirySchema.safeParse({...valid,industry:''}).success).toBe(false));
 it('rejects filled spam honeypots', () => expect(enquirySchema.safeParse({...valid,website:'spam.example'}).success).toBe(false));
});
