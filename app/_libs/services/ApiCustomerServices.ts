import axiosCustomerConfig from "../configs/axiosCustomerConfig";


const getLastStudyLesion = async () => {
    const response = await axiosCustomerConfig.get("/course/get-last-lesson");
    return response;
}


export {
    getLastStudyLesion
}