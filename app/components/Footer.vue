<script setup>
    const year = new Date().getFullYear();
</script>
<template>
    <footer class="py-10 border-t border-gray-700">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-600">© {{ year }} Zin Maung Nyunt. Built with Nuxt & Tailwind.</p>
        <div class="flex justify-center space-x-6 mt-4">
          <ULink to="https://github.com/Zin-Mg-Nyunt" target="_blank" class="text-gray-500 hover:text-primary">GitHub</ULink>
          <ULink to="https://www.linkedin.com/in/zin-maung-nyunt-705438219/" target="_blank" class="text-gray-500 hover:text-primary">LinkedIn</ULink>
          <ULink to="mailto:zinmgnyunt99@email.com" class="text-gray-500 hover:text-primary">Email</ULink>
        </div>
      </div>
    </footer>
</template>
  
