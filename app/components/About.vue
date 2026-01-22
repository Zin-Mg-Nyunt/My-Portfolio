<script setup>
    const stats = [
      { label: 'Years of Experience', value: '2+' },
      { label: 'Projects Completed', value: '15+' },
      { label: 'Happy Clients', value: '10+' }
    ]
</script>
    
    <template>
      <section id="about" class="py-20 lg:py-35">
        <UContainer>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div 
              v-motion 
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible-once="{ opacity: 1, scale: 1 }"
              :duration="800"
              class="relative aspect-square max-w-md mx-auto lg:mx-0"
            >
              <div class="absolute inset-0 bg-primary-500 rounded-2xl rotate-6 z-0 opacity-20"></div>
              <div class="relative z-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                <NuxtImg 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600" 
                  alt="About Me"
                  loading="lazy"
                  quality="80"
                  format="webp"
                  class="rounded-xl object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
                />
              </div>
            </div>
    
            <div 
              v-motion
              :initial="{ opacity: 0, x: 100 }"
              :visible-once="{ opacity: 1, x: 0 }"
              :duration="800"
              :delay="200"
              class="space-y-4"
            >
              <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                About <span class="text-primary-500">Me</span>
              </h2>
              
              <p class="text-md text-slate-600 dark:text-slate-400 leading-relaxed">
                I am a Full-stack Developer with a passion for deconstructing complex problems into simple, user-centric solutions. With a core expertise in <span class=" font-bold">Laravel, Inertia.js, and Vue.js</span>, I focus on building scalable applications grounded in <span class=" font-bold">Clean Code</span> principles. I am a disciplined problem-solver and a proactive team player who believes that well-architected systems are the foundation of any great digital product.
              </p>
    
              <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Driven by a <span class="font-bold">Growth Mindset</span>, I am currently expanding my technical horizon by mastering <span class="font-bold">Node.js, React, and Next.js</span>. Outside of coding, I spend my time swimming, a hobby that reinforces my ability to stay focused and persistent under pressure. I am eager to bring this blend of technical proficiency and dedication to a forward-thinking team where I can contribute and grow.
              </p>
    
              <!-- <div class="grid grid-cols-3 gap-4 pt-4">
                <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
                  <div class="text-2xl font-bold text-primary-500">{{ stat.value }}</div>
                  <div class="text-sm text-slate-500 dark:text-slate-500">{{ stat.label }}</div>
                </div>
              </div> -->
    
              <div class="pt-6">
                 <UButton 
                  label="Download My Resume" 
                  to="/resume_zinmaungnyunt.pdf" 
                  target="_blank"
                  download="Zin_Maung_Nyunt_Resume.pdf"
                  icon="i-heroicons-arrow-down-tray"
                  variant="soft"
                  size="lg"
                />
              </div>
            </div>
    
          </div>
        </UContainer>
      </section>
    </template>