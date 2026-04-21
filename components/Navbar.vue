<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { Menu, X, ArrowRight, Rocket } from 'lucide-vue-next'

const { projects } = useProjects()
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const isOpen = ref(false)
const route = useRoute()

// Close menu when route changes
watch(() => route.path, () => isOpen.value = false)

const toggleLocale = () => {
  const newLocale = locale.value === 'en' ? 'fr' : 'en'
  navigateTo(switchLocalePath(newLocale))
}

const showEscTroll = ref(false)
let trollTimeout = null

const handleKeydown = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    e.preventDefault()
    showEscTroll.value = true
    if (trollTimeout) clearTimeout(trollTimeout)
    trollTimeout = setTimeout(() => {
      showEscTroll.value = false
    }, 4000)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <!-- Top Navigation Bar -->
  <nav class="fixed w-full z-[100] top-0 transition-all duration-300 backdrop-blur-md bg-[#0f172a]/80 border-b border-white/10">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      <NuxtLink to="/" class="text-2xl font-bold text-gradient italic relative">Nizaar Znagui</NuxtLink>
      
      <div class="flex items-center gap-6 relative">
        <button @click="toggleLocale" class="text-slate-300 hover:text-white font-bold uppercase transition cursor-pointer">
          {{ locale === 'en' ? 'FR' : 'EN' }}
        </button>
        <button @click="isOpen = !isOpen" class="text-white hover:text-emerald-400 transition cursor-pointer" aria-label="Menu">
          <Menu v-if="!isOpen" :size="32" />
          <X v-else :size="32" />
        </button>
      </div>
    </div>
  </nav>

  <!-- Fullscreen Menu Overlay (outside nav to avoid stacking context issues) -->
  <Teleport to="body">
    <transition
      enter-active-class="transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      leave-active-class="transition-transform duration-700 ease-in"
      enter-from-class="translate-y-[120%]"
      enter-to-class="translate-y-0"
      leave-from-class="translate-y-0"
      leave-to-class="translate-y-[120%]"
    >
      <div v-show="isOpen" class="fixed inset-0 bg-[#0f172a] bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-[size:40px_40px] z-[200] flex items-center justify-center border-t border-emerald-500/50">
        <!-- Radial gradient to fade out grid edges -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_85%)] pointer-events-none"></div>

        <!-- Troll Popup Message -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-500 ease-in"
          enter-from-class="opacity-0 scale-90 translate-y-4"
          leave-to-class="opacity-0 scale-90 translate-y-4"
        >
          <div v-if="showEscTroll" class="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-900 border-2 border-red-500 p-6 z-[300] text-center drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
            <p class="font-mono text-red-500 font-bold mb-3 uppercase animate-pulse tracking-widest text-sm">>>> ERROR 403: OVERRIDE DENIED <<<</p>
            <p class="font-mono text-slate-300 text-sm leading-relaxed">
              {{ $t('nav.escTroll', "You really thought the ESC key worked to close the menu? Well too bad, stick with your mouse.") }}
            </p>
          </div>
        </transition>

        <!-- The Rocket pulling the menu! -->
        <Rocket 
          class="absolute -top-24 left-1/2 -translate-x-1/2 text-emerald-400 transition-transform duration-500 drop-shadow-[0_10px_10px_rgba(16,185,129,0.3)]" 
          :class="isOpen ? 'rotate-[-45deg]' : 'rotate-[135deg]'"
          :size="96"
        />

        <!-- Close button inside overlay -->
        <button @click="isOpen = false" class="absolute top-8 right-8 md:top-12 md:right-12 z-[210] flex items-center text-slate-500 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all font-mono tracking-widest text-xl font-bold cursor-pointer" aria-label="Close Menu">
          <span class="mr-2 opacity-50">[</span> ESC <span class="ml-2 opacity-50">]</span>
        </button>

        <div class="container mx-auto px-6 flex flex-col items-center justify-center max-h-[90vh] overflow-y-auto pt-24 pb-12 relative z-10">
          
          <div class="space-y-16 text-center">
            <h2 class="text-emerald-500 font-mono font-semibold tracking-[0.3em] text-sm mb-8 flex items-center justify-center gap-4">
              <span class="opacity-50">///</span>
              {{ $t('nav.projects') }}
              <span class="opacity-50">///</span>
            </h2>

            <div class="flex flex-col space-y-10 items-center">
              <NuxtLink 
                v-for="(project, index) in projects" 
                :key="project.id" 
                :to="`/projects/${project.id}`"
                class="group flex flex-col items-center cursor-pointer"
              >
                <div class="flex items-center font-mono">
                  <span class="text-emerald-500 font-bold text-4xl md:text-6xl mr-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-6 group-hover:translate-x-0 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">[</span>
                  
                  <div class="flex flex-col items-center justify-center">
                    <span class="text-emerald-500/30 text-xs tracking-[0.3em] mb-2 font-bold uppercase transition duration-300 group-hover:text-emerald-400">Lv. 0{{ index + 1 }}</span>
                    <span class="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-600 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 uppercase tracking-tighter text-center">
                      {{ project.title }}
                    </span>
                  </div>

                  <span class="text-emerald-500 font-bold text-4xl md:text-6xl ml-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-6 group-hover:translate-x-0 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">]</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
