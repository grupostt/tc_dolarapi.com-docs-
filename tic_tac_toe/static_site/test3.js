
async function obtenerValorDolar() {
    try {
        const response = await fetch('https://ve.dolarapi.com/v1/dolares');
        if (!response.ok) throw new Error('Error en la solicitud');
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.error('Error al obtener el valor del dólar:', error);
        return null;
    }   
}

obtenerValorDolar().then(resultado => console.log(resultado));
