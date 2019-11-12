import React from 'react';

// ===== 컴포넌트 props 타입 정의
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
};

// ===== 컴포넌트(화살표 함수로 정의)
function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleCllick = () => onClick(name);
  return (
    <div>
      <div>Hello, {name} {mark}</div>
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleCllick}>Click Me</button>
      </div>
    </div>
  )
}

// ===== defaultProps 정의
Greetings.defaultProps = {
  mark: '!'
};


// ===== 내보내기
export default Greetings;