"use cleint";
import { destorytemp, fetchtemp, storetemp, tempoApiUrl } from '@/services/tempo'
import { storevote } from '@/services/votes';
import useAccountStore from '@/stores/useAccountStore'
import { forEach } from 'lodash';
import React,{useState} from 'react'
import { toast } from 'sonner';
import useSWR from 'swr'
const usetemp = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const{account,triggerRefresh}=useAccountStore();
    const toggleSelectItem = (id) => {
        setSelectedItems(prev => 
          prev.includes(id) 
            ? prev.filter(itemId => itemId !== id) 
            : [...prev, id]
        );
      };
      const selectAllItems = () => {
        if (selectedItems.length === data?.data?.length) {
          setSelectedItems([]);
        } else {
          setSelectedItems(data?.data?.map(item => item.id));
        }
      };
      const handleVote = async() => {
        if (selectedItems.length === 0) {
          alert('Please select at least one elector');
          return;
        }
        try{
           for( const electorId of selectedItems){
            const res=await storevote({
                voter_id:account.id,
                elector_id:electorId,
                archived_at:"1",
                vote_code:`Vot-${Math.floor(Math.random()*(30001)+ 300)}`
            })
            const json=await res.json()
            if(!res.ok){
                throw new Error(json.message|| "Unkown Error")
            }
           }
        }
        catch(error){
            toast.error(error.message)
        }
        for( const electorId of selectedItems){
            try{
                const res1=await destorytemp(electorId)
                const json1=await res1.json()
                if(!res1.ok){
                   throw new Error(json1.message|| "Unkown Error")
                }
            }
            catch(error){
                toast.error(error.message)
            }
        }
        triggerRefresh()
        setSelectedItems([]);
        toast.success(`Successfully voted`);
      };
    const{data,isLoading,error}=useSWR(`${tempoApiUrl}/${account.id}`,fetchtemp,{
        revalidateOnFocus: true,
        refreshWhenHidden: true,
      })
  return {
    data,
    handleVote,
    selectAllItems,
    selectedItems,
    toggleSelectItem,
    isLoading
  }
}

export default usetemp