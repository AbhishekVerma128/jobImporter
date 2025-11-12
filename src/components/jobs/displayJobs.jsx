"use client";

export default function DisplayJobs({ data = [] }) {
  

    if (!data) {
        return <div className="text-center mt-10 text-gray-500">Loading...</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Import History???</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 text-left font-semibold text-gray-700">File Name</th>
                            <th className="py-3 px-4 text-left font-semibold text-gray-700">Import Date</th>
                            <th className="py-3 px-4 text-center font-semibold text-gray-700">Total</th>
                            <th className="py-3 px-4 text-center font-semibold text-gray-700">New</th>
                            <th className="py-3 px-4 text-center font-semibold text-gray-700">Updated</th>
                            <th className="py-3 px-4 text-center font-semibold text-gray-700">Failed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item._id} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-4 text-gray-800 truncate max-w-xs">{item.fileName}</td>
                                <td className="py-2 px-4 text-gray-600">
                                    {new Date(item.importDateTime).toLocaleString()}
                                </td>
                                <td className="py-2 px-4 text-center font-medium">{item.total}</td>
                                <td className="py-2 px-4 text-center text-green-600 font-semibold">{item.new}</td>
                                <td className="py-2 px-4 text-center text-blue-600 font-semibold">{item.updated}</td>
                                <td className="py-2 px-4 text-center text-red-600 font-semibold">{item.failed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
