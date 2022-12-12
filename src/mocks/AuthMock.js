import { nanoid } from '@reduxjs/toolkit'
import faker from 'faker';
import { User, UserResponse } from '../services/AuthService';


const token = nanoid();

function createRandomUser(): User {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);

    return {
        email,
        firstName,
        lastName,
        id: faker.datatype.uuid(),
        avatar: faker.image.image(),
        registeredAt: faker.date.past(),
    };
}

export function loginMockResponse(): UserResponse {
    return {
        user: createRandomUser(),
        token: token
    };
}