export function getCommonElementsFromArrays(
  a: Array<string>,
  b: Array<string>
): Array<string> {
  return a.filter((item) => b.indexOf(item) !== -1);
}
