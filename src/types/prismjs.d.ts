declare module 'prismjs/components/prism-core' {
  import { Grammar } from 'prismjs';
  
  export const highlight: (
    code: string,
    grammar: Grammar,
    language: string
  ) => string;
  
  export const languages: {
    [key: string]: Grammar;
  };
  
  export const tokenize: (
    text: string,
    grammar: Grammar,
    language: string
  ) => Array<string | Token>;
  
  export interface Token {
    type: string;
    content: string | Token[];
    alias?: string | string[];
    length?: number;
    greedy?: boolean;
    lookbehind?: boolean;
  }
}

declare module 'prismjs' {
  export interface Grammar {
    [key: string]: any;
  }
  
  export function highlight(
    code: string,
    grammar: Grammar,
    language: string
  ): string;
  
  export const languages: {
    [key: string]: Grammar;
  };
  
  export function tokenize(
    text: string,
    grammar: Grammar,
    language: string
  ): Array<string | Token>;
  
  export interface Token {
    type: string;
    content: string | Token[];
    alias?: string | string[];
    length?: number;
    greedy?: boolean;
    lookbehind?: boolean;
  }
}
