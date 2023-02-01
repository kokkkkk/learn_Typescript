import { ZodError, z } from 'zod'

const configSchema = z.object({
    PORT: z.string().default("3000"),
    API_URL: z.string().url(),
    API_KEY: z.string()
})

export const loadConfig = () =>{
    try{
        const config = configSchema.parse(process.env)
        return{
            port: Number(config.PORT),
            apiUrl: config.API_URL,
            apiKey: config.API_KEY,
        }
    }catch(error){
        if(error instanceof ZodError){
            console.error('Invalid config:',error)
            process.exit(1)
        }
    }
}