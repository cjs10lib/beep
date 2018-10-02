import { User } from "../../models/user/user.model";

const users: User[] = [
    { firstName: 'Christian', lastName: 'Onwe', avatar: '../../assets/imgs/avatar.png', email: 'christainonwe@gmail.com' },
    { firstName: 'Vanessa', lastName: 'Damalie', avatar: '../../assets/imgs/avatar.png', email: 'vanessaDamalie@gmail.com' },
    { firstName: 'Denis', lastName: 'Damalie', avatar: '../../assets/imgs/avatar.png', email: 'denisD@gmail.com' },
    { firstName: 'Chinaza', lastName: 'Onwe', avatar: '../../assets/imgs/avatar.png', email: 'chiBabe@gmail.com' }
];

export const USERS_LIST = users;