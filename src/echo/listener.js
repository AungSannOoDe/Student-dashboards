import Pusher from  "pusher-js"
import Echo from "laravel-echo"
import useAccountStore from "@/stores/useAccountStore"
window.pusher=require("pusher-js")
window.Echo=new Echo({
    broadcaster:"reverb",
    key:"c417igcczrcwqrr5j8mc",
    wsHost:"localhost",
    wsPort:8080,
    forceTLS:false,
    encrypted:false,
    enabledTransports:["ws","wss"],
    auth:{
        Authorization:`Bearer ${useAccountStore.getState().token}`
    }
})