<template>
  <h2 class="font-semibold text-xl text-gray-800 leading-tight">
    <ILink class="hover:text-blue-500 duration-200" :href="`/${href}`">{{
      title
    }}</ILink>
    /
    <ILink :href="`/${href}/${property.id}`" class="text-blue-500">
      {{ property.name }}
    </ILink>
  </h2>
</template>

<script>
  export default {
    props: {
      property: Object,
      title: String,
      href: String,
    },
  }
</script>
