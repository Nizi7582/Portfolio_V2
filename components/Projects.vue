<script setup>
import { ExternalLink, Github, ArrowRight } from 'lucide-vue-next'

const { projects } = useProjects()
</script>

<template>
  <section id="projects" class="py-24 bg-slate-900/50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-4xl font-mono font-bold tracking-[0.2em] text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">>> {{ $t('projects.title') }}</h2>
        <div class="h-1 w-32 bg-emerald-500/50 mx-auto"></div>
        <p class="text-slate-400 text-lg font-mono tracking-widest uppercase text-sm">{{ $t('projects.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="glass-card flex flex-col group overflow-hidden"
        >
          <!-- Project Image Placeholder with gradient -->
          <div class="aspect-video relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <img 
              v-if="project.image" 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover grayscale sepia-[.3] hue-rotate-[120deg] mix-blend-luminosity brightness-110 transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:sepia-0"
            />
            <div class="absolute inset-0 bg-emerald-500/20 mix-blend-color opacity-100 group-hover:opacity-0 transition-opacity pointer-events-none"></div>
            <!-- Scanlines -->
            <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay"></div>

            <span v-if="!project.image" class="text-slate-500 font-mono font-bold text-lg select-none uppercase tracking-widest">
              [ {{ $t('projects.preview') }} ]
            </span>
            
            <div class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-sm">
              <NuxtLink 
                :to="`/projects/${project.id}`" 
                class="btn-primary scale-90"
              >
                [ {{ $t('nav.viewProject') }} ]
              </NuxtLink>
            </div>
          </div>

          <div class="p-6 flex-grow flex flex-col justify-between space-y-4 border-t border-emerald-500/30 bg-[#0f172a]">
            <div class="space-y-3">
              <h3 class="text-xl font-mono font-bold text-slate-200 group-hover:text-emerald-400 transition-colors uppercase tracking-wider flex items-center gap-2">
                <span class="w-2 h-2 bg-emerald-500 opacity-50 group-hover:opacity-100 animate-pulse"></span>
                {{ project.title }}
              </h3>
              <p class="text-slate-400 font-mono text-xs uppercase leading-relaxed opacity-80">
                {{ project.description }}
              </p>
            </div>

            <div class="flex flex-wrap gap-2 pt-4">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-2 py-1 bg-slate-900 border-l-2 border-emerald-500 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-widest shadow-inner shadow-emerald-500/5"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
