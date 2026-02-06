import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";

import NavBarTop from "../../components/taskboard/ideaboard/NavBarTop";
import SideLibrary from "../../components/taskboard/ideaboard/SideLibrary";
import IdeaCanvas from "../../components/taskboard/ideaboard/IdeaCanvas";
import { useWorkflowStore } from "../../store/useWorkflowStore";
import IDSettingsPanel from "../../components/taskboard/ideaboard/IDSettingsPanel";

const KaziIdeaPage = () => {
    const addNodeFromLibrary = useWorkflowStore((s) => s.addNodeFromLibrary);
    const clearDragDelta = useWorkflowStore((s) => s.clearDragDelta);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 5 },
        })
    );

    const moveNode = useWorkflowStore((s) => s.moveNode);
    const dragDeltas = useWorkflowStore((s) => s.dragDeltas);
    const setDragDelta = useWorkflowStore((s) => s.setDragDelta);

    const handleDragMove = (event) => {
        const { active, delta } = event;
        const nodeId = active?.data?.current?.nodeId;
        if (!nodeId) return;

        const prev = dragDeltas[nodeId] || { x: 0, y: 0 };

        const dx = delta.x - prev.x;
        const dy = delta.y - prev.y;

        moveNode(nodeId, { x: dx, y: dy });

        setDragDelta(nodeId, delta);
    };

    const handleDragEnd = (event) => {

        const nodeId = event.active?.data?.current?.nodeId;
        if (nodeId) clearDragDelta(nodeId);

        const { over, active, delta } = event;
        if (!over || over.id !== "canvas") return;

        const item = active.data.current;
        if (!item?.fromLibrary) return;

        const rect = over.rect;
        const x = event.delta.x + active.rect.current.initial.left;
        const y = event.delta.y + active.rect.current.initial.top;

        addNodeFromLibrary(item, { x, y });
    }

    return (
        <div className="flex flex-col h-full overflow-hidden">
            <NavBarTop />

            <DndContext sensors={sensors} onDragEnd={handleDragEnd}
                onDragMove={handleDragMove} >
                <div className="flex flex-1 overflow-hidden">
                    <SideLibrary />
                    <IdeaCanvas />
                    <IDSettingsPanel />
                </div>
            </DndContext>
        </div>
    );
}

export default KaziIdeaPage;