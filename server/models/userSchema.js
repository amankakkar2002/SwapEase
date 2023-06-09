const jwt=require("jsonwebtoken");
const mongoose=require('mongoose');
const bcrypt=require("bcryptjs");
const userSchema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        enrollment:{
            type:Number,
            required:true
        },
        sector:{
            type:Number,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        cpassword:{
            type:String,
            required:true
        },
        extra:{
            type:String
        },
        course:
        {
            type:String
        },
        branch:
        {
            type:String
        },
        batch:
        {
            type:String
        },
        year:
        {
            type:String
        },
        esubject:
        {
            type:String
        },
        dsubject:
        {
            type:String
        },
        date:
        {
            type:Date,
            default:Date.now
        },
        messages:[
        {
            name:
        {
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        enrollment:{
            type:Number,
            required:true
        },
        message:
        {
            type:String,
            required:true
        }
        }],
        tokens:[{
            token:
            {
                type:String,
                required:true
            }
        }
        ]
    }
)

userSchema.pre('save', async function (next)
{
    if(this.isModified("password"))
    {
        // console.log("hello");
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
})

//we are generating tokens....

userSchema.methods.generateAuthToken = async function()
{
    try {
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

// storing the message

userSchema.methods.addMessage=async function(name,email,enrollment,message)
{
    try{
        this.messages=this.messages.concat({name,email,enrollment,message});
        await this.save();
        return this.messages;
    }catch(err)
    {
        console.log(err)
    }
}

//Collection creation....
const User=new mongoose.model('USER',userSchema);

module.exports=User;