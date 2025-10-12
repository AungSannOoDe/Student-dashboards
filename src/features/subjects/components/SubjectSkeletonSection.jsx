import Sortable from '@/components/Sortable'
import React from 'react'
import SubjectSkeletonRows from './SubjectSkeletonRows'

const SubjectSkeletonSection = ({ t }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">#</th>
                        <th scope="col" className="px-4 py-3">
                            {t('skeleton.year', { defaultValue: 'Year' })}
                        </th>
                        <th scope="col" className="px-4 py-3">
                            {t('skeleton.subject', { defaultValue: 'Subject' })}
                        </th>
                        <th scope="col" className="px-4 py-3">
                            {t('skeleton.description', { defaultValue: 'Description' })}
                        </th>
                        <th scope="col" className="px-4 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(19).fill(0).map((_, index) => (
                            <SubjectSkeletonRows key={index} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SubjectSkeletonSection