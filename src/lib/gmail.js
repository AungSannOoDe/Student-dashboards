import { auth } from "@/firebase/clientApp";
import { fetchSignInMethodsForEmail } from "firebase/auth";

export  async function checkGmailExists(email) {
    console.log(email);
  try {
    const methods = await fetchSignInMethodsForEmail(auth, email);
    return  methods.length === 0;
  } catch (error) {
    console.error("Error checking Gmail:", error);
    return false;
  }
}
