export function removeWrap(text: string) {
  return text.replace(/\n\s+/g, '');
}
