<script lang="ts" setup>
const { page } = useContent();
if (page.value) {
  defineOgImage({
    component: 'Custom',
    title: page.value.title,
    description: page.value.description,
    layout: page.value.layout,
    cover: page.value.cover,
    author: page.value.author,
    date: page.value.date,
    ...(page.value.ogImage || {}),
  });
}
</script>
<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<style>
html {
  font-family: $dt('font.sans');
}
</style>
