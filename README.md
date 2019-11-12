# React에서 Typescript 사용

## 참고
[velopert의 react사용](https://velog.io/@velopert/create-typescript-react-component)

## 준비
* create-react-app을 사용한 프로젝트 생성
```js
$ npx create-react-app app-name --typescript
```


## React.FC 사용 시 장단점
### 장점
* props에 기본적으로 children이 들어가 있다.
* defaultprops, propTypes, contextTypes를 설정할 때 자동완성이 된다.
### 단점
* children이 옵셔널 형태로 들어가 있어서 어떻게 보면 props타입이 명확하지 않음.
   * children이 무조건 있어야 하는 경우와 그렇지 않은 경우의 구분이 안된다.
   ```javascript
   // children 명시
   type GreetingsProps = {
     name: string,
     children: React.ReactNode;
   };
   // ...
   ```
* `defaultProps`가 제대로 동작하지 않는다.
   * 다음과 같은 경우 `mark`의 기본값을 정했지만 값이 없을 경우 에러가 난다.
   ```typescript
  type GreetingsProps = {
    name: string;
    mark: string;
  };
  // React.FC 와 화살표 사용.
  const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
    // ...
  );
  // mark의 기본값을 정했지만 값이 없을 경우 에러가 난다.
  Greetings.defaultProps = {
    mark: '!'
  };
   ```
   * 다음과 같이 해야 오류가 안난다.(defaultProps는 필요가 없어짐)
   ```typescript
   const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => (
    // ...
  );
   ```
   * React.FC 제거와 functions 사용 시.
   ```javascript
   function Greetings({ name, mark }: GreetingsProps) {
     // ...
   }
   ```

