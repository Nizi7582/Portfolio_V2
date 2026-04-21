<script setup>
import { useRoute } from 'vue-router'
import { ArrowLeft, Github, ExternalLink } from 'lucide-vue-next'
import { onMounted } from 'vue'

const route = useRoute()
const { getProjectById } = useProjects()

const project = getProjectById(route.params.id)

onMounted(async () => {
  const { gsap } = await import('gsap')
  gsap.from('.project-anim', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="min-h-screen pt-32 pb-24 px-6 relative">
    <div v-if="project" class="container mx-auto max-w-5xl">
      <NuxtLink to="/" class="project-anim inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 mb-12 font-bold transition">
        <ArrowLeft :size="20" />
        Back to Home
      </NuxtLink>

      <div class="project-anim space-y-6 mb-12">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter">{{ project.title }}</h1>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-bold rounded-full border border-emerald-500/20"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="project-anim aspect-video rounded-3xl overflow-hidden glass-card mb-16 relative">
        <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover opacity-80" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
      </div>

      <div class="project-anim grid md:grid-cols-3 gap-12">
        <div class="md:col-span-2 space-y-8">
          <h2 class="text-3xl font-bold">About this project</h2>
          <p class="text-slate-300 text-lg leading-relaxed">
            {{ project.description }}
          </p>
          <p class="text-slate-400 leading-relaxed">
            This is a placeholder for the detailed case study. Here you would write about the challenges faced, the architecture chosen, and the solutions implemented to make this project successful.
          </p>
        </div>

        <div class="space-y-8">
          <div class="glass-card p-6 space-y-6">
            <h3 class="text-xl font-bold text-emerald-500 uppercase tracking-widest text-sm">Details</h3>
            
            <div class="space-y-4">
               <div>
                  <div class="text-slate-400 text-sm mb-1">Role</div>
                  <div class="font-bold">Lead Developer</div>
               </div>
               <div>
                  <div class="text-slate-400 text-sm mb-1">Timeline</div>
                  <div class="font-bold">2 Months</div>
               </div>
            </div>

            <div class="h-px w-full bg-white/10"></div>

            <div class="flex flex-col gap-4">
              <a v-if="project.link !== '#'" :href="project.link" target="_blank" class="btn-primary group flex items-center justify-center gap-2">
                 Visit Live
                 <ExternalLink :size="18" class="group-hover:translate-x-1 transition-transform" />
              </a>
              <a v-if="project.github !== '#'" :href="project.github" target="_blank" class="w-full relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-200 bg-slate-800 rounded-xl hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 focus:ring-offset-slate-900 border border-white/10 gap-2">
                 <Github :size="18" />
                 Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div v-else class="container mx-auto text-center py-32 space-y-6">
       <h1 class="text-4xl font-bold text-red-400">Project Not Found</h1>
       <NuxtLink to="/" class="btn-primary inline-block">Return Home</NuxtLink>
    </div>
  </div>
</template>
