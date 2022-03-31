/* eslint-disable unicorn/prefer-module */
module.exports = {
  branches: [
    'main',
    {
      name: 'beta',
      channel: 'beta',
      prerelease: true,
    },
  ],
  // verifyConditions: [
  //   '@semantic-release/changelog',
  //   '@semantic-release/npm',
  //   '@semantic-release/git',
  // ],
  // prepare: [
  //   '@semantic-release/changelog',
  //   '@semantic-release/npm',
  //   {
  //     path: '@semantic-release/git',
  //     // assets: ['package.json', 'CHANGELOG.md', 'README.md'],
  //     assets: ['CHANGELOG.md', 'README.md'],
  //   },
  // ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'README.md'],
        // assets: ['package.json'],
        // message: 'chore(release): ${nextRelease.version} [skip ci]',
        // message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        // eslint-disable-next-line no-template-curly-in-string
        message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]',
      },
    ],
  ],
}
