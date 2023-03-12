import { MIGRATIONS } from './migrations/index';
import { DataSource, DataSourceOptions } from 'typeorm';
 
export const dataSourceOptions:DataSourceOptions ={
        type:'postgres',
        host:'localhost',
        port:5432,
        username:'postgres',
        password:'root',
        database:'images',
        entities: ['./dist/entities/images.entity.js'],
        migrations:MIGRATIONS
}
const dataSource = new DataSource(dataSourceOptions);
export default dataSource
