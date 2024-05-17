const workers = {
    '12345678': { 
        nombre: 'Juan', 
        apellido: 'Pérez', 
        edad: 35, 
        cargo: 'Veterinario', 
        foto: './fotos/2.jpg'
    },
    '87654321': { 
        nombre: 'María', 
        apellido: 'López', 
        edad: 28, 
        cargo: 'Asistente', 
        foto: './fotos/1.jpg'
    }
};

document.getElementById('dni').addEventListener('input', function(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');  // Solo permitir números
});

document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const dni = document.getElementById('dni').value;

    // Validar que el DNI tenga exactamente 8 dígitos
    if (dni.length !== 8) {
        document.getElementById('result').textContent = 'DNI inválido. Debe contener exactamente 8 números.';
        document.getElementById('dni').value = '';  // Borrar el campo de DNI
        return;
    }

    if (workers[dni]) {
        const worker = workers[dni];
        const horaRegistro = new Date().toLocaleTimeString(); // Obtiene la hora actual
        document.getElementById('result').innerHTML = `
            <img src="${worker.foto}" alt="Foto de perfil">
            <p>Nombres: ${worker.nombre}</p>
            <p>Apellidos: ${worker.apellido}</p>
            <p>Edad: ${worker.edad}</p>
            <p>Cargo: ${worker.cargo}</p>
            <p>Hora de Entrada: ${horaRegistro}</p>
        `;
    } else {
        document.getElementById('result').textContent = 'DNI no encontrado';
    }

    document.getElementById('dni').value = '';  // Borrar el campo de DNI
});
