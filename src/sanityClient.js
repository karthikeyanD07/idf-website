import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'vq3h4g1i',  // find this in sanity.json or sanity manage dashboard
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});
