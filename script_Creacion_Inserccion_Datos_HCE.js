// ==========================================
// SCRIPT 01: CREACIÓN E INSERCIÓN DE DATOS
// Subsistema de Hospitalización - HCE Antioquia
// ==========================================

use("hce_antioquia_db");

db.hospitalizacion.insertMany([
  {
    "_id": "ADM-2026-001",
    "paciente": {
      "paciente_id": 1020,
      "tipo_documento": "CC",
      "numero_documento": "10384756",
      "nombre_completo": "María Elena Pérez Gómez",
      "edad": 65,
      "genero": "Femenino"
    },
    "hospitalizacion": {
      "fecha_ingreso": "2026-10-25T08:30:00Z",
      "piso": "Piso 3",
      "cama": "302-A",
      "medico_tratante": "Dr. Carlos Andrés Ruiz",
      "especialidad": "Medicina Interna",
      "estado_estancia": "Activo"
    },
    "diagnostico_ingreso": {
      "codigo_cie10": "J18.9",
      "descripcion": "Neumonía adquirida en comunidad"
    },
    "signos_vitales": [
      {
        "fecha_hora": "2026-10-25T09:00:00Z",
        "presion_arterial": "120/80",
        "frecuencia_cardiaca": 82,
        "temperatura": 38.5,
        "saturacion_oxigeno": 92
      }
    ],
    "notas_evolucion": [
      {
        "fecha_hora": "2026-10-25T10:30:00Z",
        "medico": "Dr. Carlos Andrés Ruiz",
        "nota": "Paciente ingresa con dificultad respiratoria. Se inicia antibiótico."
      }
    ],
    "tratamientos_medicamentos": [
      {
        "medicamento": "Ampicilina / Sulbactam",
        "dosis": "1.5g IV cada 6 horas",
        "estado": "Activo"
      }
    ]
  },
  {
    "_id": "ADM-2026-002",
    "paciente": {
      "paciente_id": 1021,
      "tipo_documento": "CC",
      "numero_documento": "71234567",
      "nombre_completo": "José Alirio Ramírez",
      "edad": 72,
      "genero": "Masculino"
    },
    "hospitalizacion": {
      "fecha_ingreso": "2026-10-25T10:00:00Z",
      "piso": "Piso 2",
      "cama": "210-B",
      "medico_tratante": "Dra. Ana Sofía Londoño",
      "especialidad": "Cardiología",
      "estado_estancia": "Activo"
    },
    "diagnostico_ingreso": {
      "codigo_cie10": "I50.9",
      "descripcion": "Insuficiencia cardíaca congestiva"
    },
    "signos_vitales": [
      {
        "fecha_hora": "2026-10-25T10:30:00Z",
        "presion_arterial": "145/95",
        "frecuencia_cardiaca": 96,
        "temperatura": 36.6,
        "saturacion_oxigeno": 88
      }
    ],
    "notas_evolucion": [
      {
        "fecha_hora": "2026-10-25T11:15:00Z",
        "medico": "Dra. Ana Sofía Londoño",
        "nota": "Edema en extremidades inferiores. Se restringen líquidos y se ajusta diurético."
      }
    ],
    "tratamientos_medicamentos": [
      {
        "medicamento": "Furosemida",
        "dosis": "40mg IV cada 12 horas",
        "estado": "Activo"
      }
    ]
  },
  {
    "_id": "ADM-2026-003",
    "paciente": {
      "paciente_id": 1022,
      "tipo_documento": "CC",
      "numero_documento": "43567890",
      "nombre_completo": "Luz Dary Hincapié",
      "edad": 48,
      "genero": "Femenino"
    },
    "hospitalizacion": {
      "fecha_ingreso": "2026-10-25T12:15:00Z",
      "piso": "Piso 4",
      "cama": "405-C",
      "medico_tratante": "Dr. Fernando Gaviria",
      "especialidad": "Cirugía General",
      "estado_estancia": "Activo"
    },
    "diagnostico_ingreso": {
      "codigo_cie10": "K35.3",
      "descripcion": "Apendicitis aguda con peritonitis localizada"
    },
    "signos_vitales": [
      {
        "fecha_hora": "2026-10-25T12:40:00Z",
        "presion_arterial": "110/70",
        "frecuencia_cardiaca": 88,
        "temperatura": 37.9,
        "saturacion_oxigeno": 97
      }
    ],
    "notas_evolucion": [
      {
        "fecha_hora": "2026-10-25T14:00:00Z",
        "medico": "Dr. Fernando Gaviria",
        "nota": "Postoperatorio inmediato de apendicectomía abierta. Herida quirúrgica limpia."
      }
    ],
    "tratamientos_medicamentos": [
      {
        "medicamento": "Tramadol",
        "dosis": "50mg IV cada 8 horas PRN",
        "estado": "Activo"
      }
    ]
  },
  {
    "_id": "ADM-2026-004",
    "paciente": {
      "paciente_id": 1023,
      "tipo_documento": "CC",
      "numero_documento": "15987654",
      "nombre_completo": "Bernardo Osorio",
      "edad": 58,
      "genero": "Masculino"
    },
    "hospitalizacion": {
      "fecha_ingreso": "2026-10-25T14:00:00Z",
      "piso": "Piso 3",
      "cama": "308-A",
      "medico_tratante": "Dr. Carlos Andrés Ruiz",
      "especialidad": "Medicina Interna",
      "estado_estancia": "Activo"
    },
    "diagnostico_ingreso": {
      "codigo_cie10": "E11.9",
      "descripcion": "Diabetes mellitus tipo 2 sin complicaciones"
    },
    "signos_vitales": [
      {
        "fecha_hora": "2026-10-25T14:30:00Z",
        "presion_arterial": "130/85",
        "frecuencia_cardiaca": 76,
        "temperatura": 37.4,
        "saturacion_oxigeno": 96
      }
    ],
    "notas_evolucion": [
      {
        "fecha_hora": "2026-10-25T16:00:00Z",
        "medico": "Dr. Carlos Andrés Ruiz",
        "nota": "Curación de úlcera en miembro inferior izquierdo. Glucometría en control."
      }
    ],
    "tratamientos_medicamentos": [
      {
        "medicamento": "Insulina Glargina",
        "dosis": "20 UI subcutánea al día",
        "estado": "Activo"
      }
    ]
  },
  {
    "_id": "ADM-2026-005",
    "paciente": {
      "paciente_id": 1024,
      "tipo_documento": "CC",
      "numero_documento": "39123456",
      "nombre_completo": "Gloria Inés Restrepo",
      "edad": 60,
      "genero": "Femenino"
    },
    "hospitalizacion": {
      "fecha_ingreso": "2026-10-25T16:20:00Z",
      "piso": "Piso 5",
      "cama": "512-B",
      "medico_tratante": "Dra. Marcela Valencia",
      "especialidad": "Neurología",
      "estado_estancia": "Activo"
    },
    "diagnostico_ingreso": {
      "codigo_cie10": "G40.9",
      "descripcion": "Epilepsia, no especificada"
    },
    "signos_vitales": [
      {
        "fecha_hora": "2026-10-25T16:45:00Z",
        "presion_arterial": "125/80",
        "frecuencia_cardiaca": 80,
        "temperatura": 36.8,
        "saturacion_oxigeno": 98
      }
    ],
    "notas_evolucion": [
      {
        "fecha_hora": "2026-10-25T18:00:00Z",
        "medico": "Dra. Marcela Valencia",
        "nota": "Paciente en período post-ictal, orientada en tiempo y espacio. Sin nuevas crisis."
      }
    ],
    "tratamientos_medicamentos": [
      {
        "medicamento": "Levetiracetam",
        "dosis": "500mg V.O. cada 12 horas",
        "estado": "Activo"
      }
    ]
  }
]);