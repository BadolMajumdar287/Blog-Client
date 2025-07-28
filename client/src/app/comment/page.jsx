"use client"
import { useState,useEffect } from "react"
import { SendHorizontal,User } from "lucide-react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { AdminAction } from "@/redux/action/admin.action"
import { CommentAction } from "@/redux/action/comment.action"
import { toast } from "sonner"



export default function CommentPage(){

       const [comment,setcomment] = useState("")
       const dispatch = useDispatch()
       const {allcomment} = useSelector(state => state.comment);
       const {admin} = useSelector(state => state.admin);
          
       async function handleCreatecomment() {

          const res = await dispatch(CommentAction.Register({comment}));
            
          if(res.payload?.message){
             toast.success(res.payload?.message);
             
          }else if(res.payload?.error){
              toast.error(res.payload?.error)
          }
       }

       async function handleGetAllComment() {

          const res = await dispatch(CommentAction.GetAll());
             
           if(res.payload?.message){
             toast.success(res.payload?.message);
             
          }else if(res.payload?.error){
              toast.error(res.payload?.error)
          }
       }
    

       async function handleSession() {

         await dispatch(AdminAction.Session());
        
        }
       
       useEffect(() => {
          handleGetAllComment()
          handleSession()
       },[])
      
    return(
        <div>
                  
                <div className="fixed top-0 left-0 right-0 flex justify-between ">
                      
                    <input className="border h-9 w-80 rounded-2xl pl-2 " 
                    id="comment" name="comment" type="comment" placeholder="Comment.."  value={comment} onChange={(e) => setcomment(e.target.value)}/>

                     <button className="mr-3" onClick={() => handleCreatecomment()} ><SendHorizontal /></button>
                </div>

                <div className="mt-17">
                    {
                        allcomment.map((item,index) => {
                             return(
                                <div key={index} className="mt-2">
                                    
                                    <div className="flex gap-2">
                                        <p className=" border w-fit h-fit rounded-full"><User size={20}/></p>
                                         <p className="text-sm">{admin?.fullname }</p>
                                    </div>

                                    <div className="ml-10 mt-2 text-xm">
                                        <p>{item.comment}</p>
                                    </div>
                                     
                                </div>
                             )
                        })
                    }
                </div>
        </div>
    )
}