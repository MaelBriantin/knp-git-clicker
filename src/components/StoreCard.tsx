import { ItemType } from "./Game";

type StoreCardProps = {
  createdLines: number;
  name: string;
  price: number;
  linesPerMillisecond: number;
  handleBuyItem: (item: ItemType) => void;
  ownedNumber: number;
};

export const StoreCard = (props: StoreCardProps) => {
  const { createdLines, name, price, linesPerMillisecond, handleBuyItem, ownedNumber } = props;

  return (
    <div className="store-card">
      <div className="store-card-name">{name}</div>
      <div>{price}</div>
      <div>{linesPerMillisecond}</div>
      <div>({ownedNumber})</div>
      <div
        className={`${createdLines < price ? 'store-card-button-disabled' : 'store-card-button'}`}
        onClick={createdLines >= price ? () => handleBuyItem({ name, price, linesPerMillisecond } as ItemType) : undefined}
      >
        Buy
      </div>
    </div>
  )
};
