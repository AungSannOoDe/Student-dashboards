import React from 'react'
import YearRows from './YearRows'

const YearTable = ({ data, mutate }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th className="px-4 py-2 "> #</th>
                        <th className="px-4 py-2 ">Years</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((data, index) => (
                            <YearRows key={index} token={data} mutate={mutate} />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="5"
                                className="px-4 py-6 text-center text-gray-500 text-sm"
                            >
                                {t('noData')}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default YearTable