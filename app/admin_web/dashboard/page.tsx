'use client';

import {useState, useEffect} from 'react';
import {Card, Row, Col, Statistic} from 'antd';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label} from 'recharts';
import {DatePicker} from 'antd';
import moment from 'moment';
import axiosInstance from '@/app/_libs/configs/axiosAdminConfig';

const {MonthPicker, YearPicker} = DatePicker;


export default function Dashboard() {

    const [totalUsers, setTotalUsers] = useState<number>(0);
    const [newUsersToday, setNewUsersToday] = useState<number>(0);
    const [newUsersLastDay, setNewUsersLastDay] = useState<number>(0);
    const [emailsSentLastDay, setEmailsSentLastDay] = useState<number>(0);
    const [totalEmailsSentInMonth, setTotalEmailsSentInMonth] = useState<number>(0);

    const [chartMailData, setChartMailData] = useState<any[]>([]);
    const [chartUserRes, setChartUserRes] = useState<any[]>([]);

    const [selectedMonth, setSelectedMonth] = useState({
        month: moment().month() + 1,
        year: moment().year()
    });

    const [selectedYear, setSelectedYear] = useState(moment().year());

    const GetDataMail = async () => {
        axiosInstance.get(`/email/get-total-mail-seen-in-month?month=${selectedMonth.month}&year=${selectedMonth.year}`).then((res) => {
            if (res.data.length !== 0) {
                res.data.forEach((item: any) => {
                    item.time = item.time + ":00";
                });
                setChartMailData(res.data);
            }
        });
    }

    const GetDataUserRes = async () => {
        axiosInstance.get('/customer/get-user-res-per-mounth-in-year?year=' + selectedYear).then((res) => {
                setChartUserRes(res.data);
            }
        );
    }

    const handleYearChange = (date, dateString) => {
        setSelectedYear(dateString)
    }

    const handleChangeMonth = (date, dateString) => {
        const time = dateString.split('/');
        console.log(time)
        setSelectedMonth({
            month: parseInt(time[0]),
            year: parseInt(time[1])
        })
    }

    useEffect(() => {
        GetDataUserRes()
    }, [selectedYear]);

    useEffect(() => {
        GetDataMail()
    }, [selectedMonth]);

    useEffect(() => {

        GetDataMail()

        GetDataUserRes()

        axiosInstance.get('/customer/get-total-user').then((res) => {
            setTotalUsers(res.data);
        });

        axiosInstance.get('/customer/get-total-new-user-today').then((res) => {
            setNewUsersToday(res.data);
        });

        axiosInstance.get('/customer/get-total-new-user-last-day').then((res) => {
            setNewUsersLastDay(res.data);
        });

        axiosInstance.get('/email/get-total-mail-send-in-month').then((res) => {
            setTotalEmailsSentInMonth(res.data);
        });

        axiosInstance.get('/email/get-total-mail-send-last-day').then((res) => {
            setEmailsSentLastDay(res.data);
        });


    }, []);

    return (
        <div className="dashboard-container" style={{padding: '20px'}}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    <Card style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Statistic

                            title="Tổng doanh thu"
                            className='font-bold text-black'
                            value={0}
                            valueStyle={{color: '#3f8600'}}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Card style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Statistic

                            title="Tổng doanh thu Hôm nay"
                            className='font-bold text-black'
                            value={0}
                            valueStyle={{color: '#3f8600'}}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Card style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Statistic
                            title="Tổng doanh thu Hôm qua"
                            className='font-bold text-black'
                            value={0}
                            valueStyle={{color: '#3f8600'}}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Card style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Statistic
                            title="Tổng số học viên"
                            className='font-bold text-black'
                            value={totalUsers}
                            valueStyle={{color: '#cf1322'}}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Card style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Statistic
                            title="Học viên mới hôm nay"
                            className='font-bold text-black'

                            value={newUsersToday}
                            valueStyle={{color: '#1890ff'}}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Card style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Statistic
                            title="Học viên mới hôm qua"
                            className='font-bold text-black'

                            value={newUsersLastDay}
                            valueStyle={{color: '#722ed1'}}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Card style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Statistic
                            title="Emails gửi hôm qua"
                            className='font-bold text-black'
                            value={emailsSentLastDay}
                            valueStyle={{color: '#cf1322'}}
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Card style={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        padding: '10px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <Statistic
                            title="Email tháng này"
                            className='font-bold text-black'
                            value={totalEmailsSentInMonth}
                            valueStyle={{color: '#1890ff'}}
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className='my-10' style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <Col xs={24} sm={24} md={24}>
                    <div className='w-full flex flex-row justify-between my-4'>
                        <h3 className='font-bold text-black'>Khung giờ xem mail</h3>
                        <div className='flex flex-row'>
                            <MonthPicker
                                defaultValue={moment()}
                                onChange={handleChangeMonth}
                                format="MM/YYYY"
                                placeholder="Chọn tháng"
                            />
                        </div>
                    </div>
                    <Card>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={chartMailData}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="time" className='py-3'>

                                </XAxis>
                                <YAxis>
                                    <Label value="Số lượng" angle={-90} position="insideLeft"/>
                                </YAxis>
                                <Tooltip/>
                                <Legend/>
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#ff4d4f"
                                    activeDot={{r: 8}}
                                    label={({x, y, value}) => (
                                        <text x={x} y={y - 10} fill="#ff4d4f" textAnchor="middle">
                                            {value}
                                        </text>
                                    )}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className='my-10' style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <Col xs={24} sm={24} md={24}>
                    <div className='w-full flex flex-row justify-between my-4'>
                        <h3 className='font-bold text-black'>Số người dùng đăng ký mới theo tháng</h3>
                        <div className='flex flex-row'>
                            <YearPicker
                                defaultValue={moment()}
                                onChange={handleYearChange}
                                placeholder="Chọn năm"
                            />
                        </div>
                    </div>
                    <Card>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={chartUserRes}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="month" className='py-3'/>
                                <YAxis>
                                    <Label value="Số lượng" angle={-90} position="insideLeft"/>
                                </YAxis>
                                <Tooltip/>
                                <Legend/>
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#4CAF50"
                                    activeDot={{r: 8}}
                                    label={({x, y, value}) => (
                                        <text x={x} y={y - 10} fill="#4CAF50" textAnchor="middle">
                                            {value}
                                        </text>
                                    )}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
