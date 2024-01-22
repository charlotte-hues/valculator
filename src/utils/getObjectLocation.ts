export function getObjLocation(obj: any, path: string[]) {
  return path.reduce((object, path) => {
    return (object || {})[path];
  }, obj);
}
