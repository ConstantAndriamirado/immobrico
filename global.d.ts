declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.webm' {
  const src: string;
  export default src;
}
