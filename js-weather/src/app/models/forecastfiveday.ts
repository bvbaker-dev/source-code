// Model class that defines data for the five day forecast for a location
// API Call: http://dataservice.accuweather.com/forecasts/v1/daily/5day/{id}
export class ForecastFiveDay {
    Headline: {
        EffectiveDate: string;
        EffectiveEpochDate: number;
        Severity: number;
        Text: string;
        Category: string;
        EndDate: string;
        EndEpochDate: number;
        MobileLink: string;
        Link: string;
    }
    DailyForecasts: [
        {
            Date: string;
            EpochDate: number;
            Temperature: {
                Minimum: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
                Maximum: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            }
            Day: {
                Icon: number;
                IconPhrase: string;
            }
            Night: {
                Icon: number;
                IconPhrase: string;
            }
            Sources: [string];
            MobileLink: string;
            Link: string;
        }
    ]
}