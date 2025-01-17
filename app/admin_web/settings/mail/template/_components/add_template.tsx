import { useEffect, useState } from "react";
import EditorReactQuill from "@/app/_components/Editor/ReactQuill";
import { Modal, Input, Button, Select, message } from "antd";
import axiosAdminConfig from "@/app/_libs/configs/axiosAdminConfig";
const { Option } = Select;

export default function AddTemplate({ openModal, setOpenModal, reloadPage }: { openModal: boolean, setOpenModal: () => void, reloadPage: () => void }) {
    const [templateData, setTemplateData] = useState({
        id: "",
        name: "",
        senderName: "",
        subject: "",
        contentTemplate: "",
    });
    const [dropdownOpenSubject, setDropdownOpenSubject] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSelectChange = (field: keyof typeof templateData, value: string) => {
        setDropdownOpen(false);
        setDropdownOpenSubject(false);
        setTemplateData((prev) => ({
            ...prev,
            [field]: prev[field] + value,
        }));
    };

    const handleInputChange = (field: keyof typeof templateData, value: string) => {
        setTemplateData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSaveTemplate = async () => {
        try {
            await axiosAdminConfig.post(`/email/create-or-update-template-email`, templateData);
            message.success(templateData.id ? "Cập nhật mẫu thành công!" : "Tạo mẫu mới thành công!");
            setOpenModal();
            reloadPage();
        } catch (error) {
            message.error("Đã xảy ra lỗi khi lưu dữ liệu!");
        }
    };

    useEffect(() => {
        const jsonData = sessionStorage.getItem("templateMailData");
        if (jsonData) {
            const data = JSON.parse(jsonData);
            setTemplateData(data);
            sessionStorage.removeItem("templateMailData");
        } else {
            setTemplateData({
                id: "",
                name: "",
                senderName: "",
                subject: "",
                contentTemplate: "",
            });
        }
        setDropdownOpen(false);
        setDropdownOpenSubject(false);
    }, [openModal]);

    return (
        <Modal
            width={1200}
            title={templateData.id ? "Chỉnh sửa mẫu email" : "Tạo mới mẫu email"}
            open={openModal}
            onCancel={setOpenModal}
            footer={null}
            className="text-center"
        >
            <div>
                <div className="mb-4">
                    <label className="block text-left font-semibold mb-1">Tên mẫu</label>
                    <Input
                        value={templateData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Nhập tên mẫu"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-left font-semibold mb-1">Tên người gửi</label>
                    <Input
                        value={templateData.senderName}
                        onChange={(e) => handleInputChange("senderName", e.target.value)}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Nhập tên người gửi"
                    />
                </div>

                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-left font-semibold mb-1">Tiêu đề</label>
                        <div className="flex justify-between items-center mb-2 relative">
                            <button
                                className="bg-orange-400 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={() => setDropdownOpenSubject(!dropdownOpenSubject)}
                            >
                                Thêm nội dung
                            </button>
                            {dropdownOpenSubject && (
                                <ul className="absolute bottom-0 transform translate-y-[100%] bg-white border border-gray-300 rounded-md mt-2 w-48 shadow-lg z-10">
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelectChange("subject", "{{var-email}}")}
                                    >
                                        Email
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelectChange("subject", "{{var-fullname}}")}
                                    >
                                        Họ tên
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelectChange("subject", "{{var-dataofbirth}}")}
                                    >
                                        Ngày sinh
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelectChange("subject", "{{var-refcode}}")}
                                    >
                                        Mã khách hàng
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <Input
                        value={templateData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Nhập tiêu đề"
                        className="border border-gray-300 rounded-md p-2 flex-grow"
                    />

                </div>

                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <label className="block font-semibold mb-1">Nội dung mail</label>
                        <div className="flex justify-between items-center mb-2 relative">
                            <button
                                className="bg-orange-400 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Thêm nội dung
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute bottom-0 transform translate-y-[100%] bg-white border border-gray-300 rounded-md mt-2 w-48 shadow-lg z-10">
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelectChange("contentTemplate", "{{var-email}}")}
                                    >
                                        Email
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelectChange("contentTemplate", "{{var-fullname}}")}
                                    >
                                        Họ tên
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelectChange("contentTemplate", "{{var-dataofbirth}}")}
                                    >
                                        Ngày sinh
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelectChange("contentTemplate", "{{var-refcode}}")}
                                    >
                                        Mã khách hàng
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <EditorReactQuill
                        value={templateData.contentTemplate}
                        onChange={(value) => handleInputChange("contentTemplate", value)}
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <Button type="primary" onClick={handleSaveTemplate}>
                        Lưu
                    </Button>
                    <Button onClick={setOpenModal}>Hủy</Button>
                </div>
            </div>
        </Modal>
    );
}
