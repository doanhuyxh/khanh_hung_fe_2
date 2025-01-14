"use client";

import React, {useEffect, useState} from "react";
import {Button, Card, Col, Row, Space, Tooltip} from "antd";
import {DeleteOutlined, EditOutlined, InfoCircleOutlined} from "@ant-design/icons";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import ScriptItem from "@/app/admin_web/auto-mail-marketing/_components/script-item";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import FormScript from "@/app/admin_web/auto-mail-marketing/_components/form-script";
import {
    ResponseData,
    ScriptAutoEmailMarketingView,
    ScriptAutoSchedulingEmails
} from "@/app/_libs/types";

export default function Script() {

    const [scripts, setScripts] = useState<ScriptAutoEmailMarketingView[]>([]);
    const [script, setScript] = useState<ScriptAutoSchedulingEmails[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [editData, setEditData] = useState<ScriptAutoEmailMarketingView | null>(null);

    const deleteScript = async (id: string) => {
        const res: ResponseData = await axiosInstance.get(`/email/delete-script-auto-email-marketing?id=${id}`)
        if (res.code == 200) {
            getListScript()
        }
    }

    const getListScript = async () => {
        const res: ResponseData = await axiosInstance.get("/email/get-script-auto-email-marketing?page=1&pageSize=300")
        if (res.code == 200) {
            console.log(res.data)
            setScripts(res.data)
        }
    }

    const getListScriptAuto = async () => {
        const res: ResponseData = await axiosInstance.get("/email/get-script-auto-scheduling-emails?page=1&pageSize=300")
        if (res.code == 200) {
            setScript(res.data)
        }
    }

    useEffect(() => {
        getListScriptAuto()
        getListScript()

    }, []);

    const onDragEnd = (result: any) => {
        const {source, destination} = result;

        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        if (source.droppableId === "scriptList") {
            const draggedItem: any = script[source.index];
            setScript((prev) => prev.filter((_, idx) => idx !== source.index));
            setScripts((prev) => {
                const updatedScripts = [...prev];
                const targetList = updatedScripts[parseInt(destination.droppableId)];
                targetList.listSchedulingEmails.splice(destination.index, 0, draggedItem);
                return updatedScripts;
            });
        } else if (destination.droppableId === "scriptList") {
            setScripts((prev) => {
                const updatedScripts = [...prev];
                const sourceList = updatedScripts[parseInt(source.droppableId)];
                const [draggedItem] = sourceList.listSchedulingEmails.splice(source.index, 1);
                setScript((prevScript) => [...prevScript, draggedItem]);
                return updatedScripts;
            });
        } else {
            setScripts((prev) => {
                const updatedScripts = [...prev];
                const sourceList = updatedScripts[parseInt(source.droppableId)];
                const targetList = updatedScripts[parseInt(destination.droppableId)];
                const [draggedItem] = sourceList.listSchedulingEmails.splice(source.index, 1);
                targetList.listSchedulingEmails.splice(destination.index, 0, draggedItem);
                return updatedScripts;
            });
        }
    };

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="w-full">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={8} lg={6}>
                            <Card
                                style={{marginBottom: 20, padding: "10px"}}
                                className="border-[2px] border-gray-700 border-dashed"
                            >
                                <Space direction="vertical" size="middle" style={{width: "100%"}}>
                                    <div className="flex justify-between bg-black bg-opacity-30 px-1 py-3 rounded">
                                    <span className="font-bold">
                                        {script.length > 0 && (
                                            <>
                                                <i className="fa-solid fa-list"></i> Danh sách email
                                                <span className="text-white"> ({script.length})</span>
                                            </>
                                        )}

                                        {script.length === 0 && (
                                            <>
                                                <i className="fa-solid fa-list"></i> Chưa có email nào
                                            </>
                                        )}
                                    </span>
                                        <Tooltip title="Thêm kịch bản mới">
                                            <Button
                                                type="primary"
                                                shape="default"
                                                className="w-3 h-auto bg-green-500"
                                                icon={<i className="fa-solid fa-plus"></i>}
                                            />
                                        </Tooltip>
                                    </div>

                                    <Droppable droppableId="scriptList" isDropDisabled={false}>
                                        {(provided) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                className={`flex flex-col gap-3 ${script.length === 0 ? "bg-white" : ""}`}
                                            >
                                                {script.map((item, index) => (
                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <ScriptItem
                                                                    name={item.name}
                                                                    time={item.time}
                                                                    isActive={item.isActive}
                                                                />
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                                {script.length === 0 && (
                                                    <div
                                                        style={{
                                                            textAlign: "center",
                                                            color: "#aaa",
                                                            margin: "auto",
                                                            width: "100%",
                                                            height: "100%",
                                                            minHeight: "300px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <span>Không có script nào</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </Droppable>
                                </Space>
                            </Card>
                        </Col>

                        <Col xs={24} sm={24} md={16} lg={18}>
                            <Row gutter={[16, 16]}>
                                {scripts.map((script, index) => (
                                    <Col xs={24} sm={12} md={12} lg={12} key={index}>
                                        <Droppable droppableId={index.toString()} isDropDisabled={false}>
                                            {(provided) => (
                                                <Card
                                                    className="border-[1px] border-dashed border-gray-500 p-3"
                                                    title={<div className="text-white">{script.name}</div>}
                                                    extra={
                                                        <Space>
                                                            <Tooltip title="Sửa">
                                                                <Button
                                                                    shape="circle"
                                                                    icon={<EditOutlined/>}
                                                                    size="small"
                                                                    onClick={() => {
                                                                        setShowForm(true);
                                                                        setEditData(script);
                                                                    }}
                                                                />
                                                            </Tooltip>
                                                            <Tooltip title="Xóa">
                                                                <Button
                                                                    shape="circle"
                                                                    icon={<DeleteOutlined/>}
                                                                    danger
                                                                    size="small"
                                                                    onClick={() => deleteScript(script.id)}
                                                                />
                                                            </Tooltip>
                                                        </Space>
                                                    }
                                                >
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.droppableProps}
                                                        className={`w-full min-h-[300px] p-3 flex flex-col gap-2 ${
                                                            script && script.listSchedulingEmails.length === 0 ? "bg-gray-100" : ""
                                                        }`}
                                                    >
                                                        {script && script.listSchedulingEmails.length === 0 && (
                                                            <div
                                                                style={{
                                                                    textAlign: "center",
                                                                    color: "#aaa",
                                                                    margin: "auto",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                }}
                                                            >
                                                                <InfoCircleOutlined
                                                                    style={{fontSize: "48px", marginBottom: "10px"}}
                                                                />
                                                                <span>Kéo một email vào đây để thêm mới</span>
                                                            </div>
                                                        )}

                                                        {script.listSchedulingEmails.map((item: any, idx) => (
                                                            <div key={idx}>
                                                                <ScriptItem
                                                                    name={item.name}
                                                                    time={item.time}
                                                                    isActive={item.isActive}
                                                                />
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

            <FormScript open={showForm}
                        initData={editData}/>
        </>
    );
}
