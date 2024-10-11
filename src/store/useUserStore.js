import { create } from "zustand";


const useUserStore = create((set)=>({
    user:{email:"", name:"", role:"", status:""},
    loggedIn:false,
    

    login : (data)=> set((state)=>({
        user:data,
        loggedIn:true
    })),

    logout : ()=>set((state)=>({
        user:{email:"", name:"", role:"", status:""},
        loggedIn:false
    }))


}))

export default useUserStore;