import { usePlayerContext } from "@context/PlayerContext";

export default function WarehouseTab() {
  const { state, updateGame } = usePlayerContext(); // Access game state and updater

  return (
    <div className="flex flex-wrap space-x-6">
      {state.warehouse.map((item: any) => (
        <div key={item.itemId} className="bg-gray-800 flex flex-wrap justify-center p-3 mb-6 flex-col min-w-48">
          <p className="text-center">{item.itemName}</p>
          <p className="text-center">{item.itemId}</p>
          <div className="flex justify-center my-4">
            <img
              src={item.itemImage}
              className="h-12"
            />
          </div>
          <p className="text-center">You have {item.itemQuantity} {item.itemName}</p>
          <button
            className="mt-2 bg-slate-700 py-1 hover:cursor-pointer"
            onClick={() => console.log("Sell")}
          >
            Sell X1
          </button>
        </div>
      ))}
    </div>
  );
}

