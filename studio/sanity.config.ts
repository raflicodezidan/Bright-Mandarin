import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';
import { myStructure } from './structure';

export default defineConfig({
  name: 'default',
  title: 'Bright Mandarin Studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '9f5rpp8c',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
