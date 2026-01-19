<script setup>
  const isMounted = ref(false)
  
  onMounted(() => {
    isMounted.value = true
  })
  </script>
  
  <template>
    <div v-if="isMounted">
      <Navbar />
    </div>
    
    <div v-else class="h-screen w-screen flex items-center justify-center gap-2 bg-slate-950">
      <UIcon name="i-heroicons-arrow-path" class="w-10 h-10 animate-spin text-primary-500" />
    
      <p class="text-slate-400 font-medium animate-pulse tracking-widest uppercase text-xs">
        Loading Data
      </p>
    </div>
  </template>