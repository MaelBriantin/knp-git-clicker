import { ItemType, OfficeItemType } from "./Game"

type OfficeProps = {
  ownedItems: ItemType[];
  officeItems: OfficeItemType;
};

export const Office: React.FC<OfficeProps> = (props: OfficeProps) => {
  const { ownedItems } = props;

  return (
    <div className="office">
      {ownedItems.length > 0 ? (
        <div>{ownedItems.length} Items owned</div>
      ) : (
        <div>No items owned</div>
      )}
    </div>
  )
}
