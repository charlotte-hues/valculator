// import Image from "next/image";

import { IItem } from "../data/@types/ValheimData.types";
// import { getItemImageSrc } from "../Valculator.helpers";

export const ItemImage = ({
  item,
  // size = 60,
}: {
  item: IItem;
  size?: number;
}) => {
  return (
    <div>{item.name}</div>
    // <Image
    //   width={size}
    //   height={size}
    //   src={getItemImageSrc(item)}
    //   alt={`${item.set} ${item.type ? item.type : item.name}`}
    // />
  );
};
