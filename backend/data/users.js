import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true,
    },
    {
        name: 'Sally Sucks',
        email: 'sally@email.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: false,
    },
    {
        name: 'Leeroy Jenkins',
        email: 'leeroy69@email.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: false,
    },
];

export default users;