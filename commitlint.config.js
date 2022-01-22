/*
 * @Author: Rainy [https://github.com/rain120]
 * @Date: 2020-12-02 21:52:38
 * @LastEditors: Rainy
 * @LastEditTime: 2021-09-24 17:19:22
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'config',
      ],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 130],
  },
};
