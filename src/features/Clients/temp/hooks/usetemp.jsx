"use cleint";
import { destorytemp, fetchtemp, storetemp, tempoApiUrl } from '@/services/tempo'
import { storevote } from '@/services/votes';
import useAccountStore from '@/stores/useAccountStore'
import { forEach } from 'lodash';
import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import useSWR from 'swr'
const usetemp = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const{register,reset,handleSubmit}=useForm();
    const{account,refreshVote,triggerVote ,setAccount}=useAccountStore();
   const{data,isLoading,error,mutate}=useSWR(`${tempoApiUrl}/${account.id}`,fetchtemp,{
    revalidateOnFocus: true,
    refreshWhenHidden: true,
  })
  useEffect(()=>{

  },[refreshVote])
  const toggleSelectItem = (electorId, tempId) => {
    setSelectedItems(prev => {
      const exists = prev.find(item => item.electorId === electorId);
      if (exists) {
        return prev.filter(item => item.electorId !== electorId);
      } else {
        return [...prev, { electorId, tempId }];
      }
    });
  };
  const selectAllItems = () => {

    if (selectedItems.length === data?.data?.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data?.data?.map(item => ({
        electorId: item.elector.id,
        tempId: item.id,
        gender:item.elector.gender
      })));
    }
  };
  const onSubmit = async () => {
    if (selectedItems.length === 0) {
      toast.error('Please select at least one elector');
      return;
    }
    try {
      await Promise.all(
        selectedItems.map(async (item) => {
          const res = await storevote({
            voter_id: account.id,
            elector_id: item.electorId,
            archived_at: 1,
            vote_code: `Vot-${Math.floor(Math.random() * 30001 + 300)}`,
          }); 
          const json = await res.json();
          if (!res.ok) throw new Error(json.message || 'Unknown Error');
          toast.success(json.message);
          setAccount(json?.data?.voter); 
          triggerVote(); 
        })
      );
      await Promise.all(
        selectedItems.map(async (item) => {
          const res = await destorytemp(item.tempId);
          const json = await res.json();
          if (!res.ok) throw new Error(json.message || 'Unknown Error');
        })
      );
      setSelectedItems([]);
      mutate();
      toast.success('Successfully voted');

    } catch (error) {
      toast.error(error.message);
    }
  };

   
  return {
    data,
    selectAllItems,
    selectedItems,
    toggleSelectItem,
    isLoading,
    refreshVote,
    triggerVote,
    mutate,
    register
    ,reset,
    onSubmit,
  handleSubmit
  }
}

export default usetemp