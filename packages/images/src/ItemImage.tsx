import { IItem } from "@valculator/data/types";
import { getItemImageSrc } from "./helpers/getItemImageSrc";

export const ItemImage = ({
  item,
  size = 60,
}: {
  item: IItem;
  size?: number;
}) => {
  const imgSrc = getItemImageSrc(item);
  // "https://www.shutterstock.com/image-photo/duck-on-white-background-260nw-1037486431.jpg";
  // getItemImageSrc(item);

  return (
    <img
      width={size}
      height={size}
      src={imgSrc}
      alt={`${item.set} ${item.type ? item.type : item.name}`}
    />
  );
};
