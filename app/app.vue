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
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        class=" animate-ping"
        >
          <polygon
            points="50 5, 90 27, 90 73, 50 95, 10 73, 10 27"
            fill="none"
            stroke="#16a34a"
            stroke-width="8"
            stroke-linejoin="round"
          />

          <path
            d="M35 30 H65 L35 70 H65"
            fill="none"
            stroke="#16a34a"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
      </svg>
    </div>
  </template>