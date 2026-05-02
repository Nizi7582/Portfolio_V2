<script setup>
import { ref, onMounted } from 'vue'

// Only translating the static parts. The dynamic titles could be localized or kept standard.
const titles = ['Full-stack Developer', 'Tech Enthusiast', 'Problem Solver']
const currentTitleIdx = ref(0)
const displayedTitle = ref('')
const isDeleting = ref(false)

const typeSpeed = 100
const deleteSpeed = 50
const pauseDuration = 2000

const typeEffect = () => {
  const fullTitle = titles[currentTitleIdx.value]
  
  if (!isDeleting.value) {
    displayedTitle.value = fullTitle.substring(0, displayedTitle.value.length + 1)
    if (displayedTitle.value === fullTitle) {
      setTimeout(() => (isDeleting.value = true), pauseDuration)
    } else {
      setTimeout(typeEffect, typeSpeed)
    }
  } else {
    displayedTitle.value = fullTitle.substring(0, displayedTitle.value.length - 1)
    if (displayedTitle.value === '') {
      isDeleting.value = false
      currentTitleIdx.value = (currentTitleIdx.value + 1) % titles.length
      setTimeout(typeEffect, typeSpeed)
    } else {
      setTimeout(typeEffect, deleteSpeed)
    }
  }
}

onMounted(async () => {
  typeEffect()

  // Dynamically import GSAP only on client side
  const { gsap } = await import('gsap')

  // Internal Hero animations
  gsap.from('.hero-text-anim', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.hero-img-anim', {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: 'elastic.out(1, 0.7)',
    delay: 0.5
  })
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center p-6">
    <!-- Animated background elements are handled in app.vue now, but keep subtle hints -->

    <div class="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-8 items-center relative z-10">
      
      <!-- Terminal HUD Text -->
      <div class="space-y-8 text-center lg:text-left border-l-2 border-emerald-500/50 pl-6 lg:pl-10 relative">
        <!-- Decoration brackets -->
        <div class="absolute -left-1.5 top-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
        <div class="absolute -left-1.5 bottom-0 w-3 h-3 border-b-2 border-l-2 border-emerald-400"></div>

        <div class="space-y-4">
          <div class="hero-text-anim flex items-center justify-center lg:justify-start gap-2 text-emerald-500/70 font-mono tracking-widest text-xs uppercase mb-2">
            <span class="inline-block w-2 h-2 bg-emerald-500 animate-pulse"></span>
            SYSTEM.IDLE // WAIT FOR INPUT...
          </div>
          <h2 class="hero-text-anim text-emerald-500 font-mono tracking-widest uppercase text-sm">
            > {{ $t('hero.welcome') }}
          </h2>
          <h1 class="hero-text-anim text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight uppercase drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
            <span class="opacity-50">[</span> 
            <span class="text-white">{{ $t('hero.im') }}</span> <span class="text-gradient">Nizaar Znagui</span> 
            <span class="opacity-50">]</span>
          </h1>
          <div class="hero-text-anim h-10 text-xl lg:text-2xl text-emerald-400/80 font-mono font-bold uppercase tracking-widest">
            $ <span class="text-white">{{ displayedTitle }}</span><span class="animate-pulse text-emerald-500 font-bold ml-1">_</span>
          </div>
        </div>

        <p class="hero-text-anim text-lg font-mono text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed border border-emerald-500/20 bg-slate-900/50 p-6 relative">
          <span class="absolute top-0 right-0 p-1 text-[10px] text-emerald-500/50">DATA_BLOCK.1</span>
          {{ $t('hero.description') }}
        </p>

        <div class="hero-text-anim flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
          <a 
            href="/documents/CV_Nizaar_Znagui_2026.pdf" 
            target="_blank" 
            style="cursor: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%2310b981\' d=\'M18 11V6a2 2 0 0 0-4 0v5h-1V4a2 2 0 0 0-4 0v7H8V7a2 2 0 0 0-4 0v10a7 7 0 0 0 14 0v-6z\'/%3E%3C/svg%3E') 10 0, pointer !important;"
            class="btn-primary group shadow-[0_0_15px_rgba(16,185,129,0.3)] !cursor-pointer"
          >
            <span class="mr-3 opacity-50"><</span> 
            [ {{ $t('hero.resume') }} ] 
            <span class="ml-3 opacity-50">></span>
          </a>
          <SocialLinks class="lg:ml-4" />
        </div>
      </div>

      <!-- Character Portrait HUD -->
      <div class="hero-img-anim relative flex justify-center lg:justify-center mt-8 lg:mt-0">
        <div class="relative w-72 lg:w-96 xl:w-[450px] aspect-[3/4] max-h-[75vh]">
          <!-- Target Crosshairs -->
          <div class="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-500 z-20"></div>
          <div class="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-500 z-20"></div>
          <div class="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-500 z-20"></div>
          <div class="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-500 z-20"></div>

          <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 border border-emerald-500/30"></div>
          
          <div class="w-full h-full relative overflow-hidden bg-emerald-900/20">
            <!-- Scanline Overlay (keep subtle scanlines but remove color tints) -->
            <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-10 mix-blend-overlay"></div>
            
            <img 
              src="/img/Nizaar_goat.jpeg" 
              alt="Nizaar Znagui" 
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Glitchy status text -->
          <div class="absolute bottom-4 right-4 z-20 font-mono text-emerald-400 text-xs text-right opacity-70">
            <p>ID: GOAT</p>
            <p>STATUS: ONLINE</p>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
