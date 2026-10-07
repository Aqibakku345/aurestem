import { createServerFn } from '@tanstack/react-start';
import { enquirySchema } from './enquiry-schema';
export const submitEnquiry = createServerFn({ method: 'POST' })
 .inputValidator((data: unknown) => enquirySchema.parse(data))
 .handler(async ({ data }) => {
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { count, error: countError } = await supabaseAdmin.from('packaging_enquiries').select('id', { count: 'exact', head: true }).eq('email', data.email).gte('created_at', new Date(Date.now() - 3600000).toISOString());
  if (countError) throw new Error('Your enquiry could not be saved. Please try again.');
  if ((count ?? 0) >= 3) throw new Error('You have already sent several enquiries. Please try again later.');
  const { website, ...enquiry } = data;
  const { error } = await supabaseAdmin.from('packaging_enquiries').insert(enquiry);
  if (error && error.code !== '23505') throw new Error('Your enquiry could not be saved. Please try again.');
  return { success: true };
 });
