import mongoose from 'mongoose'

const Connection = async (username , password) => {
    const URL = `mongodb+srv://${username}:${password}@crud-webapp.nnc5ipl.mongodb.net/`
    try{
        await mongoose.connect(URL , { useUnifiedTopology : true , useNewUrlParser : true })
        console.log('Database Connectes Succesfully')
    }catch(error) {
        console.log('Error While Connecting With The Database',error)
    }
}

export default Connection ;