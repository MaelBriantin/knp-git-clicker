import items from '../data/items.json';
import { ItemType } from './Game';
import { StoreCard } from './StoreCard';

type StoreProps = {
  createdLines: number;
  handleBuyItem: (item: ItemType) => void;
  officeItems: { [key: string]: number };
};

export const Store: React.FC<StoreProps> = ({ createdLines, handleBuyItem, officeItems }) => {

  return (
    <div className='store'>
      {items.map((item, index) => (
        <StoreCard
          key={index}
          handleBuyItem={handleBuyItem}
          createdLines={createdLines}
          ownedNumber={officeItems[item.name] || 0}
          {...item}
        />
      ))}
    </div>
  )
}
