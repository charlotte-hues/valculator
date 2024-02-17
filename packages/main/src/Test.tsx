import { useValculatorDataContext } from "@valculator/context";

export const Test = () => {
  const { items } = useValculatorDataContext();

  console.log(items);

  return <div />;
};
