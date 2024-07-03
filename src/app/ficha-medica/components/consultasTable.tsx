"use client";
import React from "react";

// Ejemplo de datos de consultas médicas
const consultasData = [
  {
    fecha: "2023-06-15",
    medico: "Dr. Pérez",
    motivo: "Dolor abdominal",
    diagnostico: "Gastritis leve",
    receta: "Omeprazol 20mg",
    observaciones: "Reposo y dieta blanda recomendada",
  },
  {
    fecha: "2023-07-20",
    medico: "Dra. López",
    motivo: "Control de presión arterial",
    diagnostico: "Hipertensión moderada",
    receta: "Losartán 50mg",
    observaciones: "Ajuste en medicación prescrita",
  },
  {
    fecha: "2023-08-10",
    medico: "Dr. Gómez",
    motivo: "Dolor de cabeza crónico",
    diagnostico: "Migraña",
    receta: "Paracetamol 500mg",
    observaciones: "Recetado analgésicos y evitar estrés",
  },
];

export const ConsultasMedicasTable = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-light dark:bg-gray-dark">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Médico</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Motivo Consulta</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diagnóstico</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receta</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observaciones</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-dark divide-y divide-gray-200 dark:divide-gray-700">
          {consultasData.map((consulta, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{consulta.fecha}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{consulta.medico}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{consulta.motivo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{consulta.diagnostico}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{consulta.receta}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200">{consulta.observaciones}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

