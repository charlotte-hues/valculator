// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getObjLocation(obj: any, path: string[]) {
  return path.reduce((object, path) => {
    return (object || {})[path];
  }, obj);
}
