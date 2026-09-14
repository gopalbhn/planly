import { Context } from "hono";
import { projectSchema } from "@planly/shared"
import { db } from "@planly/db"
const createProject = async(c: Context) => {
    try{
        const {name} = await c.req.json();
        const parsedData = projectSchema.safeParse({name});
        if(!parsedData.success){
            return c.json({error:parsedData.error.format()},{status:400})
        }
        const ExistingProject = await db.project.findFirst({
            where:{
                userId:c.get("user").id
            }
        })

        if(ExistingProject ){
            const projectCount = await db.project.count({
                where:{
                    userId:c.get("user").id
                }
            })
        if(projectCount >= 3){
            return c.json({error:"You can only create up to 3 projects"},{status:400})
        }
    }
    
    const project = await db.project.create({
        data:{
            name:parsedData.data.name,
            userId:c.get("user").id
        } 
    })
    
    if(!project){
        return c.json({error:"Project creation failed"},{status:500})
    }
    
    return c.json(project,{status:201})
}catch(error:any){
    c.json({
        success:false,
        message:error.message
    })
}

}

const getAllProjects = async(c: Context) => {
   try{

    const projects = await db.project.findMany({
        where:{
            userId:c.get("user").id
        }
    })
    if(!projects){
        return c.json({error:"No projects found"},{status:404})
    }
    return c.json(projects,{status:200})
}catch(error:any){
c.json({
        success:false,
        message:error.message
    })
}
}
const getProjectById = async(c: Context) => {
    try{
    const id = c.req.param("id");
    const project = await db.project.findFirst({
        where:{
            id,
            userId:c.get("user").id
        }
    })
    if(!project){
        return c.json({error:"Project not found"},{status:404})
    }
    return c.json(project,{status:200})
    }catch(error:any){
c.json({
        success:false,
        message:error.message
    })
    }
}
const updateProject = async(c: Context) => {
    try{
    const id  = c.req.param("id");
    const { name} = await c.req.json();
    if(!id || !name ){
        return c.json({
            success:false,
            message:"Please Provide id or name"
        })
    }

    const porject = await db.project.update({
        where:{id},
        data:{name}
    })

    if(!porject){
        return c.json({
            success:false,
            message:"Unable to update project"
        })
    }
    return c.json({
        success:true,
        messsage:"Project Updated Successfully"
    })
}catch(error:any){
    c.json({
        success:false,
        message:error.message
    })
}
}
const deleteProject = async(c: Context) => {
    try{

        const id = c.req.param("id")
        if(!id){
            return c.json({
                success:false,
                message:"Please Provide id"
            },{status:400})
        }
        
        const project = await db.project.delete({
            where:{id}
    })
    
    if(!project){
        return c.json({
            success:false,
            message:"Unable to delete Project"
        },{status:400})
    }
    
    return c.json({
        success:true,
        message:"Successfully Deleted Project"
    },{status:200})
}catch(error:any){
    c.json({
        success:false,
        message:error.message
    })
}
}
export {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
}