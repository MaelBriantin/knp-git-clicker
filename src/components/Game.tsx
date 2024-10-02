import { useEffect, useState } from 'react';
import { Score } from './Score';
import { Gitcoin } from './Gitcoin';
import { Store } from './Store';
import { Office } from './Office';

export type ItemType= {
  name: string;
  price: number;
  linesPerMillisecond: number;
};

export type OfficeItemType = {
  [key: string]: number;
};

export const Game = () => {
  const [createdLines, setCreatedLines] = useState<number>(0);
  const [ownedItems, setOwnedItems] = useState<ItemType[]>([]);
  const [officeItems, setOfficeItems] = useState<OfficeItemType>({});
  const [linesPerMillisecond, setLinesPerMillisecond] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCreatedLines(createdLines + linesPerMillisecond);
    }, 1);
    return () => clearInterval(interval);
  }, [createdLines, linesPerMillisecond, ownedItems]);

  const handleBuyItem = (item: ItemType) => {
    setOwnedItems([...ownedItems, item]);
    setCreatedLines(createdLines - item.price);
    addToOffice(item);
    setLinesPerMillisecond(linesPerMillisecond + item.linesPerMillisecond);
  };

  const addToOffice = (item: ItemType) => {
    officeItems[item.name]
      ? setOfficeItems({
          ...officeItems,
          [item.name]: officeItems[item.name] + 1,
        })
      : setOfficeItems({ ...officeItems, [item.name]: 1 });
  }

  return (
    <div className="game">
      <Score createdLines={createdLines} />
      <Gitcoin setCreatedLine={setCreatedLines} />
      <Store
        handleBuyItem={handleBuyItem}
        createdLines={createdLines}
        officeItems={officeItems}
      />
      <Office 
        officeItems={officeItems}
        ownedItems={ownedItems}
      />
    </div>
  )
}
