// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'k06t8yq1ov',
  apiKey: process.env.API_KEY,
});
