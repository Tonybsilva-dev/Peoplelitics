import cron from 'node-cron';
import AccessSchema from '../models/Access';
import ErrorsSchema from '../models/Error';

/*

* * * * * *
| | | | | |
| | | | | day of week
| | | | month
| | | day of month
| | hour
| minute
second ( optional )

*/

let horaAtual = Date.now();


// Os dados serao apagados a cada 10 minutos
cron.schedule("*/10 * * * *", () => ErrorsSchema.deleteMany().then(
    () => console.log('ℹ️  All ErrorsData has been deleted on MongoDB')
));

// Os dados serao apagados a meia noite
cron.schedule("0 0 * * *", () => AccessSchema.deleteMany().then(
    () => console.log('ℹ️  All AccessData has been deleted on MongoDB')
));
