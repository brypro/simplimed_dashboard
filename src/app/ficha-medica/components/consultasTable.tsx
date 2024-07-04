"use client";
import React from "react";
import { ConsultaMedica, Doctor } from "@prisma/client";
import { format } from "date-fns";

interface Props {
  consultas: ConsultaMedica[];
  medicos: Doctor[];
}
export const ConsultasMedicasTable = ({ consultas, medicos }: Props) => {
  return (
    <div className="overflow-x-auto rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-light dark:bg-gray-dark">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Fecha
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Médico
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Motivo Consulta
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Diagnóstico
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Receta
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Observaciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-dark">
          {consultas.map((consulta, index) => (
            <tr key={index}>
              <td className="align-top whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {format(new Date(consulta.fecha), "dd/MM/yyyy")}
              </td>
              <td className="align-top whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-200">
                {
                  medicos.find((medico) => medico.id === consulta.doctorId)
                    ?.nombre
                }
              </td>

              <td className="align-top whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-200">
                {consulta.motivoConsulta}
              </td>

              <td className="align-top whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-200">
                {consulta.diagnostico}
              </td>
              <td className="align-top min-w-[500px] max-w-md break-words px-6 py-4 text-gray-500 dark:text-gray-200">
                {consulta.recetaMedica}
              </td>

              <td className="align-top whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-200">
                {consulta.sintomas}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
