import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SearchIcon, X, Eye, Settings } from "lucide-react";


const KycApplication = () => {
    const navigate = useNavigate();
    const [searchUsers, setSearchUsers] = useState(false);
    
    return ( 
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="container mx-auto px-4 py-8">
                    <div className="mb-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <div className="text-center sm:text-left">
                                <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Kyc Applications</h1>
                                <p className="text-md font-semibold mb-6 text-gray-700 dark:text-gray-300">
                                    You can view and manage all KYC applications here.
                                </p>
                            </div>
                            <div>
                                <button 
                                    onClick={() => navigate("/Admin/Settings")}
                                    className="flex items-center gap-2 px-4 py-2 bg-transparent text-gray-500 dark:text-gray-50 rounded-lg hover:shadow hover:bg-gray-800 hover:dark:bg-gray-600 transition-colors duration-300 cursor-pointer">
                                    <Settings className="w-5 h-5" />
                                    <span className="font-semibold">Settings</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 px-4 py-3">
                            <h3 className="text-gray-600 font-semibold dark:text-gray-300">Kyc Requests</h3>
                            <div
                                onClick={() => setSearchUsers(!searchUsers)} 
                                className="bg-gray-200 dark:bg-gray-600 p-1 rounded-sm cursor-pointer">
                                { searchUsers ? <X className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />}
                            </div>
                        </div>
                        <div 
                            className={`
                                transition-all duration-500 ease-in-out
                                transform overflow-hidden
                                ${searchUsers ? 'opacity-100 scale-100 translate-y-0 max-h-[200px] mt-4' : 'opacity-0 scale-95 -translate-y-2 max-h-0'}
                            `}>
                            {
                                searchUsers && (
                                    
                                        <div className="flex items-center justify-between p-4">
                                            <input
                                                type="text"
                                                placeholder="Search for requests..."
                                                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                            />
                                            <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200">
                                                Search
                                            </button>
                                        </div>
                                    
                                )
                            }
                        </div>
                        <div className="p-1">
                            <div className="overflow-x-auto scrollable-table w-full">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Role
                                            </th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Agent
                                            </th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Join Date
                                            </th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Agent Request Date
                                            </th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center justify-start">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Jane Smith</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center justify-start">
                                                    <p className="text-sm font-normal text-gray-900 dark:text-white">jane@example.com</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center justify-start">
                                                    <p className="text-sm font-normal text-gray-900 dark:text-white">User</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center justify-start">
                                                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                                                        <p className="text-sm font-normal">Suspended</p>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center justify-start">
                                                    <p className="text-sm font-normal text-red-800 dark:text-red-300">False</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center justify-start">
                                                    <p className="text-sm font-normal text-gray-900 dark:text-white">2023-02-20</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center justify-start">
                                                    <p className="text-sm font-normal text-gray-900 dark:text-white">2023-02-22</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex items-center justify-end">
                                                    <button 
                                                        onClick={() => navigate("/Admin/KycApplication/Details")}
                                                        className="flex items-center gap-1 text-blue-600 hover:text-blue-900 dark:hover:text-blue-400 hover:cursor-pointer mr-4">
                                                        <Eye className="w-4 h-4" />
                                                        View
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-center text-sm">
                                    <button className="px-3 py-2 cursor-pointer leading-tight tracking-wide text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                                        Previous
                                    </button>
                                    <button className="px-3 py-2 cursor-pointer leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
                                        1
                                    </button>
                                    <button className="px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                                        2
                                    </button>
                                    <button className="px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                                        3
                                    </button>
                                    <button className="px-3 py-2 cursor-pointer leading-tight tracking-wide text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default KycApplication;