module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended', // 설치 한경우
    'plugin:import/errors', // 설치한 경우
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.png'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always', // 화살표 함수 괄호 사용 방식
        bracketSpacing: true, // 객체 리터럴의 괄호 사이에 공백 출력
        endOfLine: 'auto', // 개행문자 CRLF/LF 자동 설정
        printWidth: 80, // 줄바꿈 길이 설정
        semi: true, // 명령문 끝에 세미콜론 추가
        singleQuote: true, // 작은 따옴표 사용
        tabWidth: 2, // 들여쓰기 공백 수 설정
        trailingComma: 'all', // 후행 쉼표 추가
        useTabs: false, // tab 대신 space 사용
      },
    ],
  },
};
