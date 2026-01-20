<script setup>
    const colorMode = useColorMode();
    const toggleTheme = () => {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    };
    const icon =computed(()=>{
        return colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid';
    });
    const navLinks = [
        {label: 'About', to:'#about'},
        {label: 'Skills', to:'#skills'},
        {label: 'Projects', to:'#projects'},
        {label: 'Contact', to:'#contact'}
    ]
    const isMenuOpen=ref(false)
</script>

<template>
    <nav class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950 backdrop-blur-md">
      <UContainer class="flex h-16 items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
            <svg
                width="45"
                height="45"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                >
                <!-- Hexagon -->
                <polygon
                    points="50 5, 90 27, 90 73, 50 95, 10 73, 10 27"
                    fill="none"
                    stroke="#16a34a"
                    stroke-width="10"
                    stroke-linejoin="round"
                />
                <!-- Z letter -->
                <path
                    d="M35 30 H65 L35 70 H65"
                    fill="none"
                    stroke="#16a34a"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </NuxtLink>
  
        <div class="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600 dark:text-slate-400">
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"  class="hover:text-primary-500 transition-colors">
            {{ link.label }}
          </NuxtLink>
        </div>
  
        <div class="flex items-center gap-4">
            <UButton
                :key = "colorMode.value"
                :icon="icon"
                color="gray"
                variant="ghost"
                @click="toggleTheme"
                class="cursor-pointer"
            />
            <USlideover title="Menu" v-model:open="isMenuOpen">
                <UButton icon="i-heroicons-bars-3" color="gray" variant="ghost" class="md:hidden" @click="isMenuOpen=true"/>
                <template #body>
                    <div class="flex flex-col gap-6">
                        <NuxtLink
                            v-for="link in navLinks" 
                            :key="link.to" 
                            :to="link.to"
                            class="text-lg font-medium text-slate-600 dark:text-slate-300"
                            @click="isMenuOpen=false"
                        >
                            {{ link.label }}
                        </NuxtLink>
                    </div>
                </template>
            </USlideover>
        </div>
    </UContainer>
    </nav>

  </template>