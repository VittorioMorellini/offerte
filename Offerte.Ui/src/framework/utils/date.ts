import { format, parseISO } from 'date-fns';

export function now(): string {
    return format(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS');
}

// export function utcNow(): string { 
//     return moment.utc().format('YYYY-MM-DDTHH:mm:ss.SSS');
// }

export function dateNow(): Date {
    return new Date();
}

// export function dateUtcNow(): Date {
//     return moment.utc().toDate();
// }

// export function formatUTC(date: moment.Moment): string {

//     return moment(date).add(moment(date).utcOffset(), 'm').utc().format();
// }

function baseFormat(date: string, dateFormat: string) {
    // TODO: localizzata
    return date ? format(parseISO(date), dateFormat) : '';
}

export function formatDate(date: string, dateFormat?: string) {
    return baseFormat(date, dateFormat || 'dd/MM/yyyy');
}

export function formatDateTime(date: string, dateFormat?: string) {
    return baseFormat(date, dateFormat || 'dd/MM/yyyy HH:mm');
}

export function formatDateTimeFull(date: string, dateFormat?: string) {
    return baseFormat(date, dateFormat || 'dd/MM/yyyy HH:mm:ss.SSS');
}