export const login = (data) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
};
