import mongoose from "mongoose";

const ticketSchema= new mongoose.Schema(
    {
        name:{type:String, default:""},
        issue:{type:String, default:""},
        priority:{type:String, default:""},
        status:{type:String, default:"open"}
    },
    {timestamps:true}
);

const ticketModel= new mongoose.model("ticket",ticketSchema)
export default ticketModel;