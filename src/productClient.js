// src/productClient.js
import { createClient } from '@sanity/client';

export const productClient = createClient({
  projectId: '23pgspsw',  // 🔁 replace with new product studio project ID
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});
