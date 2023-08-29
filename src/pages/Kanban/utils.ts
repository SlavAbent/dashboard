import { useCallback } from "react";

// Return the 'onSend' method.
export function useSend(setItems) {
  return useCallback(({ key, fromId, toId }) => {
    fromId = fromId.toLowerCase();
    toId = toId.toLowerCase();

    setItems((items) => {
      const newItems = { ...items };
      newItems[fromId] = newItems[fromId].filter((item) => item !== key);
      newItems[toId] = newItems[toId].concat(key);
      return newItems;
    });
  }, [])
}

// Board static options.
export const boardOptions = {
  containerClass: "board",
  layoutDuration: 400,
  dragEnabled: false,
  dragSortHeuristics: {
    sortInterval: 0
  },
  dragStartPredicate: {
    handle: ".board-column-header"
  }
};

// Column static options.
export const columnOptions = {
  dragSort: { groupId: "NOTES" },
  groupIds: ["NOTES"],
  containerClass: "board-column-content",
  dragEnabled: true,
  dragFixed: true,
  dragSortHeuristics: {
    sortInterval: 0
  },
  dragContainer: document.body
};
