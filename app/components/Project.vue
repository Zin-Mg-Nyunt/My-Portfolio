<script setup>
    const projects = [
      {
        title: 'Stack Overflow Clone',
        description: 'A comprehensive Q&A platform featuring a robust voting system, nested answers, and real-time search. It demonstrates complex database relationships and efficient data fetching using Laravel and Inertia.js.',
        image: '/images/stackOverflow.png',
        tags: ['Laravel', 'Vue 3', 'Inertia.js', 'MySQL'],
        link: 'https://github.com/Zin-Mg-Nyunt/StackOverFlow',
        demo: 'https://demo.com'
      },
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with real-time cart updates and secure checkout. Built with a focus on seamless user experience.',
        image: '/images/stackOverflow.png',
        tags: ['Laravel', 'Vue 3', 'Inertia.js', 'MySQL'],
        link: 'https://github.com/yourusername/project',
        demo: 'https://demo.com'
      },
      {
        title: 'Management Dashboard',
        description: 'A professional dashboard for tracking business metrics and user activities with beautiful data visualizations.',
        image: '/images/stackOverflow.png',
        tags: ['Laravel', 'Inertia.js', 'Tailwind CSS'],
        link: 'https://github.com/yourusername/project',
        demo: 'https://demo.com'
      }
    ]
</script>
    
    <template>
      <section id="projects" class="py-20 bg-slate-50/50 dark:bg-slate-900/20">
        <UContainer>
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Featured <span class="text-primary-500">Projects</span></h2>
            <p class="mt-4 text-slate-500 dark:text-slate-400">Some of the digital products I've built using modern web technologies.</p>
          </div>
    
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="(project, index) in projects" 
              :key="project.title"
              v-motion="{
                initial: { opacity: 0, y: 50 },
                visibleOnce: { opacity: 1, y: 0, transition: { delay: index * 150 } }
              }"
              class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div class="relative aspect-video overflow-hidden">
                <NuxtImg 
                  :src="project.image" 
                  :alt="project.title"
                  quality="80"
                  class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                  <div class="flex gap-2">
                    <UButton :to="project.link" target="_blank" icon="i-simple-icons-github" size="xs" color="white" variant="solid" />
                    <UButton :to="project.demo" target="_blank" icon="i-heroicons-arrow-top-right-on-square" size="xs" color="primary" variant="solid" />
                  </div>
                </div>
              </div>
    
              <div class="p-6 space-y-4">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  {{ project.description }}
                </p>
                
                <div class="flex flex-wrap gap-2 pt-2">
                  <span 
                    v-for="tag in project.tags" 
                    :key="tag"
                    class="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </UContainer>
      </section>
    </template>