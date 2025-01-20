'use client';

import React, {useState, useEffect} from 'react';
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
} from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
    arrayMove,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {ResponseData, ScriptAutoEmailMarketing, ScriptAutoSchedulingEmails} from "@/app/_libs/types";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import {Button, Card, Col, Row, Space, Tooltip} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import ScriptItem from "@/app/admin_web/auto-mail-marketing/_components/script-item";
import FormScript from "@/app/admin_web/auto-mail-marketing/_components/form-script";
import FormSchedulingEmails from "@/app/admin_web/auto-mail-marketing/_components/form-scheduling-emails";

export default function Page() {
    const [dataContext, setDataContext] = useState<Record<string, any[]>>({});
    const [activeItem, setActiveItem] = useState<any>(null);

    const [loading, setLoading] = useState({
        scripts: false,
        emails: false,
    });
    const [scripts, setScripts] = useState<ScriptAutoEmailMarketing[]>([]);
    const [emails, setEmails] = useState<ScriptAutoSchedulingEmails[]>([]);

    const [showFormScript, setShowFormScript] = useState(false);
    const [showFormEmail, setShowFormEmail] = useState(false);

    const updateListScript = async () =>{

        for (const [key, value] of Object.entries(dataContext)) {
            if (key === "unknown") continue;
            const listSchedulingEmails = value.map((item: any) => item.id);
            await axiosInstance.post("/email/update-list-scheduling-by-script-id", {
                id: key,
                listEmailId: listSchedulingEmails,
            });
        }

    }

    const deleteScript = async (id: string) => {
        const res: ResponseData = await axiosInstance.get(`/email/delete-script-auto-email-marketing?id=${id}`);
        if (res.code == 200) {
            getListScript();
        }
    };

    const getListScript = async () => {
        const res: ResponseData = await axiosInstance.get("/email/get-script-auto-email-marketing?page=1&pageSize=300");
        if (res.code === 200) {
            setScripts(res.data);
            setLoading((prev) => ({...prev, scripts: false}));
        }
    };

    const getListScriptAuto = async () => {
        const res: ResponseData = await axiosInstance.get("/email/get-script-auto-scheduling-emails?page=1&pageSize=300");
        if (res.code === 200) {
            setEmails(res.data);
            setLoading((prev) => ({...prev, emails: false}));
        }
    };

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragStart = (event: any) => {
        setActiveItem(emails.find((email) => email.id === event.active.id));
    };

    const handleDragEnd = ({active, over}: any) => {
        if (!over) {
            setActiveItem(null);
            return;
        }

        const fromId = active.data.current.parentId;
        const toId = over.data.current.parentId;

        if (fromId === toId) {
            setDataContext((prev) => ({
                ...prev,
                [fromId]: arrayMove(
                    prev[fromId],
                    active.data.current.index,
                    over.data.current.index
                ),
            }));
        } else {
            const fromList = dataContext[fromId];
            const toList = dataContext[toId];
            const movedItem = fromList[active.data.current.index];

            console.log('fromList', fromList);
            console.log('toList', toList);
            console.log('movedItem', movedItem);

            setDataContext((prev) => ({
                ...prev,
                [fromId]: fromList.filter((_, index) => index !== active.data.current.index),
                [toId]: [...toList, movedItem],
            }));

        }

        setActiveItem(null);
    };

    useEffect(() => {
        getListScript();
        getListScriptAuto();
    }, []);

    useEffect(() => {
        if (loading.scripts || loading.emails) return;
        console.log("emails", emails);

        let email_have_script = [] as string[];
        scripts.forEach((script) => {
            email_have_script = [...email_have_script, ...script.listSchedulingEmails];
        });
        console.log("email_have_script", email_have_script);

        const email_filter = emails.filter((email) => {
            return !email_have_script.some((item) => item === email.id);
        });
        console.log("email_filter:: ", email_filter);

        const initialData = {
            "unknown": email_filter.map((item) => ({
                id: item.id,
                name: item.name,
            })),
        };

        scripts.forEach((script) => {
            const listSchedulingEmails = script.listSchedulingEmails.map((item) => ({
                id: item,
                name: emails.find((email) => email.id === item)?.name,
            }));

            initialData[script.id] = [...listSchedulingEmails];
        });
        setDataContext(initialData);
    }, [loading]);

    useEffect(() => {
        if (loading.scripts || loading.emails || !dataContext) return;
        updateListScript();
    }, [dataContext]);

    const SortableItem = ({id, data, parentId, index}: any) => {
        const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
            id,
            data: {...data, parentId, index},
        });

        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
        };

        const data_temp = emails.find((email) => email.id === data.id);

        return (
            <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                className={"my-2"}
            >
                <ScriptItem
                    id={data.id}
                    name={data.name}
                    time={data_temp?.time || ""}
                    isActive={data_temp?.isActive || false}
                />
            </div>
        );
    };

    const DroppableContainer = ({id, items}: any) => {
        if (!items) return null;

        if (items.length === 0) {
            return <EmptyState/>;
        }

        return (
            <Col span={24}>
                <SortableContext
                    key={id}
                    items={items.map((item: any) => item.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {items && items.map((item: any, index: number) => (
                        <SortableItem
                            key={item.id}
                            id={item.id}
                            data={item}
                            parentId={id}
                            index={index}
                        />
                    ))}
                </SortableContext>
            </Col>
        );
    };

    return (
        <>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <div className="w-full">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={8} lg={6}>
                            <Card style={{marginBottom: 20, padding: "10px"}}
                                  className="border-[2px] border-gray-700 border-dashed bg-transparent">
                                <div className="flex justify-between bg-black bg-opacity-30 px-1 py-3 rounded mb-4">
                                <span className="font-bold flex gap-2 items-center">
                                    {emails.length > 0 ? (
                                        <>
                                            <i className="fa-solid fa-list"></i>
                                            Danh sách email
                                            <span> ({emails.length})</span>
                                        </>
                                    ) : (
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
                                <Row>
                                    <DroppableContainer key={"unknown"} id={"unknown"} items={dataContext["unknown"]}/>
                                </Row>
                            </Card>
                        </Col>

                        <Col xs={24} sm={24} md={16} lg={18}>
                            <Row gutter={[16, 16]}>
                                {Object.keys(dataContext).map((key) => {
                                    if (key === "unknown") return null;
                                    return (
                                        <Col key={key} xs={24} sm={12} md={12} lg={12}>
                                            <Card
                                                className="border-[1px] border-dashed border-gray-500 p-3 bg-transparent"
                                                extra={
                                                    <Space>
                                                        <Tooltip title="Sửa">
                                                            <Button
                                                                shape="circle"
                                                                icon={<EditOutlined/>}
                                                                size="small"
                                                                onClick={() => {
                                                                    sessionStorage.setItem("data-script", JSON.stringify(scripts.find(x => x.id === key)));
                                                                    setShowFormScript(true);
                                                                }}
                                                            />
                                                        </Tooltip>
                                                        <Tooltip title="Xóa">
                                                            <Button
                                                                shape="circle"
                                                                icon={<DeleteOutlined/>}
                                                                danger
                                                                size="small"
                                                                onClick={() => {
                                                                    deleteScript(key);
                                                                }}
                                                            />
                                                        </Tooltip>
                                                    </Space>
                                                }
                                                title={<div
                                                    className="text-white">{scripts.find(x => x.id === key)?.name}</div>}
                                            >
                                                <DroppableContainer key={key} id={key} items={dataContext[key]}/>
                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </div>

                <DragOverlay>
                    {activeItem ? (
                        <ScriptItem id={activeItem.id} name={activeItem.name} time={activeItem.time}
                                    isActive={activeItem.isActived}/>
                    ) : null}
                </DragOverlay>
            </DndContext>

            <FormScript open={showFormScript} onClose={() => setShowFormScript(false)}/>
            <FormSchedulingEmails visible={showFormEmail} onClose={() => setShowFormEmail(false)}/>
        </>
    );
}


function EmptyState() {
    return (
        <div style={{
            textAlign: "center",
            color: "#000",
            margin: "auto",
            width: "100%",
            height: "100%",
            minHeight: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "5px",
        }}>
            <span className={"text-black"}>Không có email nào</span>
        </div>
    );
}