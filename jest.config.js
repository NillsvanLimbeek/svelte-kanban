module.exports = {
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
    '^.+\\.(js|mjs)$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transformIgnorePatterns: ['node_modules/(?!(svelte-spa-router|regexparam)/)'],
  moduleNameMapper: {
    '^regexparam$': '<rootDir>/node_modules/regexparam/dist/regexparam.mjs',
  },
};
