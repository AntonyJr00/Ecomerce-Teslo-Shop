# Teslo Shop

Teslo Shop es una aplicación de comercio electrónico construida con Next.js y TypeScript.

## Descripción

Este proyecto utiliza Next.js para la renderización del lado del servidor (SSR) y generación de sitios estáticos (SSG). También incluye soporte para TypeScript y varias librerías útiles como `clsx`, `react-icons`, `swiper` y `zustand`. Para estilos, se utiliza `tailwindcss`.

## Requisitos

- Node.js >= 14
- npm >= 6

## Instalación

Primero, clona el repositorio y luego instala las dependencias:

```bash
git clone https://github.com/tu_usuario/teslo-shop.git
cd teslo-shop
npm install
```

# Estructura del Proyecto

teslo-shop/
├── public/ # Archivos públicos como imágenes y favicon
├── src/
│ ├── components/ # Componentes de React
│ ├── pages/ # Páginas de Next.js
│ ├── styles/ # Archivos de estilo
│ └── store/ # Archivos de zustand
├── .eslintrc.json # Configuración de ESLint
├── tailwind.config.js # Configuración de Tailwind CSS
├── tsconfig.json # Configuración de TypeScript
└── package.json # Dependencias y scripts
