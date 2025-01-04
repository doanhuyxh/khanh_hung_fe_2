// 'use client'
// import { useState } from 'react';
// import { login } from '@/app/libs/services/ApiCustomerServices';

// export default function Login() {
    
//     const [acc, setAcc] = useState({
//         email: 'user1',
//         password: '123456'
//     });

//     const handleLogin = async () => {
//         const Login = await login(acc.email, acc.password);
//         const res_data = Login.data;
//         if (Login.code === 200) {
//             localStorage.setItem("token", res_data.accessToken);
//             localStorage.setItem("refreshToken", res_data.refreshToken);
//             window.location.href = "/learn/profile";
//         } else {
//             alert("Đăng nhập thất bại");
//         }
//     }

//     return (
//         <div>
//             <div className="min-h-screen flex items-center justify-center">
//                 <div className="bg-white p-8 rounded-lg shadow-md w-96">
//                     <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
//                     <form className="space-y-4">
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                                 placeholder="Nhập email của bạn"
//                                 required
//                                 value={acc.email}
//                                 onChange={(e) => setAcc({ ...acc, email: e.target.value })}
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Mật khẩu
//                             </label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                                 placeholder="Nhập mật khẩu"
//                                 required
//                                 value={acc.password}
//                                 onChange={(e) => setAcc({ ...acc, password: e.target.value })}
//                             />
//                         </div>

//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     id="remember"
//                                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                                 />
//                                 <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
//                                     Ghi nhớ đăng nhập
//                                 </label>
//                             </div>
//                             <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
//                                 Quên mật khẩu?
//                             </a>
//                         </div>

//                         <button
//                             type="button"
//                             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                             onClick={handleLogin}
//                         >
//                             Đăng nhập
//                         </button>
//                     </form>

//                     <div className="mt-4 text-center">
//                         <p className="text-sm text-gray-600">
//                             Chưa có tài khoản?{' '}
//                             <a href="#" className="text-blue-600 hover:text-blue-500">
//                                 Đăng ký ngay
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function Login() {
    return(
        <div></div>
    )
}