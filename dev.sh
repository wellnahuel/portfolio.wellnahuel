#!/usr/bin/env bash
set -euo pipefail

# dev.sh — levanta el front en local

if ! command -v bun >/dev/null 2>&1; then
  echo "❌ Bun no está instalado. Instalalo: https://bun.sh"
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "📦 Instalando dependencias..."
  bun install
fi

echo "🚀 Levantando Next.js en http://localhost:3000"
bun dev