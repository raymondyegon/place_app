import { LocationDetails, PlaceDetails } from "../services/PlacesService";
import faker from 'faker';


function createRandomLocation(): LocationDetails {
    return {
        city: faker.address.city(),
        country: faker.address.country()

    }
}

function createRandomPlace(): PlaceDetails {
    return {
        id: faker.datatype.uuid(),
        name: faker.lorem.word(),
        rating: faker.datatype.number(),
        image: faker.image.image(),
        location: faker.address.streetName(),
        category: faker.address.city(),
    }
}


export function randomLocationMock(): LocationDetails {
    return createRandomLocation();
}


export function randomPlacesMock(): Array<PlaceDetails> {

    console.log(createRandomPlace());

    const places: PlaceDetails[] = [];

    Array.from({ length: 10 }).forEach(() => {
        places.push(createRandomPlace());
    });


    return places;
}