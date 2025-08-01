"use client"

import { useParams } from "next/navigation"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { toast } from "sonner";
import { CommentAction } from "@/redux/action/comment.action";
import { SendHorizontal,User } from "lucide-react";
import { CommentLikeAction } from "@/redux/action/comment.like.action";
import { useRouter } from "next/navigation";


export default function commentPage(){
     
   const params = useParams();
   const blogId = params.id;
   const dispatch = useDispatch();
   const [comment,setcomment] = useState("");
   const {allcomment} = useSelector(state => state.comment);
   const [deletecomment,setdeletecomment] = useState("");
   const [commentlike,setcommentlike] = useState(false);
   const {allCommentLike} = useSelector(state => state.commentlike);
   const {user} = useSelector(state => state.auth);
   const { admin } = useSelector(state => state.admin)
   const router = useRouter();
   

   
   

  
   const filtered = allcomment.filter(c => c.blogId === blogId);

   
  
  
   async function hundlecreateComment() {
            
        if(!user && !admin) return router.push("/auth/login");

         const res = await dispatch(CommentAction.Register({blogId,comment:comment}));

         if(res.payload?.message){
            toast.success(res.payload?.message);
            setcomment("")
         }else if(res.payload?.error){
            toast.error(res.payload?.error);
         }

   }


   async function handleGetAllComment() {
               
        const res = await dispatch(CommentAction.GetAll());

        if(res.payload?.message){
            toast.success(res.payload?.message);
        }else if(res.payload?.error){
            toast.error(res.payload?.error);
        }
   }
   


   async function handleGetById(commentId) {
     
    const res = await dispatch(CommentAction.GetById({commentId}));
     
   }


   async function hundleDeleteComment(commentId) {
    
   const res = await dispatch(CommentAction.CommentDelete(commentId))
            
     if(res.payload?.message){
            toast.success(res.payload?.message);
        }else if(res.payload?.error){
            toast.error(res.payload?.error);
        }
   }



   async function handleCommentLikeCraete(blogId,commentlikeid,commentlike) {
    
       if(!user && !admin) return router.push("/auth/login");
          
    const res = await dispatch(CommentLikeAction.Register({blogId, commentId:commentlikeid,like:commentlike}));
 
    if(res.payload?.message){
        toast.success(res.payload?.message)
    }else if(res.payload?.error){
        toast.error(res.payload?.error)
    }
    
   }

  


   async function hundlegetallCommentlike() {
         
           const res = await dispatch(CommentLikeAction.GetAll())

   }

   useEffect(() => {
    handleGetAllComment()
    hundlegetallCommentlike()
   },[])

   



    return(
        
     
        <div>

            
           <div className=" mt-12 flex justify-between">
                 <input className="border h-9 w-60 rounded-2xl pl-2 ml-2  " 
                 placeholder="Comment..." id="comment" name="comment" type="comment" value={comment} onChange={(e) => setcomment(e.target.value)} />
                 <button className=" mr-25" onClick={() => hundlecreateComment()}><SendHorizontal /></button>
                 
           </div>

                             
                                <div>
                                     {
                                        deletecomment && (
                                            <div className=" fixed z-12 border h-30 w-40 mt-50 ml-30 bg-cyan-700 ">
                                            <p className="p-2 ">You can delete this comment.</p>
                                              <div className="flex justify-between mt-4 p-2">
                                             <button onClick={() => setdeletecomment(null)} className="text-emerald-500 ">Cencel</button> 
                                             <button onClick={() => hundleDeleteComment(deletecomment)} className="text-red-400">Delete</button>
                                              </div>
                                            </div>

                                        )
                                            
                                        
                                       }
                                  </div>
            




           <div>
            {
                filtered.map((item) => {
                 
                    const comenter = item?.adminId?.fullname || item?.userId?.name || "unknown"
                     const AllCommentLikeCount = allCommentLike.filter(c => c.blogId === blogId &&  c.commentId === item._id).length
                    return(
                       <div key={item._id} className="">
                         
                             <div className="flex mt-6 ml-2">
                                 < p className="border h-fit w-fit  rounded-full bg-cyan-800">< User size={30}/></p>
                                  
                                  <div className="h-fit w-fit rounded-2xl ml-2 bg-cyan-800 p-2 ">
                                        <p className="text-2xl">{comenter}</p>
                                        <p className="text-xl">{item.comment}</p>
                                         
                                  </div>
                                  
                                  <button></button>
                                  
                             </div>
                                   
                                   <div className="ml-25">
                                    
                                     
                                    
                                    <button className="mr-8 text-xl text-cyan-500" onClick={() =>{
                                        
                                        setcommentlike(true)
                                        handleCommentLikeCraete(blogId,item._id,commentlike)}}>{AllCommentLikeCount} Like</button>
                                    
                                    <button className="text-xl text-red-300" onClick={() => setdeletecomment(item._id)}>Delete</button>

                                      
                                  </div>

                                  

                                  
                         
                       </div>
                       
                    )
                })
            }
           </div>

                                
            
        </div>
    )
}