<script setup>
    const colorMode = useColorMode()
    const toggleTheme = () => {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
    const icon =computed(()=>{
        return colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid';
    })
</script>

<template>
    <nav class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950 backdrop-blur-md">
      <UContainer class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-lg bg-primary-500 flex items-center justify-center text-white font-bold">
            P
          </div>
          <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Portfolio
          </span>
        </div>
  
        <div class="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600 dark:text-slate-400">
          <NuxtLink to="#about" class="hover:text-primary-500 transition-colors">About</NuxtLink>
          <NuxtLink to="#skills" class="hover:text-primary-500 transition-colors">Skills</NuxtLink>
          <NuxtLink to="#projects" class="hover:text-primary-500 transition-colors">Projects</NuxtLink>
          <NuxtLink to="#contact" class="hover:text-primary-500 transition-colors">Contact</NuxtLink>
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
          
          <UButton icon="i-heroicons-bars-3" color="gray" variant="ghost" class="md:hidden" />
        </div>
      </UContainer>
    </nav>
  </template>