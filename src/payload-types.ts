export interface User {
    name: string;
    email: string;
    roles: ('admin' | 'user')[];
}
