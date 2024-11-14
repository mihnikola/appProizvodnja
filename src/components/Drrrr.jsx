import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';


const Drrrr = () => {
    const initialDataA = [
        { id: '1', content: 'Row 1' },
        { id: '2', content: 'Row 2' },
        { id: '3', content: 'Row 3' },
    ];
    
    const initialDataB = [
        { id: '4', content: 'Row 4' },
        { id: '5', content: 'Row 5' },
    ];
    
    const [tableA, setTableA] = useState(initialDataA);
    const [tableB, setTableB] = useState(initialDataB);

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        // Moving between tables
        if (source.droppableId !== destination.droppableId) {
            const sourceTable = source.droppableId === 'tableA' ? tableA : tableB;
            const destTable = destination.droppableId === 'tableA' ? tableA : tableB;

            const [movedItem] = sourceTable.splice(source.index, 1);
            destTable.splice(destination.index, 0, movedItem);

            setTableA(destination.droppableId === 'tableA' ? destTable : sourceTable);
            setTableB(destination.droppableId === 'tableB' ? destTable : sourceTable);
        } else {
            const currentTable = source.droppableId === 'tableA' ? tableA : tableB;
            const [movedItem] = currentTable.splice(source.index, 1);
            currentTable.splice(destination.index, 0, movedItem);

            if (source.droppableId === 'tableA') {
                setTableA(currentTable);
            } else {
                setTableB(currentTable);
            }
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                <Droppable droppableId="tableA">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} style={{ width: '300px', border: '1px solid black', padding: '10px' }}>
                            <h2>Table A</h2>
                            {tableA.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                ...provided.draggableProps.style,
                                                padding: '10px',
                                                margin: '5px',
                                                background: 'lightgrey',
                                                border: '1px solid black',
                                            }}
                                        >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <Droppable droppableId="tableB">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} style={{ width: '300px', border: '1px solid black', padding: '10px' }}>
                            <h2>Table B</h2>
                            {tableB.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                ...provided.draggableProps.style,
                                                padding: '10px',
                                                margin: '5px',
                                                background: 'lightgrey',
                                                border: '1px solid black',
                                            }}
                                        >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default Drrrr;
