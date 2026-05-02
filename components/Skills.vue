<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const categories = [
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '⚙️' },
  { id: 'cloud', name: 'Cloud & Ops', icon: '☁️' }
]

const selectedCategory = ref('frontend')

const skills = [
  // Frontend
  { id: 'htmlcss', name: 'HTML5 / CSS3', category: 'frontend', icons: ['html5'] },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icons: ['tailwindcss'] },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', icons: ['javascript'] },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', icons: ['typescript'] },
  { id: 'vue', name: 'Vue.js', category: 'frontend', icons: ['vuedotjs'] },
  { id: 'nuxt', name: 'Nuxt.js', category: 'frontend', icons: ['nuxt'] },
  { id: 'react', name: 'React', category: 'frontend', icons: ['react'] },
  { id: 'ionic', name: 'Ionic', category: 'frontend', icons: ['ionic'] },

  // Backend
  { id: 'node', name: 'Node.js', category: 'backend', icons: ['nodedotjs'] },
  { id: 'python', name: 'Python', category: 'backend', icons: ['python'] },
  { id: 'nestjs', name: 'NestJS', category: 'backend', icons: ['nestjs'] },
  { id: 'graphql', name: 'GraphQL', category: 'backend', icons: ['graphql'] },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', icons: ['fastapi'] },
  { id: 'mysql', name: 'MySQL', category: 'backend', icons: ['mysql'] },
  { id: 'mongodb', name: 'MongoDB', category: 'backend', icons: ['mongodb'] },
  { id: 'postgresql', name: 'PostgreSQL', category: 'backend', icons: ['postgresql'] },
  { id: 'firebase', name: 'Firebase', category: 'backend', icons: ['firebase'] },
  { id: 'supabase', name: 'Supabase', category: 'backend', icons: ['supabase'] },

  // Cloud & Ops
  { id: 'github', name: 'GitHub', category: 'cloud', icons: ['github'] },
  { id: 'gitlab', name: 'GitLab', category: 'cloud', icons: ['gitlab'] },
  { id: 'jira', name: 'Jira', category: 'cloud', icons: ['jira'] },
  { id: 'trello', name: 'Trello', category: 'cloud', icons: ['trello'] },
  { id: 'docker', name: 'Docker', category: 'cloud', icons: ['docker'] },
  { id: 'azuredevops', name: 'Azure DevOps', category: 'cloud', icons: ['https://www.theprovatogroup.com/wp-content/uploads/2020/01/devops.png'] },
  { id: 'vercel', name: 'Vercel', category: 'cloud', icons: ['vercel'] },
  { id: 'googlecloud', name: 'Google Cloud (GCP)', category: 'cloud', icons: ['googlecloud'] },
  { id: 'amazonaws', name: 'AWS', category: 'cloud', icons: ['https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png'] },
  { id: 'googlegemini', name: 'Gemini', category: 'cloud', icons: ['googlegemini'] },
  { id: 'antigravity', name: 'Antigravity', category: 'cloud', icons: ['https://i.logos-download.com/114435/32685-s2560-cbe9c12428c5bd3eaec0523fad5a4f1d.png/Google_Antigravity_Logo_2025_icon-s2560.png?dl'] }
]

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'all') return skills
  return skills.filter(s => s.category === selectedCategory.value)
})

