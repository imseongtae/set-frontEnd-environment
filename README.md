# Set Frontend Environment


## 환경설정 모듈 생성
환경설정 파일을 프로젝트 최상단에 생성하고
빈 객체 안에 설정을 채워감

```json
module.exports = {
  // 설정 내용...
}

```
## 환경(env)
env는 사전 정의된 전역 변수 사용을 정의합니다.
자주 사용되는 설정으로는 browser, node가 있습니다.

```json
{
  // .eslintrc와 package.json이 같은 디렉토리에 있는 경우, .eslintrc가 우선 순위를 가짐
  root: true, 
  env: {
    // 전역변수 사용 설정
    node: true, 
    browser: true,
  },
}
```

## parser
ESLint는 구문 분석을 위해 기본적으로 Espree 파서를 사용합니다.
Babel과 함께 사용되는 파서로는babel-eslint가 있고 Typescript 구문 분석을 위해 사용되는@typescript-eslint/parser가 있습니다.

```json
  parser: "babel-eslint", //ESLint의 구문 분석을 위해 사용되는 parser
  // parserOptions: {
  //   ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
  //   sourceType: "module", // Allows for the use of imports
  //   parser: "babel-eslint", //ESLint의 구문 분석을 위해 사용되는 parser  
  // },
```

## 플러그인 (plugin)
ESLint는 서드파티 플러그인 사용을 지원합니다.
플러그인 패키지를 설치하고, 해당 플러그인을 plugins에 추가하여 사용할 수 있습니다.

```json
{
  plugins: [
    // "eslint-plugin-prettier",    
  ],
}
```

## 확장 (extends)
extends는 추가한 플러그인에서 사용할 규칙을 설정합니다.
플러그인은 일련의 규칙 집합이며, 플러그인을 추가하여도 규칙은 적용되지 않습니다.
규칙을 적용하기 위해서는 추가한 플러그인 중, 사용할 규칙을 추가해주어야 적용이 됩니다.  
예를들어, eslint:recommended와 react/recommended를 사용할 수 있습니다.

```json
{
  // extends는 추가한 플러그인에서 사용할 규칙설정
  extends: [ 
    "eslint:recommended", // eslint에 미리 설정된 규칙세트 사용
    "plugin:prettier/recommended", // 두 패키지를 함께 사용하도록 돕는 설정 
    // "eslint-config-prettier"
  ],
}
```


## 규칙 (rules)
ESLint에는 프로젝트에서 사용하는 규칙을 수정할 수 있습니다. 규칙을 변경하는 경우, 다음과 같은 방법으로 설정해야 합니다.
-"off" 또는 0: 규칙을 사용하지 않음
-"warn" 또는 1: 규칙을 경고로 사용
-"error" 또는 2: 규칙을 오류로 사용

규칙에 추가 옵션이 있는 경우에는 배열 리터럴 구문을 사용하여 지정할 수 있습니다.

```json
{
  rules: {
    "no-console": "off",
  },
}
```

## 파일 디렉토리 제외
ignorePatterns 필드 또는 eslintignore 파일을 작성하여 파일 및 디렉토리를 제외하도록 지정할 수 있습니다.

```json
{
  // 파일 및 디렉토리를 제외하도록 지정
  "ignorePatterns": ["temp.js", "node_modules/"],
    "rules": {
      //...
  }
}
```
## 구성 파일 사용
ESLint는 기본적으로 모든 상위 폴더에서 루트 디렉토리까지 구성파일을 찾습니다.
.eslintrc와 package.json 파일이 같은 디렉토리에 있는 경우, .eslintrc가 우선 순위를 갖게 되며, package.json은 사용되지 않습니다. 
ESLint를 특정 프로젝트로 제한하는 경우, 아래 선언을 사용할 수 
있습니다.
> root의 기본 값은 true 입니다.


```json
// package.json
eslintConfig = {
  root: ture,
  ...
}

// .eslintrc.*
{ 
  root: true,
  ...
}
```
