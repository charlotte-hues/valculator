import { IItem } from "../data/@types/ValheimData.types";
import { getItemImageSrc } from "../Valculator.helpers";

export const ItemImage = ({
  item,
  size = 60,
}: {
  item: IItem;
  size?: number;
}) => {
  const imgSrc = getItemImageSrc(item);

  return (
    <img
      width={size}
      height={size}
      src={imgSrc}
      alt={`${item.set} ${item.type ? item.type : item.name}`}
    />
  );
};
