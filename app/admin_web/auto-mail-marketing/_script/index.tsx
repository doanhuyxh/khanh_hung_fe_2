'use client';

import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Space, Tooltip } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Script() {
    const initialScripts = [
        { title: "Kịch bản cho học viên pro", listScript: [] },
        { title: "Kịch bản cho Qualified", listScript: [] },
        { title: "Kịch bản cho Verify", listScript: [] },
    ];

    const [scripts, setScripts] = useState(initialScripts);
    const [script, setScript] = useState<any[]>([]);

    useEffect(() => {
        setScript([
            { id: '1', name: "Gửi thông báo hàng ngày", time: "13:01", isActive: false },
            { id: '2', name: "Nhắc lịch học", time: "14:30", isActive: false },
            { id: '3', name: "Kiểm tra bài tập", time: "15:45", isActive: false },
        ]);
    }, []);

    const onDragEnd = (result: any) => {
        const { source, destination } = result;

        // Nếu không kéo vào vùng droppable hợp lệ
        if (!destination) return;

        // Nếu kéo thả trong cùng một vùng, không thay đổi
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        // Xử lý khi kéo từ `script` sang `listScript` của `scripts`
        if (source.droppableId === "scriptList") {
            // Lấy dữ liệu của item được kéo
            const draggedItem = script[source.index];

            // Cập nhật `scripts` với item mới trong `listScript`
            setScripts(prev => {
                const updatedScripts = [...prev];
                const targetScript = updatedScripts[parseInt(destination.droppableId)];
                // @ts-ignore
                targetScript.listScript = [...targetScript.listScript, draggedItem];
                return updatedScripts;
            });

            // Xóa item khỏi `script`
            setScript(prev => prev.filter((_, idx) => idx !== source.index));
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="w-full">
                <Row gutter={[16, 16]}>
                    {/* Sidebar */}
                    <Col span={6}>
                        <Card style={{ marginBottom: 20 }}>
                            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                                <div className="flex justify-between bg-black bg-opacity-30 px-1 py-3 rounded">
                                    <span className="font-bold">Chưa có kịch bản</span>
                                    <Tooltip title="Thêm kịch bản mới">
                                        <Button type="primary" shape="circle" className="w-4 h-auto bg-green-500" icon={<PlusOutlined />} />
                                    </Tooltip>
                                </div>
                                {/* Draggable Items */}
                                <Droppable droppableId="scriptList">
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className="flex flex-col gap-3"
                                        >
                                            {script.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="border-dashed border-[1px] px-4 py-1"
                                                        >
                                                            <span className="mb-3">{item.name}</span>
                                                            <div className="mb-2 flex flex-wrap gap-2">
                                                                <span className="mx-1">⏰ {item.time}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </Space>
                        </Card>
                    </Col>


                    <Col span={18}>
                        <Row gutter={[16, 16]}>
                            {scripts.map((script, index) => (
                                <Col span={12} key={index}>
                                    <Droppable droppableId={index.toString()}>
                                        {(provided) => (
                                            <Card
                                                className="border-[1px] border-dashed p-3"
                                                title={<div className="text-white">{script.title}</div>}
                                                extra={
                                                    <Space>
                                                        <Tooltip title="Sửa">
                                                            <Button
                                                                shape="circle"
                                                                icon={<EditOutlined />}
                                                                size="small"
                                                            />
                                                        </Tooltip>
                                                        <Tooltip title="Xóa">
                                                            <Button
                                                                shape="circle"
                                                                icon={<DeleteOutlined />}
                                                                danger
                                                                size="small"
                                                            />
                                                        </Tooltip>
                                                    </Space>
                                                }
                                            >
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    className="w-full min-h-[300px] p-3"
                                                >
                                                    {script.listScript.length === 0 && (
                                                        <div
                                                            style={{
                                                                textAlign: 'center',
                                                                color: '#aaa',
                                                                margin: "auto",
                                                                width:"100%",
                                                                height:"100%",
                                                                display:"flex",
                                                                justifyContent:"center",
                                                                justifyItems:"center",
                                                                alignItems:"center"
                                                            }}
                                                        >
                                                            <InfoCircleOutlined
                                                                style={{ fontSize: '48px', marginBottom: '10px' }}
                                                            />
                                                            <span>Kéo một email vào đây để thêm mới</span>
                                                        </div>
                                                    )}

                                                    {script.listScript.map((item:any, idx) => (
                                                        <div key={item.id} className="border p-2 mb-2">
                                                            <span className="font-bold">{item.name}</span>
                                                            <div>⏰ {item.time}</div>
                                                        </div>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            </Card>
                                        )}
                                    </Droppable>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        </DragDropContext>
    );
}
