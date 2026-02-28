/// <reference types="vite/client" />

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '/vite.svg' {
  const src: string;
  export default src;
}

declare module './assets/react.svg' {
  const src: string;
  export default src;
}
