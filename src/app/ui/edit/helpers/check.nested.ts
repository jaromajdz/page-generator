export function checkNested(obj: any, ...rest: any[]): boolean {
  const level = rest.shift()
  if (obj === undefined) return false;
  if (rest.length == 0 && obj.hasOwnProperty(level)) return true;
  return checkNested(obj[level], ...rest)
}
