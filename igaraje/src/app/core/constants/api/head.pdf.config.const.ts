import { environment as ENV } from 'environments/environment';
export const configHeaderPDF = {
    'Content-Type': 'application/pdf',
    'air-token': localStorage.getItem(ENV.ls) || '',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache'
}
