<template>
  <v-tooltip :disabled="!buttonProps.tip" :text="buttonProps.tip">
    <template v-slot:activator="{ props }">
      <v-btn
        @click.stop="onClick"
        v-bind="props"
        :text="buttonProps.title"
        :href="buttonProps.href"
        :icon="buttonProps.icon"
        target="_blank"
        rel="noopener noreferrer"
        :prepend-icon="buttonProps.prependIcon" />
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
  const emit = defineEmits<{
    onClick: []
  }>();
  const buttonProps = defineProps<{
    title?: string,
    tip?: string,
    href?: string,
    icon?: string,
    prependIcon?: string,
  }>();

  const onClick = () => {
    emit('onClick');
  }

  console.log(buttonProps.title)
</script>

<style scoped lang="scss">
  .v-btn {
    margin: 8px;

    &:hover {
      background-color: $secondary-color;
    }
  }
</style>