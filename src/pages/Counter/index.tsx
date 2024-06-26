import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useCounter = create(
  immer(
    combine({ count: 0 }, (set) => ({
      increment: () => {
        set((state) => {
          state.count += 1;
        });
      },
      decrement: () => {
        set((state) => {
          state.count -= 1;
        });
      },
    }))
  )
);

const Counter = () => {
  const { count, increment } = useCounter();

  return (
    <div className="p-4">
      <input />
      <p>count: {count}</p>
      <button
        onClick={() => {
          increment();
        }}
      >
        increment
      </button>
    </div>
  );
};

export default Counter;
