export type CommitTypes =
  | 'build'
  | 'ci'
  | 'docs'
  | 'feat'
  | 'fix'
  | 'perf'
  | 'refactor'
  | 'revert'
  | 'style'
  | 'test'
  | 'wip'
  | 'chore';

const types: CommitTypes[] = [
  'build',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
  'chore',
  'wip',
];

export default types;
