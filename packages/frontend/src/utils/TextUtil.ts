export function removeWrap(text: string) {
  return text.replace(/\n\s+/g, '');
}

export function moreSpace(text: string | undefined, sep: string) {
  const reg = new RegExp("\\S" + sep + "\\S");
  if (text?.match(reg)) {
    return text.replace(sep, ' ' + sep + ' ');
  }
}
