<script setup>
    const coreSkills = [
      { name: 'PHP', icon: 'i-logos-php' },
      { name: 'Laravel', icon: 'i-logos-laravel' },
      { name: 'Vue.js', icon: 'i-logos-vue' },
      { name: 'Nuxt.js', icon: 'i-logos-nuxt-icon' },
      { name: 'Inertia.js', icon: '' },
      { name: 'MySQL', icon: 'i-logos-mysql' },
      { name: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon' },
      { name: 'HTML5', icon: 'i-logos-html-5' },
      { name: 'CSS3', icon: 'i-logos-css-3' }
    ]
    
    const learningSkills = [
      { name: 'Node.js', icon: 'i-logos-nodejs-icon' },
      { name: 'React', icon: 'i-logos-react' },
      { name: 'Next.js', icon: 'i-logos-nextjs-icon' }
    ]
    </script>
    
    <template>
      <section id="skills" class="py-20">
        <UContainer>
          <div class="space-y-16">
            <div class="text-center">
              <h2 class="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                Technical <span class="text-primary-500">Skills</span>
              </h2>
              <p class="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                My journey through the full-stack landscape, from solid backend architectures to modern reactive frontends.
              </p>
            </div>
    
            <div class="space-y-6">
              <h3 class="text-xl font-semibold flex items-center gap-2">
                <UIcon name="i-heroicons-cpu-chip" class="text-primary-500" />
                Core Stack
              </h3>
              <div class="grid grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <div 
                  v-for="(skill, index) in coreSkills" 
                  :key="skill.name"
                  v-motion
                  :initial="{ opacity: 0, scale: 0.9 }"
                  :visible-once="{ opacity: 1, scale: 1 }"
                  :delay="index * 50 "
                  class="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors shadow-sm"
                >
                  <div v-if="skill.icon">
                    <UIcon :name="skill.icon" class="text-2xl" />
                  </div>
                  <div v-else>
                    <svg
                        width="60"
                        height="24"
                        viewBox="0 0 60 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <rect width="60" height="24" fill="#8B5CF6"/>
                        <text
                            x="3"
                            y="15"
                            fill="white"
                            font-size="10"
                            font-weight="700"
                            font-style="italic"
                            font-family="Inter, Arial, sans-serif"
                            letter-spacing="1"
                        >
                            inertia>>
                        </text>
                    </svg>
                  </div>
                  <span class="font-medium text-sm">{{ skill.name }}</span>
                </div>
              </div>
            </div>
    
            <div class="space-y-6">
              <h3 class="text-xl font-semibold flex items-center gap-2">
                <UIcon name="i-heroicons-rocket-launch" class="text-orange-500" />
                Learning Next
              </h3>
              <div class="grid grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <div 
                  v-for="(skill, index) in learningSkills" 
                  :key="skill.name"
                  v-motion
                  :initial="{ opacity: 0, y: 20 }"
                  :visible-once="{ opacity: 1, y: 0 }"
                  :delay="(coreSkills.length + index) * 50"
                  class="flex items-center gap-3 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-900/50"
                >
                  <UIcon :name="skill.icon" class="text-2xl grayscale" />
                  <span class="font-medium text-sm text-slate-600 dark:text-slate-400">{{ skill.name }}</span>
                  <UBadge size="xs" color="gray" variant="soft" class="ml-auto">Next</UBadge>
                </div>
              </div>
            </div>
          </div>
        </UContainer>
      </section>
    </template>