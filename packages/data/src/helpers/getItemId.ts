export const getItemId = (
  name: string,
  variant: "material" | "item",
  level?: number
) =>
  `${variant === "material" ? "m-" : ""}${name
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(":", "-")}${level ?? ""}`;
