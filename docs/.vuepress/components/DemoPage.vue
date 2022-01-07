<template>
  <GraphView :graph="graph" />
</template>

<script lang="ts" setup>
import { defineNodeWithDefaults, GraphLink } from 'd3-graph-controller'

const a = defineNodeWithDefaults({
  id: 'a',
  type: 'node',
  label: 'A',
})

const graph = {
  nodes: [a],
  links: [] as GraphLink[],
}
</script>

<style>
.theme-default-content {
  max-width: unset !important;
}
</style>
