"use client";

import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Space, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor, } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ScriptItem from "@/app/admin_web/auto-mail-marketing/_components/script-item";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import FormScript from "@/app/admin_web/auto-mail-marketing/_components/form-script";
import FormSchedulingEmails from "../_components/form-scheduling-emails";
import {
    ResponseData,
    ScriptAutoEmailMarketingView,
    ScriptAutoSchedulingEmails,
} from "@/app/_libs/types";

export default function Script() {
    const [scripts, setScripts] = useState<ScriptAutoEmailMarketingView[]>([]);
    const [emails, setEmails] = useState<ScriptAutoSchedulingEmails[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [showFormEmail, setShowFormEmail] = useState(false);


    const deleteScript = async (id: string) => {
        const res: ResponseData = await axiosInstance.get(
            `/email/delete-script-auto-email-marketing?id=${id}`
        );
        if (res.code == 200) {
            getListScript();
        }
    };

    const getListScript = async () => {
        const res: ResponseData = await axiosInstance.get(
            "/email/get-script-auto-email-marketing?page=1&pageSize=300"
        );
        if (res.code == 200) {

            const new_data = res.data.map((item: any) => {
                console.log(emails);
                return {
                    ...item,
                    listSchedulingEmails: item.listSchedulingEmails.map((item: any) => {
                        const new_emails = emails.find((email) => email.id === item);
                        return new_emails ? new_emails : item;
                    })
                }
            })

            console.log(new_data);

            setScripts(new_data);
        }
    };

    const getListScriptAuto = async () => {
        const res: ResponseData = await axiosInstance.get(
            "/email/get-script-auto-scheduling-emails?page=1&pageSize=300"
        );
        if (res.code == 200) {
            setEmails(res.data);
        }
    };

    useEffect(() => {


        getListScript();
        getListScriptAuto();


    }, []);


    const onDragStart = (event: any) => {
        console.log("Drag started", event); // Lắng nghe khi kéo bắt đầu
    };

    const onDragMove = (event: any) => {
        console.log("Dragging", event); // Lắng nghe khi kéo đối tượng
    };

    const onDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id === over.id) {
            return;
        }
    };


    return (
        <>
            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd} onDragMove={onDragMove} onDragStart={onDragStart}>
                <div className="w-full">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={8} lg={6}>
                            <Card
                                style={{ marginBottom: 20, padding: "10px" }}
                                className="border-[2px] border-gray-700 border-dashed bg-transparent"
                            >
                                <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                                    <div className="flex justify-between bg-black bg-opacity-30 px-1 py-3 rounded">
                                        <span className="font-bold flex gap-2 items-center">
                                            {emails.length > 0 && (
                                                <>
                                                    <i className="fa-solid fa-list"></i>
                                                    Danh sách email
                                                    <span className=""> ({emails.length})</span>
                                                </>
                                            )}

                                            {emails.length === 0 && (
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
                                                onClick={() => setShowFormEmail(true)}
                                            />
                                        </Tooltip>
                                    </div>

                                    <SortableContext items={emails.map((item) => item.id)} strategy={verticalListSortingStrategy}>
                                        <div
                                            className={`flex flex-col gap-3 ${emails.length === 0 ? "bg-white" : ""
                                                }`}
                                        >
                                            {emails.map((item) => (
                                                <SortableItem key={item.id} id={item.id} item={item} onClick={() => {
                                                    sessionStorage.setItem("data-email", JSON.stringify(item));
                                                    setShowFormEmail(true);
                                                }} />
                                            ))}
                                            {emails.length === 0 && (
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
                                    </SortableContext>
                                </Space>
                            </Card>
                        </Col>

                        <Col xs={24} sm={24} md={16} lg={18}>
                            <Row gutter={[16, 16]}>
                                <SortableContext items={scripts.map(item => item.id)} strategy={verticalListSortingStrategy}>
                                    {scripts.map((script, index) => (
                                        <Col xs={24} sm={12} md={12} lg={12} key={index}>
                                            <Card
                                                id={"script" + script.id}
                                                className="border-[1px] border-dashed border-gray-500 p-3 bg-transparent"
                                                title={<div className="text-white">{script.name}</div>}
                                                extra={
                                                    <Space>
                                                        <Tooltip title="Sửa">
                                                            <Button
                                                                shape="circle"
                                                                icon={<EditOutlined />}
                                                                size="small"
                                                                onClick={() => {
                                                                    sessionStorage.setItem("data-script", JSON.stringify(script));
                                                                    setShowForm(true);
                                                                }}
                                                            />
                                                        </Tooltip>
                                                        <Tooltip title="Xóa">
                                                            <Button
                                                                shape="circle"
                                                                icon={<DeleteOutlined />}
                                                                danger
                                                                size="small"
                                                                onClick={() => deleteScript(script.id)}
                                                            />
                                                        </Tooltip>
                                                    </Space>
                                                }
                                            >
                                                <div
                                                    className={`w-full min-h-[300px] p-3 flex flex-col gap-2 ${script && script.listSchedulingEmails.length === 0
                                                        ? "bg-gray-100"
                                                        : ""
                                                        }`}
                                                >
                                                    {script.listSchedulingEmails.length === 0 && (
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
                                                                style={{ fontSize: "48px", marginBottom: "10px" }}
                                                            />
                                                            <span>Kéo một email vào đây để thêm mới</span>
                                                        </div>
                                                    )}

                                                    {script.listSchedulingEmails.map((item: any, idx) => (
                                                        <ScriptItem
                                                            id={item.id}
                                                            key={idx}
                                                            name={item.name}
                                                            time={item.time}
                                                            isActive={item.isActive}
                                                        />
                                                    ))}
                                                </div>
                                            </Card>
                                        </Col>
                                    ))}
                                </SortableContext>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </DndContext>

            <FormScript open={showForm} onClose={() => setShowForm(false)} />
            <FormSchedulingEmails visible={showFormEmail} onClose={() => setShowFormEmail(false)} />
        </>
    );
}

function SortableItem({ id, item, onClick }: { id: string; item: any; onClick: () => void }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} onClick={onClick}>
            <ScriptItem id={item.id} name={item.name} time={item.time} isActive={item.isActive} />
        </div>
    );
}
