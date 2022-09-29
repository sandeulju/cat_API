// 그냥 TS 연습(예제 백업)

let a: number;

a = 1;
// Error a = 'b';

// TS의 타입 - 기본 자료형, 참조 자료형, 추가 제공 자료형

// 기본 자료형
let str: string = "hi";
let isSucceeded: boolean = true;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let n: null = null;
let u: undefined = undefined;

// typeof null = 'object'
// typeof undefined = 'undefined'
