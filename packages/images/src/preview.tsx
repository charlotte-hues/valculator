import React from "react";
import ReactDOM from "react-dom/client";
import { allItemsData } from "@valculator/data";
import { ItemImage } from "./ItemImage.tsx";
import { IItem } from "@valculator/data/types";
import { getItemImageSrc } from "./helpers/getItemImageSrc.ts";

function getMissingItems() {
  const missingItems = allItemsData
    .filter((item: IItem) => {
      const imgSrc = getItemImageSrc(item);
      return imgSrc.includes("undefined");
    })
    .reduce((acc, cur) => {
      const duplicateIndex = acc.findIndex(
        (item: IItem) => item.name === cur.name
      );

      if (duplicateIndex === -1) {
        acc.push(cur);
      }

      return [...acc];
    }, [] as IItem[]);
  return missingItems;
}

const missingItems = getMissingItems();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <h1>Missing: {missingItems.length}</h1>
      {missingItems.map((item: IItem) => {
        return <p>{item.name}</p>;
      })}

      {allItemsData.map((item: IItem) => {
        return <ItemImage key={item.id} item={item} />;
      })}
    </>
  </React.StrictMode>
);
