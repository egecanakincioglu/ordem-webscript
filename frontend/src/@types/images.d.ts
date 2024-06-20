// src/images.d.ts
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.mp4' {
  const src: string;
  export default src;
}