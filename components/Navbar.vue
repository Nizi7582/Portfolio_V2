<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { Menu, X, Rocket, Home, Monitor, Mail, ChevronRight, Terminal } from 'lucide-vue-next'

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const isOpen = ref(false)
const route = useRoute()

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
    trollTimeout = setTimeout(() => { showEscTroll.value = false }, 4000)
  }
}

const scrollTo = (id) => {
  isOpen.value = false
  nextTick(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  })
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

const menuItems = computed(() => [
  { id: 'hero', label: 'nav.home', icon: Home, color: 'text-emerald-400', code: 'cd ~/' },
  { id: 'about', label: 'nav.workspace', icon: Monitor, color: 'text-blue-400', code: 'cd ~/workspace' },
  { id: 'contact', label: 'nav.contact', icon: Mail, color: 'text-violet-400', code: 'cd ~/contact' },
])
</script>

<template>
  <!-- Floating Gaming Navigation Bar -->
  <nav class="fixed w-[90%] md:w-max min-w-[300px] z-[100] top-4 left-1/2 -translate-x-1/2 transition-all duration-300 backdrop-blur-xl bg-slate-950/60 border border-emerald-500/30 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.15)] group hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-emerald-500/50">
    <div class="px-6 md:px-8 h-12 flex items-center justify-between gap-6 md:gap-16">
      <NuxtLink to="/" class="text-xl md:text-2xl font-bold font-mono tracking-widest text-white drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] flex items-center gap-2">
        <span class="text-emerald-500">></span> NIZAAR_ZNAGUI<span class="animate-pulse text-emerald-500">_</span>
      </NuxtLink>
      
      <div class="flex items-center gap-6 relative">
        <button @click="toggleLocale" class="text-emerald-500 hover:text-white font-mono font-bold uppercase transition cursor-pointer text-sm tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 hover:bg-emerald-500/30">
          {{ locale === 'en' ? 'EN' : 'FR' }}
        </button>
        <button @click="isOpen = !isOpen" class="text-white hover:text-emerald-400 transition cursor-pointer hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" aria-label="Menu">
          <Menu v-if="!isOpen" :size="28" />
          <X v-else :size="28" />
        </button>
      </div>
    </div>
  </nav>

  <!-- Fullscreen Menu Overlay -->
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
        <!-- Radial gradient -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_85%)] pointer-events-none"></div>

        <!-- Troll Popup -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-500 ease-in"
          enter-from-class="opacity-0 scale-90 translate-y-4"
          leave-to-class="opacity-0 scale-90 translate-y-4"
        >
          <div v-if="showEscTroll" class="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-900 border-2 border-red-500 p-6 z-[300] text-center drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
            <p class="font-mono text-red-500 font-bold mb-3 uppercase animate-pulse tracking-widest text-sm">>>> ERROR 403: OVERRIDE DENIED <<<</p>
            <p class="font-mono text-slate-300 text-sm leading-relaxed">
              {{ $t('nav.escTroll') }}
            </p>
          </div>
        </transition>

        <!-- Rocket -->
        <Rocket 
          class="absolute -top-24 left-1/2 -translate-x-1/2 text-emerald-400 transition-transform duration-500 drop-shadow-[0_10px_10px_rgba(16,185,129,0.3)]" 
          :class="isOpen ? 'rotate-[-45deg]' : 'rotate-[135deg]'"
          :size="96"
        />

        <!-- Close button -->
        <button 
          @click="isOpen = false" 
          style="cursor: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%2310b981\' d=\'M18 11V6a2 2 0 0 0-4 0v5h-1V4a2 2 0 0 0-4 0v7H8V7a2 2 0 0 0-4 0v10a7 7 0 0 0 14 0v-6z\'/%3E%3C/svg%3E') 10 0, pointer !important;"
          class="absolute top-8 right-8 md:top-12 md:right-12 z-[210] flex items-center text-slate-500 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all font-mono tracking-widest text-xl font-bold cursor-pointer" aria-label="Close Menu"
        >
          <span class="mr-2 opacity-50">[</span> ESC <span class="ml-2 opacity-50">]</span>
        </button>

        <!-- Menu Content -->
        <div class="relative z-10 flex flex-col items-center justify-center gap-6">
          <!-- Terminal header -->
          <div class="flex items-center gap-3 mb-4">
            <Terminal :size="20" class="text-emerald-500" />
            <span class="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase">{{ $t('nav.menuTitle') }}</span>
            <Terminal :size="20" class="text-emerald-500" />
          </div>

          <!-- Menu Items -->
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="scrollTo(item.id)"
            style="cursor: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%2310b981\' d=\'M18 11V6a2 2 0 0 0-4 0v5h-1V4a2 2 0 0 0-4 0v7H8V7a2 2 0 0 0-4 0v10a7 7 0 0 0 14 0v-6z\'/%3E%3C/svg%3E') 10 0, pointer !important;"
            class="group flex items-center gap-6 cursor-pointer w-full max-w-lg"
          >
            <!-- Icon -->
            <div class="w-16 h-16 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300">
              <component :is="item.icon" :size="28" :class="[item.color, 'group-hover:scale-110 transition-transform duration-300']" />
            </div>
            <!-- Text -->
            <div class="flex flex-col items-start gap-1 flex-1">
              <span class="text-3xl md:text-5xl font-bold text-slate-600 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 uppercase tracking-tight font-mono">
                {{ $t(item.label) }}
              </span>
              <span class="text-emerald-500/30 text-[10px] tracking-[0.3em] font-mono group-hover:text-emerald-400/60 transition-colors">{{ item.code }}</span>
            </div>
            <!-- Arrow -->
            <ChevronRight :size="24" class="text-slate-800 group-hover:text-emerald-400 group-hover:translate-x-2 transition-all duration-300" />
          </button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
