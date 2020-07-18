export default class GotService {
    constructor() {
        this._apiBase = 'https://eventpacerstage.azurewebsites.net/api';
    }
    authTel = async (tel) => {
        const res = await fetch(`${this._apiBase}/auth/requestCode?phone=%2B${tel}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: "include",
            mode: "no-cors"
            }
        );
        if (!res.ok) {
          throw new Error(`Could not fetch` +
            `, received ${res.status}`);
        }
        return await res.json();
    }
}
