<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ExternalLink, Github, ChevronUp, ChevronDown, Globe, Laptop, Lock } from 'lucide-vue-next'

const { projects } = useProjects()
const selectedIndex = ref(0)
const selectedProject = computed(() => projects[selectedIndex.value])

const selectProject = (index) => {
  selectedIndex.value = index
}

const nextProject = () => {
  selectedIndex.value = (selectedIndex.value + 1) % projects.length
}

const prevProject = () => {
  selectedIndex.value = (selectedIndex.value - 1 + projects.length) % projects.length
}

const getStatusConfig = (status) => {
  switch (status) {
    case 'online':
      return { label: 'En ligne', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', icon: Globe }
    case 'local':
      return { label: 'Local', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30', icon: Laptop }
    case 'private':
      return { label: 'Privé', color: 'text-slate-400 bg-slate-500/10 border-slate-500/30', icon: Lock }
    default:
      return { label: 'Inconnu', color: 'text-slate-500 bg-slate-500/10 border-slate-500/30', icon: Lock }
  }
}

const formatTime = () => {
  const date = new Date()
  return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

const time = ref(formatTime())
let timerId = null

onMounted(() => {
  timerId = setInterval(() => {
    time.value = formatTime()
  }, 1000)
})

onUnmounted(() => {
  if (timerId) clearInterval(timerId)
})
</script>

<template>
  <section id="projects" class="relative flex flex-col items-center justify-center py-8 px-4 md:px-6">
    <!-- STATIC Background elements (No animation) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"></div>
      <div class="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]"></div>
    </div>

    <!-- FULL SCREEN PC MONITOR (This part will be animated by GSAP via class applied in parent) -->
    <div class="w-full h-[600px] md:h-[750px] max-w-[1800px] relative z-20 flex flex-col gsap-reveal-target">
      
      <!-- PC Monitor Bezel -->
      <div class="relative flex-1 bg-slate-950 p-1 md:p-2 rounded-xl md:rounded-2xl border border-slate-700 shadow-[0_0_160px_rgba(139,92,246,0.12),0_60px_120px_rgba(0,0,0,0.8)] ring-4 ring-black flex flex-col overflow-hidden">
        
        <!-- Camera -->
        <div class="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-black flex items-center justify-center ring-1 ring-slate-800">
          <div class="w-1 h-1 rounded-full bg-blue-500/20"></div>
        </div>

        <!-- The Screen -->
        <div class="relative flex-1 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center shadow-[inset_0_0_40px_rgba(0,0,0,1)] border border-black overflow-hidden flex flex-col rounded-lg">
          
          <!-- Glass Overlay -->
          <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>

          <!-- The 'Explorer' Window -->
          <div class="relative z-10 flex-1 m-1 md:m-3 lg:m-4 bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-lg shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10">
            
            <!-- Window Title Bar -->
            <div class="h-10 md:h-12 bg-slate-900 border-b border-slate-700/50 flex items-center justify-between px-0 select-none flex-shrink-0">
              <div class="flex items-center gap-3 pl-4 w-1/4">
                <svg class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span class="text-sm text-slate-300 font-medium hidden sm:block">Project Explorer</span>
              </div>

              <div class="flex-1 flex justify-center max-w-lg mx-4">
                <div class="bg-slate-950/50 text-slate-300 text-xs font-mono px-4 py-2 rounded border border-slate-700/50 flex items-center gap-2 w-full shadow-inner truncate">
                  <span class="opacity-70 truncate">C:\Portfolio\Projects\{{ selectedProject.title }}</span>
                </div>
              </div>

              <div class="flex h-full w-1/4 justify-end">
                <div class="px-6 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-slate-300">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
                </div>
                <div class="px-6 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-slate-300">
                  <div class="w-4 h-4 border-2 border-current rounded-sm"></div>
                </div>
                <div class="px-6 hover:bg-red-500 hover:text-white flex items-center justify-center cursor-pointer transition-colors text-slate-300">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
              </div>
            </div>

            <!-- Window Content -->
            <div class="flex flex-1 overflow-hidden">
              <!-- Sidebar -->
              <div class="w-56 lg:w-64 bg-slate-900/50 border-r border-slate-700/50 flex flex-col py-3 hidden md:flex flex-shrink-0 overflow-y-auto custom-scrollbar">
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-4 mb-3 font-mono">Projects Database</span>
                <button
                  v-for="(project, index) in projects"
                  :key="project.id"
                  @click="selectProject(index)"
                  class="text-left px-3 py-2 text-[13px] font-medium transition-all duration-200 flex items-center justify-between gap-2 hover:bg-white/5 cursor-pointer border-l-4"
                  :class="selectedIndex === index ? 'bg-emerald-500/20 text-emerald-400 border-l-emerald-400' : 'text-slate-300 border-l-transparent'"
                >
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="font-mono text-[11px] text-slate-600 flex-shrink-0">#{{ String(index + 1).padStart(2, '0') }}</span>
                    <span class="truncate font-bold tracking-wide text-[13px] lg:text-[14px]">{{ project.title }}</span>
                  </div>
                  <!-- Status Tag in Sidebar -->
                  <div 
                    class="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] border flex-shrink-0"
                    :class="getStatusConfig(project.status).color"
                  >
                    <component :is="getStatusConfig(project.status).icon" :size="10" />
                    <span class="uppercase tracking-tighter font-mono font-bold">{{ getStatusConfig(project.status).label }}</span>
                  </div>
                </button>
              </div>

              <!-- Mobile Project Selector -->
              <div class="md:hidden flex overflow-x-auto gap-2 p-3 border-b border-slate-700/50 custom-scrollbar sticky top-0 z-10 bg-slate-900/90">
                <button 
                  v-for="(project, index) in projects" 
                  :key="project.id"
                  @click="selectProject(index)"
                  :class="[
                    'px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex flex-col items-center gap-1',
                    selectedIndex === index ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700'
                  ]"
                >
                  <span>{{ project.title }}</span>
                  <span class="text-[8px] uppercase opacity-70">{{ getStatusConfig(project.status).label }}</span>
                </button>
              </div>

              <!-- Main Area -->
              <div class="flex-1 relative flex flex-col overflow-hidden group/screen">
                
                <!-- Main Image (Full Space) -->
                <div class="absolute inset-0 bg-slate-900">
                  <Transition
                    enter-active-class="transition-opacity duration-300 ease-out"
                    leave-active-class="transition-opacity duration-300 ease-in absolute inset-0"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <img 
                      :key="selectedProject.id"
                      :src="selectedProject.image" 
                      :alt="selectedProject.title"
                      class="w-full h-full object-cover"
                    />
                  </Transition>
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover/screen:opacity-40"></div>
                </div>

                <!-- Info Overlay -->
                <div class="absolute bottom-0 left-0 right-0 z-20 flex flex-col transform translate-y-[calc(100%-80px)] md:translate-y-[calc(100%-100px)] group-hover/screen:translate-y-0 transition-transform duration-500 ease-out">
                  
                  <div class="h-[80px] md:h-[100px] px-6 md:px-10 flex items-center justify-between bg-gradient-to-t from-slate-950/95 to-transparent backdrop-blur-[2px]">
                    <div class="flex items-center gap-4 md:gap-6">
                      <div class="flex flex-col gap-1">
                        <div 
                          class="flex items-center gap-2 px-2 py-0.5 rounded-lg text-[10px] border backdrop-blur-md w-fit"
                          :class="getStatusConfig(selectedProject.status).color"
                        >
                          <component :is="getStatusConfig(selectedProject.status).icon" :size="10" />
                          <span class="uppercase tracking-widest font-mono font-bold">{{ getStatusConfig(selectedProject.status).label }}</span>
                        </div>
                        <h3 class="text-xl md:text-3xl font-bold text-white tracking-wide drop-shadow-2xl">
                          {{ selectedProject.title }}
                        </h3>
                      </div>

                      <a 
                        v-if="selectedProject.status === 'online'" 
                        :href="selectedProject.link" 
                        target="_blank"
                        class="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono uppercase tracking-widest hover:bg-emerald-500/40 transition-all rounded-lg mt-3 !cursor-pointer"
                      >
                        <ExternalLink :size="14" />
                        {{ $t('projects.visitLive') }}
                      </a>
                    </div>

                    <div class="flex gap-2 md:gap-3">
                      <button @click.stop="prevProject" class="w-10 h-10 rounded-lg bg-slate-900/80 border border-slate-600/40 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/60 transition-all cursor-pointer backdrop-blur-md">
                        <ChevronUp :size="20" class="text-emerald-400" />
                      </button>
                      <button @click.stop="nextProject" class="w-10 h-10 rounded-lg bg-slate-900/80 border border-slate-600/40 flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-500/60 transition-all cursor-pointer backdrop-blur-md">
                        <ChevronDown :size="20" class="text-emerald-400" />
                      </button>
                    </div>
                  </div>

                  <div class="p-6 md:p-10 bg-slate-950/90 backdrop-blur-xl border-t border-slate-700/50">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-16">
                      <div class="flex-1 space-y-6">
                        <div class="space-y-2">
                          <div class="text-[10px] text-emerald-500/60 tracking-[0.3em] uppercase font-mono">Role / Designation</div>
                          <p class="text-slate-100 text-base md:text-lg font-semibold">{{ selectedProject.role }}</p>
                        </div>
                        <div class="space-y-3">
                          <div class="text-[10px] text-emerald-500/60 tracking-[0.3em] uppercase font-mono">Mission Briefing</div>
                          <p class="text-slate-300 text-sm md:text-base leading-relaxed max-w-4xl">
                            {{ $t(selectedProject.descriptionKey) }}
                          </p>
                        </div>
                      </div>

                      <div class="lg:w-[320px] flex-shrink-0 space-y-8">
                        <div class="space-y-4">
                          <div class="text-[10px] text-emerald-500/60 tracking-[0.3em] uppercase font-mono">Technology Stack</div>
                          <div class="flex flex-wrap gap-2">
                            <span 
                              v-for="tag in selectedProject.tags" 
                              :key="tag"
                              class="px-3 py-1.5 text-[11px] bg-slate-800 border border-slate-700 text-slate-300 rounded-lg hover:border-emerald-500/40 hover:text-emerald-400 transition-all font-mono"
                            >
                              {{ tag }}
                            </span>
                          </div>
                        </div>

                        <div class="flex items-center gap-4">
                          <a 
                            v-if="selectedProject.status === 'online' && selectedProject.link !== '#'" 
                            :href="selectedProject.link" 
                            target="_blank"
                            class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest hover:bg-emerald-500/20 transition-all rounded-lg !cursor-pointer"
                          >
                            <ExternalLink :size="14" />
                            {{ $t('projects.visitLive') }}
                          </a>
                          <a 
                            v-if="selectedProject.github !== '#'" 
                            :href="selectedProject.github" 
                            target="_blank"
                            class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono uppercase tracking-widest hover:bg-slate-700 transition-all rounded-lg"
                          >
                            <Github :size="14" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Initial Hint -->
                <div class="absolute bottom-[85px] md:bottom-[105px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 group-hover/screen:opacity-0 transition-opacity pointer-events-none">
                  <div class="w-1 h-8 bg-gradient-to-t from-emerald-500/50 to-transparent rounded-full animate-bounce"></div>
                  <span class="text-[10px] font-mono text-emerald-500/80 uppercase tracking-widest">Hover for details</span>
                </div>

              </div>
            </div>

            <!-- Taskbar -->
            <div class="h-10 md:h-12 bg-slate-950/95 backdrop-blur-2xl border-t border-slate-700/80 flex items-center justify-between px-6 md:px-8 shadow-2xl flex-shrink-0">
              <div class="flex items-center gap-3 md:gap-4">
                <div class="w-8 h-8 md:w-9 md:h-9 rounded-lg hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.5 11.5L11 11.5L11 2L2.5 3L2.5 11.5ZM12.5 1.5L22.5 0L22.5 11.5L12.5 11.5L12.5 1.5ZM2.5 12.5L11 12.5L11 21L2.5 20.5L2.5 12.5ZM12.5 12.5L22.5 12.5L22.5 24L12.5 23L12.5 12.5Z"/>
                  </svg>
                </div>
                <div class="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/10 border-b-2 border-emerald-400 flex items-center justify-center cursor-pointer relative shadow-inner">
                  <svg class="w-6 h-6 md:w-7 md:h-7 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                  </svg>
                  <div class="absolute -bottom-0.5 w-4 h-1 bg-emerald-400 rounded-full"></div>
                </div>
              </div>
              <div class="flex items-center gap-4 text-slate-300 font-mono">
                <span class="font-bold text-sm md:text-base">{{ time }}</span>
              </div>
            </div>
          </div>

          <!-- Brand on bezel -->
          <div class="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-slate-600 font-bold tracking-widest uppercase opacity-80 z-30">
            NIZAAR PRO MONITOR
          </div>
        </div>
      </div>

      <!-- Compact Stand Details -->
      <div class="hidden md:flex flex-col items-center w-full mt-[-2px]">
        <div class="w-24 h-6 bg-gradient-to-b from-slate-800 to-slate-950 border-x border-slate-700 shadow-inner"></div>
        <div class="w-56 h-3 bg-gradient-to-t from-slate-600 to-slate-800 rounded-t-lg border-x border-t border-slate-600 shadow-xl"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.2);
  border-radius: 4px;
}
.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.4);
}
</style>
