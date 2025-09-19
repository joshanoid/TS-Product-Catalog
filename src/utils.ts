export const parseDomString = (template: string) =>
  new DOMParser().parseFromString(template, 'text/html').body
    .firstChild as HTMLElement;
