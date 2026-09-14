import { db } from "@planly/db"
import { boardSchema } from "@planly/shared"
import { Context } from "hono"
const createBoard = async(c: Context) => {
 try{
     const projectId = c.req.param("id")
     const userId = c.get('user').id
     const {name} = await c.req.json()
    const parsedData = boardSchema.safeParse({name});
     if(!projectId){
        return c.json({
            success:false,
            message:'Project Id Not Found'
        },{status:400})
     }

     const board = await db.board.create({
        data:{
            name,
            projectId,
            userId
        }
     })

     if(!board){
        return c.json({
            success:false,
            message:"Unable to create Board"
        },{status:400})
     }

     return c.json({
        success:true,
        message:"Board Created Successfully"
     })

    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        },{status:500})
    }

}
const getAllBoards = async(c: Context) => {
    try{
        const projectId = c.req.param("id");
        if(!projectId){
            return c.json({
            success:false,
            message:'Project Id Not Found'
        },{status:400})
        }
        const board = await db.board.findMany({
            where:{
                userId:c.get("user").id,
                projectId
            }
        })

        if(!board){
            return c.json({
                success:false,
                message:"Board Not found!!",
            },{status:400})
        }

    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        },{status:500})
    }
}
const getBoardById = async(c: Context) => {
    try{
        const id = c.req.param("id");
    if(!id){
        return c.json({
            success:false,
            message:'Board Id Not Found'
        },{status:400})
     }

     const board = await db.board.findFirst({
        where:{
            id
        }
     })

     if(!board){
        return c.json({
            success:false,
            message:"Board Not found"
        },{status:404})
     }

     return c.json({
        success:true,
        board
     },{status:200})

    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        },{status:500})
    }
}
const updateBoard = async(c: Context) => {
    try{
        const id = c.req.param("id");
        const {name} = await c.req.json()
        if(!id){
        return c.json({
            success:false,
            message:'Board Not Found'
        },{status:400})
     }
     const board = db.board.update({
        where:{id},
        data:{name}
     })

     if(!board){
        return c.json({
            success:false,
            message:"Unable to Update Board"
        })
     }

     return c.json({
        success:true,
        message:"Updated Successfully"
     })

    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        },{status:500})
    }
}
const deleteBoard = async(c: Context) => {
    try{
   const id = c.req.param("id");
        const {name} = await c.req.json()
        if(!id){
        return c.json({
            success:false,
            message:'Board Not Found'
        },{status:400})
     }

     const board = await db.board.delete({
        where:{id}
     })

     if(!board){
        return c.json({
            success:false,
            message:"Unable to delete"
        },{status:400})
     }

     return c.json({
        success:false,
        message:"Deleted Successfully"
     })
    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        },{status:500})
    }
}

export {
    createBoard,
    getAllBoards,
    getBoardById,
    updateBoard,
    deleteBoard
}