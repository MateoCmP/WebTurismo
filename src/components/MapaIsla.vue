<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import type { PuntoMapa } from '../lib/mapa/Marcador';

const props = defineProps<{ puntos: PuntoMapa[] }>();

const contenedor = ref<HTMLDivElement | null>(null);

// Filtros: una categoría por cada tipo que exista en los datos
const tipos = [...new Set(props.puntos.map((p) => p.tipo))];
const activos = ref<string[]>([...tipos]);

function alternar(tipo: string) {
  activos.value = activos.value.includes(tipo)
    ? activos.value.filter((t) => t !== tipo)
    : [...activos.value, tipo];
}

const visibles = computed(() =>
  props.puntos.filter((p) => activos.value.includes(p.tipo))
);

// Mapa
let map: { remove(): void } | undefined;
let desmontado = false;

async function dibujar() {
  if (!contenedor.value) return;
  const { initMap } = await import('../lib/mapa/InitMapa');
  if (desmontado || !contenedor.value) return;
  map?.remove();
  map = initMap(contenedor.value, visibles.value);
}

onMounted(dibujar);
watch(visibles, dibujar);

onBeforeUnmount(() => {
  desmontado = true;
  map?.remove();
  map = undefined;
});
</script>

<template>
  <div class="relative w-full h-full">
    <div class="absolute top-3 left-3 z-[1000] flex flex-wrap gap-2">
      <button
        v-for="tipo in tipos"
        :key="tipo"
        type="button"
        @click="alternar(tipo)"
        class="px-3 py-1 rounded-full text-sm font-medium shadow capitalize"
        :class="activos.includes(tipo) ? 'bg-blue-900 text-white' : 'bg-white text-slate-700'"
      >
        {{ tipo }}
      </button>
    </div>
    <div ref="contenedor" class="w-full h-full z-0"></div>
  </div>
</template>