/// <reference types="vite/client" />

declare module 'gsap' {
  export function registerPlugin(...plugins: any[]): void;
  export function fromTo(target: any, fromVars: any, toVars: any): any;
  export function to(target: any, vars: any): any;
  export function from(target: any, vars: any): any;
  export function set(target: any, vars: any): any;
  export function timeline(vars?: any): any;
}

declare module 'gsap/ScrollTrigger' {
  export const ScrollTrigger: any;
}
