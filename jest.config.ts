import type { InitialOptionsTsJest } from 'ts-jest/dist/types'
import { defaults as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  transform: {
    ...tsjPreset.transform,
  },
  testEnvironment: 'jsdom',
  snapshotSerializers: ['@emotion/jest/serializer'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      useESM: true,
    },
  },
}

export default config
