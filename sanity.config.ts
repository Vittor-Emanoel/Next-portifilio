import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

//import {googleMapsInput} from '@sanity/google-maps-input'
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Portifolio",

  projectId: "zj5ysaus",
  dataset: "production",
  basePath: "/studio",

  plugins: [
    deskTool(),

    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
