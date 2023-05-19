import { environment as ENV } from 'environments/environment';

export const configHeader = {
    'Content-Type': 'application/json',
    'air-token': localStorage.getItem(ENV.ls) || '',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache'
}