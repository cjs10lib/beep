import { Profile } from "../../models/profile/profile.model";

const users: Profile[] = [
    { firstName: 'Christian', lastName: 'Onwe', avatar: '../../assets/imgs/avatar.png', email: 'christainonwe@gmail.com', dateOfBirth: new Date() },
    { firstName: 'Vanessa', lastName: 'Damalie', avatar: '../../assets/imgs/avatar.png', email: 'vanessaDamalie@gmail.com', dateOfBirth: new Date() },
    { firstName: 'Denis', lastName: 'Damalie', avatar: '../../assets/imgs/avatar.png', email: 'denisD@gmail.com', dateOfBirth: new Date() },
    { firstName: 'Chinaza', lastName: 'Onwe', avatar: '../../assets/imgs/avatar.png', email: 'chiBabe@gmail.com', dateOfBirth: new Date() }
];

export const USERS_LIST = users;