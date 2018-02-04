// Model class that defines data for the twelve hour forecast for a location
// API Call: http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/{id}
export class ForecastTwelveHour {
    DateTime: string;
    EpchDateTime: number;
    WeatherIcon: number;
    IconPhrase: string;
    IsDaylight: boolean;
    Temperature: {
        Value: number;
        Unit: string;
        UnitType: number;
    }
    PrecipitationProbability: number;
    MobileLink: string;
    Link: string;
}