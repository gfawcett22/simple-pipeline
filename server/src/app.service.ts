import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): User[] {
    var users: User[];
    users = [
      {
        id: 1,
        name: "Bob",
        address: "123 Cherry Street",
        city: "Cleveland",
        zip: 44445
      },
      {
        id: 2,
        name: "Billy",
        address: "321 Main Street",
        city: "Bay Village",
        zip: 44156
      },
      {
        id: 4,
        name: "Josie",
        address: "345 Plum Street",
        city: "Westlake",
        zip: 44145
      }
    ]

    return users;
  }
}
