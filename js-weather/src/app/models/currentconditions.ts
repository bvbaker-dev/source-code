// Model class that defines data for current conditions for a location
// API Call: http://dataservice.accuweather.com/currentconditions/v1/{id}
export class CurrentConditions {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText; string;
    WeatherIcon: number;
    LocalSource: {
        ID: number;
        Name: string;
        WeatherCode: string;
    }
    IsDayTime: true;
    Temperature: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    }
    MobileLink: string;
    Link: string;
}