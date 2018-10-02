
export interface LoginResponse {
    result?: {
       user?: User;       
    },
    error?: {
        code?: string;
        message?: string;
    }
}

interface User {
    uid?: string;
    email?: string;
}