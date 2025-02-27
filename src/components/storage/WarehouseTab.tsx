import { usePlayerContext } from "@context/PlayerContext";

export default function WarehouseTab() {
  const { state } = usePlayerContext();
  console.log(state.warehouse.length)

  // Ensure at least 16 slots, filling empty ones with placeholders
  const warehouseItems = state.warehouse
    .concat(Array(Math.max(0, state.warehouseSize - state.warehouse.length)).fill(null));

  return (
    <div className="flex flex-wrap gap-4">
      {warehouseItems.map((item: any, index: number) => (
        <div
          key={item ? item.itemId : `empty-${index}`}
          className={`bg-gray-800 grid items-center w-40 h-40 "
            }`}
        >
          <button className="w-full h-full p-3 hover:cursor-pointer" onClick={() => console.log(item ? item.itemName : "Empty Slot")}>
            {item ? (
              <>
                <p className="text-center">{item.itemName}</p>
                <div className="flex justify-center">
                  <img src={item.itemImage} className="h-12" />
                </div>
                <p className="text-center pt-3">
                  {item.itemQuantity}
                </p>
              </>
            ) : (
              <>
                <div className="flex justify-center my-4">
                </div>
              </>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}

