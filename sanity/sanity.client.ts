import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "zj5ysaus",
  dataset: "production",
  apiVersion: "2023-08-31",
  useCdn: false,
};

const client = createClient(config);

export default client;
