import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '6bjp2k8e',  // find this in sanity.json or sanity manage dashboard
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});
