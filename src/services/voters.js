export const  voterApiUrl=`${process.env.NEXT_PUBLIC_API_URL}/voter-profile`;
export const checkProfile = async (updateToken) => {
    return fetch(`${voterApiUrl}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${updateToken}`,
      },
    });
  };