const getIconUrl = (slug) => {
  if (slug.startsWith('http')) return slug
  if (slug === 'github' || slug === 'vercel') return `https://cdn.simpleicons.org/${slug}/white`
  return `https://cdn.simpleicons.org/${slug}?v=2`
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
  <section id="skills" class="py-4 relative flex flex-col items-center justify-center min-h-screen">

    <!-- The Computer Screen Background / Container -->
    <div class="w-full max-w-5xl px-4 md:px-8 relative z-20">
      
      <!-- PC Monitor Bezel (Frame) -->
      <div class="relative bg-slate-950 p-2 md:p-3 pb-4 md:pb-6 rounded-lg md:rounded-xl border border-slate-700 shadow-2xl mx-auto ring-2 ring-black">
        
        <!-- Camera -->
        <div class="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-black flex items-center justify-center ring-1 ring-slate-800">
          <div class="w-0.5 h-0.5 rounded-full bg-blue-500/20"></div>
        </div>

        <!-- Windows 11 Desktop Metaphor (The Screen) -->
        <div class="relative bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center shadow-[inset_0_0_20px_rgba(0,0,0,1)] border border-black overflow-hidden flex flex-col" style="height: calc(100vh - 300px);">
          
          <!-- Glass Overlay for the wallpaper -->
          <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>

          <!-- The "Explorer" Window -->
        <div class="relative z-10 flex-1 m-2 sm:m-6 md:m-12 bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ring-1 ring-white/10">
          
          <!-- Window Title Bar -->
          <div class="h-10 md:h-12 bg-slate-900 border-b border-slate-700/50 flex items-center justify-between px-0 select-none">
            
            <!-- Window Title (Left) -->
            <div class="flex items-center gap-2 pl-4 w-1/4">
              <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span class="text-xs text-slate-300 font-medium hidden sm:block">File Explorer</span>
            </div>

            <!-- Address Bar / Title -->
            <div class="flex-1 flex justify-center max-w-md mx-4">
              <div class="bg-slate-950/50 text-slate-300 text-[10px] md:text-xs font-mono px-3 md:px-4 py-1.5 rounded border border-slate-700/50 flex items-center gap-2 w-full shadow-inner truncate">
                <span class="opacity-70 truncate">C:\Portfolio\Skills{{ selectedCategory === 'all' ? '' : '\\' + selectedCategory }}</span>
              </div>
            </div>

            <!-- Windows Controls (Right) -->
            <div class="flex h-full w-1/4 justify-end">
              <div class="px-4 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-slate-300">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
              </div>
              <div class="px-4 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-slate-300">
                <div class="w-3 h-3 border border-current rounded-sm"></div>
              </div>
              <div class="px-4 hover:bg-red-500 hover:text-white flex items-center justify-center cursor-pointer transition-colors text-slate-300">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </div>

          </div>

          <!-- Window Content Area -->
          <div class="flex flex-1 overflow-hidden">
            
            <!-- Sidebar -->
            <div class="w-48 bg-slate-900/50 border-r border-slate-700/50 flex flex-col py-6 hidden sm:flex">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider px-6 mb-4">Quick Access</span>
              <button 
                v-for="cat in categories" 
                :key="cat.id"
                @click="selectedCategory = cat.id"
                :class="[
                  'text-left px-6 py-2.5 text-sm font-medium transition-all duration-200 flex items-center gap-3 hover:bg-white/5',
                  selectedCategory === cat.id ? 'bg-emerald-500/20 text-emerald-400 border-l-4 border-emerald-400' : 'text-slate-300 border-l-4 border-transparent'
                ]"
              >
                <span class="text-lg">{{ cat.icon }}</span>
                {{ cat.name }}
              </button>
            </div>

            <!-- Main File/App Grid -->
            <div class="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
              
              <!-- Mobile Category Selector -->
              <div class="sm:hidden flex overflow-x-auto gap-2 pb-4 mb-4 border-b border-slate-700/50 custom-scrollbar">
                <button 
                  v-for="cat in categories" 
                  :key="cat.id"
                  @click="selectedCategory = cat.id"
                  :class="[
                    'px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 flex items-center gap-1.5',
                    selectedCategory === cat.id ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-300 border border-slate-700'
                  ]"
                >
                  <span>{{ cat.icon }}</span>
                  {{ cat.name }}
                </button>
              </div>

              <!-- Grid -->
              <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-6">
                
                <div 
                  v-for="skill in filteredSkills" 
                  :key="skill.id"
                  class="group flex flex-col items-center p-2 md:p-3 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer border border-transparent hover:border-white/10 hover:shadow-lg"
                >
                  <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-3">
                    <img 
                      v-if="skill.icons.length" 
                      :src="getIconUrl(skill.icons[0])" 
                      :alt="skill.name" 
                      class="max-w-[36px] max-h-[36px] md:max-w-[48px] md:max-h-[48px] object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300" 
                    />
                  </div>
                  <span class="text-[10px] md:text-xs font-medium text-slate-300 text-center leading-tight group-hover:text-white line-clamp-2 px-1">{{ skill.name }}</span>
                </div>

              </div>

            </div>
          </div>
        </div>

        <!-- Taskbar -->
        <div class="relative z-10 h-12 md:h-14 bg-slate-950/90 backdrop-blur-2xl border-t border-slate-700/80 flex items-center justify-between px-3 sm:px-6 shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
          <!-- Start Button & Pinned Apps -->
          <div class="flex items-center gap-1 sm:gap-4">
            <!-- Windows/Start Icon -->
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-md hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">
              <svg class="w-4 h-4 md:w-5 md:h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.5 11.5L11 11.5L11 2L2.5 3L2.5 11.5ZM12.5 1.5L22.5 0L22.5 11.5L12.5 11.5L12.5 1.5ZM2.5 12.5L11 12.5L11 21L2.5 20.5L2.5 12.5ZM12.5 12.5L22.5 12.5L22.5 24L12.5 23L12.5 12.5Z"/>
              </svg>
            </div>
            <!-- Search -->
            <div class="w-10 h-10 rounded-md hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors hidden sm:flex">
              <svg class="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <!-- Explorer Icon (Active) -->
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-md bg-white/10 border-b-2 border-emerald-400 flex items-center justify-center cursor-pointer relative shadow-inner">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
              </svg>
              <div class="absolute -bottom-0.5 w-4 h-1 bg-emerald-400 rounded-full"></div>
            </div>
          </div>

          <!-- System Tray -->
          <div class="flex items-center gap-2 sm:gap-4 text-slate-300 text-xs font-mono">
            <div class="hover:bg-white/10 px-2 py-1.5 rounded cursor-pointer transition-colors flex items-center gap-2 hidden sm:flex">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            <div class="hover:bg-white/10 px-2 md:px-3 py-1.5 rounded cursor-pointer transition-colors flex flex-col items-center justify-center">
              <span class="font-bold text-[11px] md:text-[13px]">{{ time }}</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Brand Name on Bottom Bezel -->
      <div class="absolute bottom-1 md:bottom-1.5 left-1/2 -translate-x-1/2 text-[6px] md:text-[9px] text-slate-600 font-bold tracking-widest uppercase opacity-80 z-30">
        NIZAAR
      </div>
    </div>

    <!-- PC Monitor Stand -->
    <div class="relative flex flex-col items-center z-10 w-full max-w-5xl">
      <!-- Stand Neck -->
      <div class="w-16 md:w-24 h-6 md:h-10 bg-gradient-to-b from-slate-800 to-slate-950 border-l border-r border-slate-700 shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)] relative z-20"></div>
      
      <!-- Stand Base -->
      <div class="w-36 md:w-56 h-3 md:h-4 bg-gradient-to-t from-slate-600 to-slate-800 rounded-t-md md:rounded-t-lg border-t border-l border-r border-slate-600 shadow-[0_20px_40px_rgba(0,0,0,0.9)] relative -mt-1 z-30 flex justify-center">
        <!-- Base indent detail -->
        <div class="w-1/2 h-1 bg-slate-500 rounded-b-sm"></div>
      </div>
      
      <!-- Shadow on desk -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-4 bg-black/60 blur-xl rounded-[100%] z-10 pointer-events-none"></div>
    </div>

    </div>
  </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
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
