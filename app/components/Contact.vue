<script setup>
    import * as v from 'valibot';
    import emailjs from '@emailjs/browser';
    
    const contactInfo = [
      { icon: 'i-heroicons-envelope', label: 'Email', link: 'mailto:zinmgnyunt99@email.com' },
      { icon: 'i-simple-icons-linkedin', label: 'LinkedIn', link: 'https://www.linkedin.com/in/zin-maung-nyunt-705438219/' },
      { icon: 'i-simple-icons-github', label: 'GitHub', link: 'https://github.com/Zin-Mg-Nyunt' }
    ];
    
    const state = reactive({ firstName: '', lastName:'', email: '', message: '' });
    const toast = useToast();
    const isLoading = ref(false);

    const schema = v.object({
        firstName: v.pipe(v.string(), v.minLength(2,'Name must has 2 characters at least')),
        lastName: v.optional(v.string()),
        email: v.pipe( v.string(), v.email('Invalid Email')),
        message: v.pipe(v.string(), v.minLength(10, 'Message must has 10 characters at least'))
    })

    async function onSubmit(event) {
        isLoading.value = true;
        try {
            await emailjs.send(
                'service_yi85qc5',
                'template_muar3ks',
                {
                    from_name: event.data.firstName + ' ' + event.data.lastName ?? '',
                    reply_to: event.data.email,
                    message: event.data.message
                },
                'wf2HmL8SeydJ7pzga'
            )
            toast.add({
                title: 'Success',
                description: 'You already send message',
                color: 'success'
            })
            state.firstName='',
            state.lastName='',
            state.email='',
            state.message=''
        } catch (error) {
            toast.add({
                title: 'Error',
                description: 'Something wrong! Please try again in later',
                color: 'error'
            })
        }finally{
            isLoading.value = false;
        }
    }
    </script>
    
    <template>
      <section id="contact" class="py-24">
        <UContainer>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            <div 
             class="space-y-20" 
             v-motion
             :initial="{ opacity: 0, x: -100 }"
             :visible-once="{ opacity: 1, x: 0 }"
             :duration="800"
            >
              <div class="space-y-4">
                <h2 class="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                  Get in <span class="text-primary-500">Touch.</span>
                </h2>
                <p class="text-lg text-primary">
                    I'd like to here from you!
                </p>
                <p class="text-lg text-slate-500 max-w-md">
                  If you have any questions or just want to say hi, please use the contact form!
                </p>
              </div>
    
              <div class="flex items-center justify-start gap-6">
                <ULink v-for="item in contactInfo" :key="item.label" :to="item.link" target="_blank" class=" flex flex-col items-center justify-center gap-3 group">
                    <UIcon :name="item.icon" class="text-2xl"/>
                    <span class=" group-hover:text-primary-500 duration-200 text-sm">{{ item.label }}</span>
                </ULink>
              </div>
            </div>
    
            <div class="relative p-1">
                <UForm  
                 :schema="schema"
                 :state="state"
                 @submit="onSubmit"
                 class="space-y-8"              
                 v-motion
                 :initial="{ opacity: 0, x: 100 }"
                 :visible-once="{ opacity: 1, x: 0 }"
                 :duration="800"
                >
                    <div class="space-y-8">
                        <div class="grid md:grid-cols-2 gap-5">
                            <UFormField label="First Name" name="firstName" required>
                                <UInput 
                                 v-model="state.firstName"
                                 variant="none" 
                                 class="w-full border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
                                />
                            </UFormField>
    
                            <UFormField label="Last Name" name="lastName">
                                <UInput 
                                 v-model="state.lastName"
                                 variant="none" 
                                 class="w-full border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
                                />
                            </UFormField>
                        </div>

                        <UFormField label="Email" name="email" required>
                            <UInput 
                             v-model="state.email"
                             variant="none" 
                             class="w-full border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
                            />
                        </UFormField>

                        <UFormField label="Message" name="message">
                            <UTextarea 
                             v-model="state.message"
                             variant="none"
                             class="w-full border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
                             :rows="4"
                             :ui="{ 
                                base: 'resize-none' 
                                }" 
                            />
                        </UFormField>
                    </div>

                    <UButton 
                     variant="none" 
                     type="submit"
                     :loading="isLoading"
                     class="group relative flex items-center gap-1 text-sm font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white overflow-hidden p-2"
                    >
                        <div class="w-0 rounded-md bg-primary-500 flex items-center justify-end text-white group-hover:w-full transition-all duration-300 absolute inset-0 right-[-40px] opacity-0 group-hover:opacity-100 pr-1">
                            <!-- <UIcon name="i-heroicons-arrow-right" /> -->
                        </div>
                        <span class="relative z-10 transition-colors group-hover:text-white duration-300">{{ isLoading ? 'Sending...' : 'Send Message' }}</span>
                        <UIcon v-if="!isLoading" name="i-heroicons-arrow-right" class="group-hover:translate-x-12 transition-transform duration-300" />
                    </UButton>
                </UForm>
            </div>
    
          </div>
        </UContainer>
      </section>
    </template>