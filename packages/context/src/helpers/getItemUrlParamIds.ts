export function getItemUrlParamIds(
  itemArray: Array<{ id: string; quantity: number }> = []
) {
  return itemArray?.map((item) => `${item.id}:${item.quantity}`);
}
