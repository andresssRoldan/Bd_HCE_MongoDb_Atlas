// ==========================================
// SCRIPT 02: OPERACIONES CRUD (UPDATE & DELETE)
// ==========================================

use("hce_antioquia_db");

// 1. ACTUALIZACIÓN (PUSH): Agregar una nueva nota de evolución al paciente ADM-2026-001
db.hospitalizacion.updateOne(
  { "_id": "ADM-2026-001" },
  { 
    $push: { 
      "notas_evolucion": {
        "fecha_hora": "2026-10-26T08:00:00Z",
        "medico": "Dr. Carlos Andrés Ruiz",
        "tipo": "Evolución de Control",
        "nota": "Paciente tolera vía oral, disminución de la dificultad respiratoria."
      }
    } 
  }
);

// 2. ELIMINACIÓN LÓGICA (SOFT DELETE): Cambiar estado a inactivo protegiendo la trazabilidad médica
db.hospitalizacion.updateOne(
  { "_id": "ADM-2026-001" },
  { 
    $set: { 
      "hospitalizacion.estado_estancia": "Inactivo / Dado de Alta",
      "hospitalizacion.fecha_alta": "2026-10-26T10:00:00Z"
    } 
  }
);