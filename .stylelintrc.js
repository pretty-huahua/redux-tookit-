module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    // other configs ...
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'always',
    // 指定声明块内的内容顺序
    'order/order': ['custom-properties', 'declarations'],
    // 指定声明块中的属性顺序。
    'order/properties-order': [
      [
        {
          emptyLineBefore: 'never',
          properties: ['position'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['display'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['width', 'height'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['font', 'color'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['border'],
        },
        {
          emptyLineBefore: 'never',
          properties: ['transform'],
        },
      ],
    ],
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
}
