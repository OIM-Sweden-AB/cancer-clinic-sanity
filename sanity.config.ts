import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {googleMapsInput} from '@sanity/google-maps-input'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'SanityTest',

  projectId: 'pl70oeey',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),
    googleMapsInput({
      apiKey: 'AIzaSyCpJ3wCGBpEwKt3dMELUrb1IOj7QKmLdD4',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
