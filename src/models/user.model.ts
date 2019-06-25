import { ID } from '@datorama/akita';

export interface User {
    // id: ID;
    nombre: string;
    username: string;
    isLogged: boolean;
    // language: languages;
    // timeZone: timezones;
    language: string;
    timeZone: string;
    lastLogin: number;
}

export function createUser():User {
    return {
         nombre : '', username : null, isLogged : false, language : null, timeZone:null,lastLogin:Date.now()
    };
}

// export enum timezones {
//     "Etc/GMT-12" = "GMT-12:00",
//     "Etc/GMT-11" = "GMT-11:00",
//     "Pacific/Midway" = "GMT-11:00",
//     "America/Adak" = "GMT-10:00",
//     "America/Anchorage" = "GMT-09:00",
//     "Pacific/Gambier" = "GMT-09:00",
//     "America/Dawson_Creek" = "GMT-08:00",
//     "America/Ensenada" = "GMT-08:00",
//     "America/Los_Angeles" = "GMT-08:00",
//     "America/Chihuahua" = "GMT-07:00",
//     "America/Denver" = "GMT-07:00",
//     "America/Belize" = "GMT-06:00",
//     "America/Cancun" = "GMT-06:00",
//     "America/Chicago" = "GMT-06:00",
//     "Chile/EasterIsland" = "GMT-06:00",
//     "America/Bogota" = "GMT-05:00",
//     "America/Havana" = "GMT-05:00",
//     "America/New_York" = "GMT-05:00",
//     "America/Caracas" = "GMT-04:30",
//     "America/Campo_Grande" = "GMT-04:00",
//     "America/Glace_Bay" = "GMT-04:00",
//     "America/Goose_Bay" = "GMT-04:00",
//     "America/Santiago" = "GMT-04:00",
//     "America/La_Paz" = "GMT-04:00",
//     "America/Argentina/Buenos_Aires" = "GMT-03:00",
//     "America/Montevideo" = "GMT-03:00",
//     "America/Araguaina" = "GMT-03:00",
//     "America/Godthab" = "GMT-03:00",
//     "America/Miquelon" = "GMT-03:00",
//     "America/Sao_Paulo" = "GMT-03:00",
//     "America/St_Johns" = "GMT-03:30",
//     "America/Noronha" = "GMT-02:00",
//     "Atlantic/Cape_Verde" = "GMT-01:00",
//     "Europe/Belfast" = "GMT",
//     "Africa/Abidjan" = "GMT",
//     "Europe/Dublin" = "GMT",
//     "Europe/Lisbon" = "GMT",
//     "Europe/London" = "GMT",
//     "UTC" = "UTC",
//     "Africa/Algiers" = "GMT+01:00",
//     "Africa/Windhoek" = "GMT+01:00",
//     "Atlantic/Azores" = "GMT+01:00",
//     "Atlantic/Stanley" = "GMT+01:00",
//     "Europe/Amsterdam" = "GMT+01:00",
//     "Europe/Belgrade" = "GMT+01:00",
//     "Europe/Brussels" = "GMT+01:00",
//     "Africa/Cairo" = "GMT+02:00",
//     "Africa/Blantyre" = "GMT+02:00",
//     "Asia/Beirut" = "GMT+02:00",
//     "Asia/Damascus" = "GMT+02:00",
//     "Asia/Gaza" = "GMT+02:00",
//     "Asia/Jerusalem" = "GMT+02:00",
//     "Africa/Addis_Ababa" = "GMT+03:00",
//     "Asia/Riyadh89" = "GMT+03:00",
//     "Europe/Minsk" = "GMT+03:00",
//     "Asia/Tehran" = "GMT+03:30",
//     "Asia/Dubai" = "GMT+04:00",
//     "Asia/Yerevan" = "GMT+04:00",
//     "Europe/Moscow" = "GMT+04:00",
//     "Asia/Kabul" = "GMT+04:30",
//     "Asia/Tashkent" = "GMT+05:00",
//     "Asia/Kolkata" = "GMT+05:30",
//     "Asia/Katmandu" = "GMT+05:45",
//     "Asia/Dhaka" = "GMT+06:00",
//     "Asia/Yekaterinburg" = "GMT+06:00",
//     "Asia/Rangoon" = "GMT+06:30",
//     "Asia/Bangkok" = "GMT+07:00",
//     "Asia/Novosibirsk" = "GMT+07:00",
//     "Etc/GMT+8" = "GMT+08:00",
//     "Asia/Hong_Kong" = "GMT+08:00",
//     "Asia/Krasnoyarsk" = "GMT+08:00",
//     "Australia/Perth" = "GMT+08:00",
//     "Australia/Eucla" = "GMT+08:45",
//     "Asia/Irkutsk" = "GMT+09:00",
//     "Asia/Seoul" = "GMT+09:00",
//     "Asia/Tokyo" = "GMT+09:00",
//     "Australia/Adelaide" = "GMT+09:30",
//     "Australia/Darwin" = "GMT+09:30",
//     "Pacific/Marquesas" = "GMT+09:30",
//     "Etc/GMT+10" = "GMT+10:00",
//     "Australia/Brisbane" = "GMT+10:00",
//     "Australia/Hobart" = "GMT+10:00",
//     "Asia/Yakutsk" = "GMT+10:00",
//     "Australia/Lord_Howe" = "GMT+10:30",
//     "Asia/Vladivostok" = "GMT+11:00",
//     "Pacific/Norfolk" = "GMT+11:30",
//     "Etc/GMT+12" = "GMT+12:00",
//     "Asia/Anadyr" = "GMT+12:00",
//     "Asia/Magadan" = "GMT+12:00",
//     "Pacific/Auckland" = "GMT+12:00",
//     "Pacific/Chatham" = "GMT+12:45",
//     "Pacific/Tongatapu" = "GMT+13:00",
//     "Pacific/Kiritimati" = "GMT+14:00",
// }
// export type languages = 'ES' | 'EN';


