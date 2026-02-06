import { useCallback } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useLocalStorage } from "../../../hook/useLocalStorage";
import { initialKanban } from "../../../data/data";

import SortableWrapper from "./SortableWrapper";
import BoardColumn from "./BoardColumn";

const Board = () => {
  const [kanban, setKanban] = useLocalStorage("kanban-board", initialKanban);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const findContainer = useCallback(
    (id) => {
      if (kanban.columns[id]) return id;
      return Object.keys(kanban.columns).find((columnId) =>
        kanban.columns[columnId].taskIds.includes(id)
      );
    },
    [kanban]
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // COLUMN DRAG
    if (kanban.columnOrder.includes(activeId)) {
      const oldIndex = kanban.columnOrder.indexOf(activeId);
      const newIndex = kanban.columnOrder.indexOf(overId);

      const newOrder = arrayMove(kanban.columnOrder, oldIndex, newIndex);

      setKanban((prev) => ({
        ...prev,
        columnOrder: newOrder,
      }));

      return;
    }

    // TASK DRAG
    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (!activeContainer || !overContainer) return;

    if (activeContainer === overContainer) {
      const column = kanban.columns[activeContainer];
      const oldIndex = column.taskIds.indexOf(activeId);
      const newIndex = column.taskIds.indexOf(overId);

      const newTaskIds = arrayMove(column.taskIds, oldIndex, newIndex);

      setKanban((prev) => ({
        ...prev,
        columns: {
          ...prev.columns,
          [activeContainer]: {
            ...column,
            taskIds: newTaskIds,
          },
        },
      }));
    } else {
      const fromColumn = kanban.columns[activeContainer];
      const toColumn = kanban.columns[overContainer];

      const newFrom = fromColumn.taskIds.filter((id) => id !== activeId);
      const overIndex = toColumn.taskIds.indexOf(overId);

      const newTo = [
        ...toColumn.taskIds.slice(0, overIndex),
        activeId,
        ...toColumn.taskIds.slice(overIndex),
      ];

      setKanban((prev) => ({
        ...prev,
        columns: {
          ...prev.columns,
          [activeContainer]: { ...fromColumn, taskIds: newFrom },
          [overContainer]: { ...toColumn, taskIds: newTo },
        },
      }));
    }
  };

  return (
    <main className="p-6 flex-1 overflow-x-auto">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={kanban.columnOrder}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex gap-6 min-w-max h-full">
            {kanban.columnOrder.map((columnId) => {
              const column = kanban.columns[columnId];
              const tasks = column.taskIds.map((id) => kanban.tasks[id]);

              return (
                <SortableWrapper key={column.id} id={column.id}>
                  <BoardColumn column={column} tasks={tasks} />
                </SortableWrapper>
              );
            })}

            {/* Add Column Button */}
            <button className="flex flex-col items-center justify-center w-80 min-h-30 
            bg-transparent border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl
             hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors group">
              <span className="text-gray-400 group-hover:text-primary mb-1 text-3xl">
                +
              </span>
              <span className="text-sm font-medium text-gray-500 group-hover:text-primary">
                Add Column
              </span>
            </button>
          </div>
        </SortableContext>
      </DndContext>
    </main>
  );
};

export default Board;
