import { Images } from 'src/Images/entities/images.entity';
import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv'

dotenv.config()

export default{
    type:'postgres',
    host:process.env.POSTGRES_HOST as string,
    port:parseInt(process.env.POSTGRES_PORT as string,10) as number,
    username:process.env.POSTGRES_USER as string,
    password:process.env.POSTGRES_PASSWORD as string,
    datadase:process.env.POSTGRES_DATABASE as string,
    synchronize:true,
    entities: [Images]
    // migrations:['dist/**/migration/*.js'],
    // migrationsRun:true

} as DataSourceOptions