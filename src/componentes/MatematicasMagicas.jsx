function MatematicasMagicas() {
const nombre = "Alex";
const edad = 17;
const anioNacimiento = 2024 - edad; 

return (
    <div className="tarjeta">
        <h2>Perfil de {nombre}</h2>
        <p>Si tienes {edad} años, naciste aproximadamente en
{anioNacimiento}.</p>
        <p>¿Cuánto es 5 por 5? ¡Es {5 * 5}!</p>
    </div>
    );
}
export default MatematicasMagicas;