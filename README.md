# Simplimed

**Simplimed** es una aplicación web desarrollada para la gestión de un pequeño centro médico, utilizando Next.js. Simplimed facilita la administración de médicos, pacientes y consultas médicas.

## Enlace a la Aplicación

Puedes acceder a la aplicación en el siguiente enlace: [Simplimed](https://simplimedadmin-dashboard-brypros-projects.vercel.app/)



## Instalación

1. Descarga o clona el repositorio. Una vez que estés en el directorio correcto, instala todas las dependencias necesarias con el siguiente comando:

    ```bash
    npm install
    ```

    Si estás usando **Yarn** como gestor de paquetes, el comando será:

    ```bash
    yarn install
    ```

2. Ahora, inicia el servidor de desarrollo. Si estás usando **npm**, el comando es:

    ```bash
    npm run dev
    ```

    Y si estás usando **Yarn**, es:

    ```bash
    yarn dev
    ```

¡Y listo! Ahora estás listo para empezar a desarrollar.

## Características Destacadas

- **Gestión de Médicos**: Añadir, editar y eliminar información de médicos.
- **Gestión de Pacientes**: Registro de pacientes y almacenamiento de su información médica.
- **Consultas Médicas**: Registro y seguimiento de consultas médicas de los pacientes.
- **Soporte para Modo Oscuro y Claro**: Alterna entre modos de visualización claro y oscuro.
- **Integración con NextAuth**: Manejo de autenticación de usuarios.
- **Base de Datos con Prisma y Postgres**: Almacenamiento y gestión eficiente de datos.

## Tipos de Usuarios y Funcionalidades

### Administradores

Los administradores tienen acceso a las siguientes funcionalidades:
- **Gestión de Médicos**: Añadir, editar y eliminar médicos.
- **Gestión de Medicamentos**: Añadir, editar y eliminar medicamentos.
- **Gestión de Exámenes**: Añadir, editar y eliminar exámenes médicos.
- **Gestión de Especialidades**: Añadir, editar y eliminar especialidades médicas.
- **Gestión de Cuentas de Usuario**: Crear y gestionar cuentas de usuarios (doctores y otros administradores).

### Médicos

Los médicos tienen acceso a las siguientes funcionalidades:
- **Gestión de Pacientes**: Añadir, editar y eliminar pacientes.
- **Gestión de Consultas Médicas**: Registrar y gestionar consultas médicas.
- **Ficha Médica del Paciente**: Acceder y actualizar la ficha médica del paciente junto con su historial de consultas médicas.


## Dependencias

Las siguientes dependencias se instalarán automáticamente al ejecutar `npm install` o `yarn install`:

- `@auth/prisma-adapter`
- `@prisma/client`
- `apexcharts`
- `axios`
- `bcryptjs`
- `date-fns`
- `flatpickr`
- `jsvectormap`
- `next`
- `next-auth`
- `react`
- `react-apexcharts`
- `react-dom`
- `react-quill`
- `react-router-dom`
- `react-select`
- `react-table`
- `@types/axios`
- `@types/bcryptjs`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `@types/react-table`
- `autoprefixer`
- `eslint`
- `eslint-config-next`
- `postcss`
- `prettier`
- `prettier-plugin-tailwindcss`
- `prisma`
- `tailwindcss`
- `typescript`

---
