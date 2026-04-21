<script setup>
import { computed } from 'vue'
import { MapPin, User, Gamepad2, Code2 } from 'lucide-vue-next'

const { t } = useI18n()

// Translating stats array using computed to stay reactive
const stats = computed(() => [
  { label: t('about.stats.location'), value: t('about.stats.locationSub'), icon: MapPin },
  { label: t('about.stats.age'), value: t('about.stats.ageSub'), icon: User },
  { label: t('about.stats.games'), value: t('about.stats.gamesSub'), icon: Gamepad2 },
  { label: t('about.stats.tech'), value: t('about.stats.techSub'), icon: Code2 },
])
</script>

<template>
  <section id="about" class="py-24 relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-4xl font-mono font-bold tracking-[0.2em] text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">> {{ $t('about.title') }} _</h2>
          <div class="h-1 w-32 bg-emerald-500/50 mx-auto"></div>
          <p class="text-slate-400 text-lg font-mono tracking-widest uppercase text-sm">{{ $t('about.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div 
            v-for="(stat, idx) in stats" 
            :key="idx"
            class="glass-card p-5 flex flex-col space-y-3 relative overflow-hidden"
          >
            <div class="flex justify-between items-end font-mono">
              <div class="flex items-center gap-3 text-emerald-400">
                <component :is="stat.icon" :size="20" class="drop-shadow-[0_0_5px_rgba(16,185,129,1)]" />
                <span class="text-xs tracking-widest uppercase">{{ stat.label }}</span>
              </div>
              <span class="text-slate-200 font-bold text-sm bg-slate-900 border border-emerald-500/50 px-2 shadow-inner">{{ stat.value }}</span>
            </div>
            <!-- Mock progress bar -->
            <div class="h-2.5 w-full bg-slate-900/80 border border-emerald-500/30 relative">
              <div class="h-full bg-emerald-500/80 transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.6)]" :style="{ width: 70 + (idx * 5) + '%' }"></div>
              <div class="absolute top-0 right-0 h-full w-4 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div class="mt-16 glass-card p-8 md:p-12 relative overflow-hidden group border-emerald-500/40">
          <!-- Subtler background pattern -->
          <div class="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div class="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6 relative z-10 w-full">
              <h3 class="text-2xl font-mono font-bold text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">> {{ $t('about.passionTitle') }}</h3>
              <p class="text-slate-300 leading-relaxed font-mono text-sm uppercase tracking-wide border-l-2 border-emerald-500/30 pl-4 bg-slate-900/30 p-2">
                {{ $t('about.passion1') }}
              </p>
              <p class="text-slate-300 leading-relaxed font-mono text-sm uppercase tracking-wide border-l-2 border-emerald-500/30 pl-4 bg-slate-900/30 p-2">
                {{ $t('about.passion2') }}
              </p>
            </div>
            
            <div class="relative group">
              <div class="aspect-square relative overflow-hidden glass-card p-1 border-emerald-500/50">
                <!-- Data overlay -->
                <div class="absolute inset-0 z-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay"></div>
                <div class="absolute top-4 left-4 z-20 font-mono text-[10px] text-emerald-400 opacity-80 uppercase leading-none">
                  <div>TGT: LOCAL</div>
                  <div class="animate-pulse">SCANNING...</div>
                </div>
                
                <img 
                  src="/img/Nizaar_states.jpg" 
                  alt="Nizaar States" 
                  class="w-full h-full object-cover grayscale sepia-[.3] hue-rotate-[120deg] mix-blend-luminosity brightness-110 opacity-90 transition-all duration-500"
                />
              </div>
              <!-- Floating label -->
              <div class="absolute -top-6 -right-6 glass-card px-6 py-3 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-30 flex items-center gap-3">
                <div class="w-3 h-3 bg-red-500 animate-pulse"></div>
                <span class="text-emerald-400 font-bold font-mono tracking-widest uppercase">{{ $t('about.greeting') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
