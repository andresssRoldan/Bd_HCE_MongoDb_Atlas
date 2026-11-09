// ==========================================
// SCRIPT DE PIPELINES DE AGREGACIÓN - HCE ANTIOQUIA
// ==========================================

use("hce_antioquia_db");

// --- PIPELINE 1: Conteo de pacientes por especialidad médica (3 etapas) ---
db.hospitalizacion.aggregate([
  {
    "$group": {
      "_id": "$hospitalizacion.especialidad",
      "total_pacientes": { "$sum": 1 }
    }
  },
  {
    "$sort": { "total_pacientes": -1 }
  },
  {
    "$project": {
      "_id": 0,
      "especialidad_medica": "$_id",
      "total_pacientes": 1
    }
  }
]);


// --- PIPELINE 2: Filtrado de pacientes activos con proyección y ordenamiento (3 etapas) ---
db.hospitalizacion.aggregate([
  {
    "$match": {
      "hospitalizacion.estado_estancia": "Activo"
    }
  },
  {
    "$project": {
      "_id": 0,
      "id_admision": "$_id",
      "nombre_paciente": "$paciente.nombre_completo",
      "cama": "$hospitalizacion.cama",
      "especialidad": "$hospitalizacion.especialidad",
      "diagnostico": "$diagnostico_ingreso.descripcion"
    }
  },
  {
    "$sort": { "nombre_paciente": 1 }
  }
]);