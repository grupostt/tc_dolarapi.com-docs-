async function getCostaRicaHolidays(year) {
    try {
        const response = await fetch(
            `https://openholidaysapi.org/PublicHolidays?countryIsoCode=MX&validFrom=${year}-01-01&validTo=${year}-12-31&languageIsoCode=es`
        );
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        
        const holidays = await response.json();
        return holidays;
    } catch (error) {
        console.error('Error fetching holidays:', error);
        return [];
    }
}

// Uso:
getCostaRicaHolidays(2026).then(holidays => console.log(holidays));