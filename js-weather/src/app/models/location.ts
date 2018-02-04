// Model class that defines data for a location
// API Call: http://dataservice.accuweather.com/locations/v1/cities/autocomplete
export class Location {
    version: number;
    key: string;
    type: string;
    rank: number;
    localizedName: string;
    englishName: string;
    primaryPostalCode: string;
    region: {
        id: string;
        localizedName: string;
        englishName: string;
    }; 
    country: {
        id: string;
        localizedName: string;
        englishName: string;
    };
    administrativeArea: {
        id: string;
        localizedName: string;
        englishName: string;
        level: number;
        localizedType: string;
        englishType: string;
        countryID: string;
    };
    timeZone: {
        code: string;
        name: string;
        gmtOffset: number;
        isDaylightSaving: boolean;
        nextOffsetChange: string;
    };
    geoPosition: {
        latitude: number;
        longitude: number;
        elevation: {
            metric: {
                value: number;
                unit: string;
                unitType: number;
            };
            imperial: {
                value: number;
                unit: string;
                unitType: number;
            };
        };
    };
    isAlias: boolean;
    supplementalAdminAreas: {
        level: number;
        localizedName: string;
        englishName: string;
    };
    dataSets: [string];
}