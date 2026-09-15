import { Context } from "hono";
import {db} from "@planly/db"
import { taskSchema } from "@planly/shared";
const getAllTasks = async (c: Context) => {
    try{
        const userId = c.get("user").id;
        const boardId = c.req.param("id");
        if(!boardId){
            return c.json({
                success:false,
                message:'Board Id Not Found'
            },{status:400})
        }
        const task = await db.task.findMany({
            where:{
                userId,
                boardId
            }
        })
        if(!task){
            return c.json({
                success:false,
                message:"Task Not found!!",
            },{status:400})
        }
        return c.json({
            success:true,
            data:task
        },{status:200})
    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        })
    }
}
const getTaskById = async (c: Context) => {
    try{
        const userId = c.get("user").id;
        const taskId = c.req.param("id");
        if(!taskId){
            return c.json({
                success:false,
                message:'Task Id Not Found'
            },{status:400})
        }
        const task = await db.task.findUnique({
            where:{
                id:taskId,
                userId
            }
        })
        if(!task){
            return c.json({
                success:false,
                message:"Task Not found!!",
            },{status:400})
        }
        return c.json({
            success:true,
            data:task
        },{status:200})
    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        })
    }
}
const createTask =  async (c: Context)=>{
    try{
        const userId = c.get("user").id;
        const boardId = c.req.param("id");
        const {name} = await c.req.json();
        const parsedData = taskSchema.safeParse({name})
        if(!parsedData.success){
            return c.json({
                success:false,
                message:'Invalid Task Name'
            },{status:400})
        }
        if(!boardId){
            return c.json({
                success:false,
                message:'Board Id Not Found'
            },{status:400})
        }

        const task = await db.task.create({
            data:{
                title:parsedData.data.name,
                userId,
                boardId
            }
        })

        return c.json({
            success:true,
            data:task
        },{status:201})

    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        })
    }
}
const updateTask = async (c: Context) => {
    try{
        const userId = c.get("user").id;
        const taskId = c.req.param("id");
        const {name} = await c.req.json();
        const parsedData = taskSchema.safeParse({name})
        if(!parsedData.success){
            return c.json({
                success:false,
                message:'Invalid Task Name'
            },{status:400})
        }
        const task = await db.task.update({
            where:{
                id:taskId,
                userId
            },
            data:{
                name:parsedData.data.name
            }
        })
        return c.json({
            success:true,
            data:task
        },{status:200})
    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        })
    }
}
const deleteTask = async (c: Context) => {
    try{
        const taskId = c.req.param("id");
        const task = await db.task.delete({
            where:{
                id:taskId,
            }
        })
        if(!task){
            return c.json({
                success:false,
                message:"Task Not Deleted!!",
            },{status:400})
        }
        return c.json({
            success:true,
            data:task
        },{status:200})
    }catch(error:any){
        c.json({
            success:false,
            message:error.message
        })
    }
}


export {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}