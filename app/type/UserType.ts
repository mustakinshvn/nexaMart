export type UserType = {
    id: number;
    username: string;
    email: string;
    name: {
        firstname: string;
        lastname: string;
    },
    phone: string;
    address: {
        street: string;
        city:  string;
        zipcode: string;
        number?: number;
        geolocation?: {
            lat: string;
            long: string;
        }
    };
}