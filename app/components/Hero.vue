<script setup>
    
    const name = "Zin Maung Nyunt"
    const role = "Full-stack Developer"
    const description = "I build robust, scalable, and user-centric web applications. Turning complex problems into simple, elegant solutions with modern technologies."

</script>
    
    <template>
      <section class="relative py-20 lg:py-32 overflow-hidden">
        <UContainer>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :enter="{ opacity: 1, x: 0 }"
                :delay="200"
                :duration="800"
                class="flex flex-col items-center lg:items-start space-y-8"
            > 
              <div class="space-y-4">
                <h2 class="text-primary-500 font-semibold tracking-wide uppercase text-sm">
                  Available for projects
                </h2>
                <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Hi, I'm <span class="text-primary-500">{{ name }}</span>
                </h1>
                <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                  {{ role }}
                </p>
                <p class="max-w-lg text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                  {{ description }}
                </p>
              </div>
    
              <div class="flex flex-wrap gap-4">
                <UButton size="xl" label="View My Resume" to="/resume_zinmaungnyunt.pdf" target="_blank" icon="i-heroicons-document-text" class="rounded-full shadow-lg" />
                <UButton size="xl" variant="outline" to="#contact" label="Contact Me" icon="i-heroicons-envelope" class="rounded-full" />
              </div>
            </div>
    
            <div 
                v-motion
                :initial="{ opacity: 0, x: 100 }"
                :enter="{ opacity: 1, x: 0 }"
                :delay="200"
                :duration="800" 
                class="relative flex justify-center lg:justify-end"
            >
              <div class="relative w-full max-w-[500px]">
                <div class="absolute -top-4 -left-4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
                
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto relative z-10">
                  <path fill="#16a34a" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,85.6,-0.8C84.2,14.1,78.1,28.2,70.8,41.6C63.5,55,55,67.7,43.2,75.4C31.4,83.1,15.7,85.8,0.4,85.1C-14.9,84.4,-29.8,80.3,-42.6,72.6C-55.4,64.9,-66.1,53.6,-73.4,40.3C-80.7,27,-84.6,13.5,-84.2,0.2C-83.8,-13.1,-79.1,-26.2,-71.8,-39.5C-64.5,-52.8,-54.6,-66.3,-41.2,-73.5C-27.8,-80.7,-13.9,-81.6,0.8,-83C15.5,-84.4,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" class="fill-primary-500/20" />
                  <text x="50" y="110" font-family="monospace" font-size="60" class="fill-primary-500">&lt;/&gt;</text>
                </svg>
              </div>
            </div>
          </div>
        </UContainer>
      </section>
    </template>