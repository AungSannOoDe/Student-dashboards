"use client"
import React, { useState, useMemo } from 'react'
import AblumCreateForm from './AblumCreateForm'
import useSWR from 'swr'
import { electorNameUrl, fetchElectors } from '@/services/electors'
import { ablumApiUrl, fetchablum, gettingAblums } from '@/services/ablum'
import { useTranslations } from 'next-intl'

const AblumCreateSection = () => {
  const t = useTranslations('AlbumCreate');
  const [selectedElector, setSelectedElector] = useState(null)
  const { data, isLoading, error } = useSWR(electorNameUrl, fetchElectors, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  })
  const { data: albums, isLoading: albumLoading, error: albumError } = useSWR(ablumApiUrl, gettingAblums)
 
  console.log(albums);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedElector(value ? parseInt(value) : null)
  }

  // Check if selected elector already has an album by comparing IDs
  const hasExistingAlbum = useMemo(() => {
    if (!selectedElector || !albums?.data) return false;
    
    console.log('Selected Elector ID:', selectedElector);
    console.log('All Albums:', albums.data);
    
    // Check if any album's elector_id equals the selected elector ID
    const exists = albums.data.some(album => {
      console.log('Album elector_id:', album.elector_id, 'Type:', typeof album.elector_id);
      console.log('Selected elector:', selectedElector, 'Type:', typeof selectedElector);
      return album.elector_id === selectedElector;
    });
    
    console.log('Has existing album:', exists);
    return exists;
  }, [selectedElector, albums?.data]);

  // Get existing album for the selected elector
  const existingAlbum = useMemo(() => {
    if (!selectedElector || !albums?.data) return null;
    
    return albums.data.find(album => 
      album.elector_id === selectedElector
    );
  }, [selectedElector, albums?.data]);

  const selectedElectorName = selectedElector 
    ? data?.data?.find(elector => elector.id === selectedElector)?.elector_name 
    : '';

  return (
    <section className='pl-6 space-y-6'>
      <div className="flex justify-between items-center">
        <h1 className='text-2xl font-bold text-gray-800'>{t('title')}</h1>
        
        {/* Elector Selection */}
        <div className="flex flex-col gap-2">
          <label htmlFor="elector-select" className="text-sm font-medium text-gray-700">
            {t('selectElector')}
          </label>
          <select 
            id="elector-select"
            onChange={handleSelectChange}
            value={selectedElector || ''}
            className='border border-gray-300 rounded-lg px-4 py-2 min-w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            disabled={isLoading}
          >
            <option value="">{t('chooseElector')}</option>
            {isLoading ? (
              <option disabled>{t('loadingElectors')}</option>
            ) : error ? (
              <option disabled>{t('failedLoadElectors')}</option>
            ) : !data?.data?.length ? (
              <option disabled>{t('noElectorsAvailable')}</option>
            ) : (
              data.data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.elector_name}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* Status Information */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-2">{t('status')}:</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">{t('selectedElector')}:</span>{' '}
            {selectedElector ? (
              <span className="text-green-600">
                {selectedElectorName} ({t('id')}: {selectedElector})
              </span>
            ) : (
              <span className="text-red-500">{t('noneSelected')}</span>
            )}
          </div>
          <div>
            <span className="font-medium">{t('electorsLoaded')}:</span>{' '}
            <span className={data?.data?.length ? "text-green-600" : "text-yellow-600"}>
              {isLoading ? t('loading') : data?.data?.length || 0}
            </span>
          </div>
          <div>
            <span className="font-medium">{t('albumStatus')}:</span>{' '}
            {selectedElector ? (
              hasExistingAlbum ? (
                <span className="text-orange-500">{t('albumExists')}</span>
              ) : (
                <span className="text-green-500">{t('canCreateAlbum')}</span>
              )
            ) : (
              <span className="text-gray-500">-</span>
            )}
          </div>
          <div>
            <span className="font-medium">{t('albumsLoaded')}:</span>{' '}
            <span className={albums?.data?.length ? "text-green-600" : "text-yellow-600"}>
              {albumLoading ? t('loading') : albums?.data?.length || 0}
            </span>
          </div>
        </div>
      </div>
      
      {/* Show existing album info or create form */}
      {selectedElector ? (
        <div className="border-t pt-6">
          {hasExistingAlbum ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">!</span>
                </div>
                <h2 className="text-xl font-semibold text-yellow-800">
                  {t('albumExistsTitle')}
                </h2>
              </div>
              
              <div className="space-y-3">
                <p className="text-yellow-700">
                  {t.rich('albumExistsMessage', {
                    strong: (chunks) => <strong>{chunks}</strong>,
                    name: selectedElectorName,
                    id: selectedElector
                  })}
                </p>
                
                {existingAlbum && (
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2">{t('existingAlbumDetails')}:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium">{t('albumId')}:</span> {existingAlbum.id}
                      </div>
                      <div>
                        <span className="font-medium">{t('electorId')}:</span> {existingAlbum.elector_id}
                      </div>
                      {existingAlbum.album_name && (
                        <div className="col-span-2">
                          <span className="font-medium">{t('albumName')}:</span> {existingAlbum.album_name}
                        </div>
                      )}
                      {existingAlbum.description && (
                        <div className="col-span-2">
                          <span className="font-medium">{t('description')}:</span> {existingAlbum.description}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <p className="text-yellow-600 text-sm">
                  {t('cannotCreateAlbum')}
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {t.rich('createAlbumFor', {
                    strong: (chunks) => <span className="text-blue-600">{chunks}</span>,
                    name: selectedElectorName
                  })}
                </h2>
                <p className="text-gray-600">{t('electorId')}: {selectedElector}</p>
                <p className="text-green-600 text-sm mt-1">
                  ✓ {t('canCreateNewAlbum')}
                </p>
              </div>
              <AblumCreateForm electorId={selectedElector} />
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-100 rounded-lg">
          <p className="text-gray-500 text-lg">
            {t('selectElectorPrompt')}
          </p>
        </div>
      )}
    </section>
  )
}

export default AblumCreateSection