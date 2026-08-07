import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

// Official Tokens Studio package — knows how to follow token
// references/aliases (e.g. "primary" pointing at "blue-500")
// and how single-file exports are structured.
register(StyleDictionary, { excludeParentKeys: true });

const sd = new StyleDictionary({
  source: ['tokens.json'],
  preprocessors: ['tokens-studio'],
  log: { verbosity: 'verbose' },
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'build/css/',
      files: [{ destination: 'variables.css', format: 'css/variables' }]
    },
    ts: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/ts/',
      files: [{ destination: 'tokens.ts', format: 'javascript/es6' }]
    }
  }
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
