export const addLineNumber = (data, from) => {
  for (const [i, element] of data.entries()) {
    element.lineNumber = i + from
  }
  return data
}
