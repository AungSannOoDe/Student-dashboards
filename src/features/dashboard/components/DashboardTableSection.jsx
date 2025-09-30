"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { updateChampion } from "@/services/electors";
import useAccountStore from "@/stores/useAccountStore";
import { useEffect } from "react";

const DashboardTableSection = ({ dashboardData: { electors }, t }) => {
  const { VoteFinal } = useAccountStore();

  useEffect(() => {
    if (VoteFinal === 1 && Array.isArray(electors) && electors.length > 0) {
      const genderGroups = electors.reduce((acc, curr) => {
        acc[curr.gender] = acc[curr.gender]
          ? [...acc[curr.gender], curr]
          : [curr];
        return acc;
      }, {});
      const findDuplicates = (list) => {
        const voteMap = list.reduce((acc, curr) => {
          acc[curr.votes] = acc[curr.votes]
            ? [...acc[curr.votes], curr]
            : [curr];
          return acc;
        }, {});
        return Object.values(voteMap)
          .filter((group) => group.length > 1)
          .flat()
          .map((item) => item.elector_id);
      };
      const maleDuplicates = findDuplicates(genderGroups["male"] || []);
      const femaleDuplicates = findDuplicates(genderGroups["female"] || []);
      const allDuplicateIds = [...maleDuplicates, ...femaleDuplicates];
    if (allDuplicateIds.length > 0) {
      const updateAllDuplicates = async () => {
        try {
         await Promise.all(
          allDuplicateIds.map(async (item) => {
             const res = await updateChampion(item);
            const json = await res.json();
            if (!res.ok) throw new Error(json.message || 'Unknown Error');
            toast.success(json.message);
          })
        );
        }
        catch(error){

        }
      updateAllDuplicates();
    }
    }
    else{
      console.log("eror");
    }
    }
  }, [VoteFinal, electors]);
  return (
    <section className="w-full mt-20">
      <div>
        <div className="overflow-x-auto">
          <h1>{t("VoteTable")}</h1>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  {t("EleName")}
                </th>
                <th scope="col" className="px-4 py-3">
                  {t("Image")}
                </th>
                <th scope="col" className="px-4 py-3">
                  {t("Gender")}
                </th>
                <th scope="col" className="px-4 py-3">
                  {t("vote")}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(electors) && electors.length > 0 ? (
                electors.map((item,index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-4 py-3">
                      <Avatar className="rounded-lg">
                        <AvatarImage
                          src="https://github.com/evilrabbit.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                    </td>
                    <td className="px-4 py-3">{item.gender}</td>
                    <td className="px-4 py-3">{item.votes}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-4 py-3 text-center">
                    There is no data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashboardTableSection;
