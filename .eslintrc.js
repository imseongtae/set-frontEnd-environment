module.exports = {
  // .eslintrc와 package.json이 같은 디렉토리에 있는 경우, .eslintrc가 우선 순위를 가짐
  root: true, 
  env: {
    // 전역변수 사용 설정
    node: true, 
    browser: true,
  },
  parser: "babel-eslint", //ESLint의 구문 분석을 위해 사용되는 parser
  // parserOptions: {
  //   ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
  //   sourceType: "module", // Allows for the use of imports
  //   parser: "babel-eslint", //ESLint의 구문 분석을 위해 사용되는 parser  
  // },

  plugins: [
    // "eslint-plugin-prettier",    
  ],
  // extends는 추가한 플러그인에서 사용할 규칙설정
  extends: [ 
    "eslint:recommended", // eslint에 미리 설정된 규칙세트 사용
    "plugin:prettier/recommended", // 두 패키지를 함께 사용하도록 돕는 설정 
    // "eslint-config-prettier"
  ],
  rules: {
    "no-console": "off",
  },


  // 파일 및 디렉토리를 제외하도록 지정
  "ignorePatterns": ["temp.js", "node_modules/"],
    "rules": {
      //...
  }
}