function isEmptyString(term: string) {
  return term.replace(/\s+/g, '') === '';
}

export default isEmptyString;
