import React from "react";
import ReactDOM from "react-dom/client";
import { allItemsData, maxItemLevels } from "@valculator/data";
import { ItemImage } from "../ItemImage.tsx";
import { IItem } from "@valculator/data/types";
import { getMissingItems } from "./helpers/getMissingItems.ts";

const missingItems = getMissingItems();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <h1>Missing: {missingItems.length}</h1>
      {missingItems.map((item: IItem) => {
        return (
          <p>
            {item.name} / {item.group}
          </p>
        );
      })}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {allItemsData
          .filter((item) => {
            return !item.level || maxItemLevels[item.name] === item.level;
          })
          .map((item: IItem) => {
            return (
              <div
                key={item.id}
                style={{
                  padding: "8px",
                  border: "1px solid lightgray",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <ItemImage item={item} />
                <div>
                  <p>{item.group}</p>
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  </React.StrictMode>
);
