<script setup>
import { MapPin,Calendar,Wifi,Battery,Signal,Layout,Cpu,Layers,Mouse,RotateCcw,Monitor,Smartphone,Tablet as TabletIcon } from 'lucide-vue-next'
import gsap from 'gsap'
const { locale, t } = useI18n()
const viewState = ref('desk')
const { showProjects } = useWorkspace()

const activateDevice = (device) => {
  const tl = gsap.timeline({ onComplete: () => {
    viewState.value = device
    nextTick(() => {
      gsap.from('.active-gadget', { scale:0.3, y:200, opacity:0, duration:0.9, ease:'back.out(1.4)' })
      gsap.from('.gadget-desc', { y:30, opacity:0, duration:0.6, delay:0.5, ease:'power2.out' })
    })
  }})
  tl.to('.desk-surface', { scale:0.9, opacity:0, duration:0.5, ease:'power3.in' })
}

const resetToDesk = () => {
  const tl = gsap.timeline({ onComplete: () => {
    viewState.value = 'desk'
    nextTick(() => {
      gsap.from('.desk-surface', { scale:0.9, opacity:0, duration:0.6, ease:'back.out(1.2)' })
      gsap.from('.desk-item', { y:40, opacity:0, stagger:0.08, duration:0.5, ease:'power2.out', delay:0.2 })
    })
  }})
  tl.to('.active-gadget', { scale:0.5, y:100, opacity:0, duration:0.4, ease:'power3.in' })
}

const skills = [
  { category:'Frontend', icon:Layout, color:'text-emerald-400', items:[
    {name:'HTML5 / CSS3',slug:'html5'},{name:'Tailwind CSS',slug:'tailwindcss'},{name:'JavaScript',slug:'javascript'},
    {name:'TypeScript',slug:'typescript'},{name:'Vue.js',slug:'vuedotjs'},
    {name:'Nuxt.js',slug:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/960px-Nuxt_logo.svg.png'},
    {name:'React',slug:'react'},{name:'Ionic',slug:'ionic'}
  ]},
  { category:'Backend', icon:Cpu, color:'text-blue-400', items:[
    {name:'Node.js',slug:'nodedotjs'},{name:'Python',slug:'python'},{name:'NestJS',slug:'nestjs'},
    {name:'GraphQL',slug:'graphql'},{name:'FastAPI',slug:'fastapi'},{name:'MySQL',slug:'mysql'},
    {name:'MongoDB',slug:'mongodb'},{name:'PostgreSQL',slug:'postgresql'},{name:'Firebase',slug:'firebase'},
    {name:'Supabase',slug:'supabase'},{name:'PHP',slug:'php'},{name:'Stripe',slug:'stripe'},{name:'Keycloak',slug:'keycloak'}
  ]},
  { category:'Cloud & Ops', icon:Layers, color:'text-amber-400', items:[
    {name:'GitHub',slug:'github'},{name:'GitLab',slug:'gitlab'},{name:'Jira',slug:'jira'},{name:'Trello',slug:'trello'},
    {name:'Docker',slug:'docker'},{name:'Vercel',slug:'vercel'},{name:'Google Cloud',slug:'googlecloud'},
    {name:'AWS',slug:'https://logodownload.org/wp-content/uploads/2017/11/amazon-web-services-logo.png'},
    {name:'SonarCloud',slug:'https://cdn.worldvectorlogo.com/logos/sonarcloud-1.svg'},
    {name:'Vitest',slug:'https://vitest.fr/_astro/logo-vitest.CSLvu-Vl.svg'},
    {name:'Playwright',slug:'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/playwright-y50bnthygb3rvsppvkm9e.png/playwright-q55xzpenhgjsodksybst.png?_a=DATAiZAAZAA0'},
    {name:'Gemini',slug:'googlegemini'},
    {name:'Antigravity',slug:'https://i.logos-download.com/114435/32685-s2560-cbe9c12428c5bd3eaec0523fad5a4f1d.png/Google_Antigravity_Logo_2025_icon-s2560.png?dl'}
  ]}
]
const activeSkillTab = ref('Frontend')
const filteredSkills = computed(() => skills.find(s => s.category === activeSkillTab.value)?.items || [])
const getIconUrl = (slug) => {
  if (slug.startsWith('http')) return slug
  if (['github','vercel','nextdotjs','express'].includes(slug)) return `https://cdn.simpleicons.org/${slug}/white`
  return `https://cdn.simpleicons.org/${slug}?v=2`
}
const time = ref('')
let timerId = null
onMounted(() => { const f=()=>new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}); time.value=f(); timerId=setInterval(()=>{time.value=f()},1000) })
onUnmounted(() => { if(timerId) clearInterval(timerId) })
</script>

<template>
<section id="about" class="min-h-screen bg-slate-950 relative flex flex-col items-center justify-center py-24 px-4 md:px-6 overflow-hidden">
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
  </div>
  <div class="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl flex flex-col items-center">
    <!-- FIXED TITLE -->
    <div class="max-w-4xl text-center mb-16 space-y-4">
      <h2 class="text-3xl md:text-4xl font-mono font-bold tracking-[0.2em] text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">> {{ $t('about.title') }} _</h2>
      <div class="h-1 w-24 bg-emerald-500/50 mx-auto rounded-full"></div>
    </div>

    <!-- DESK VIEW -->
    <div v-if="viewState==='desk'" class="w-full flex flex-col items-center desk-surface">
      <div class="relative w-full max-w-6xl">
        <div class="relative w-full h-[520px] md:h-[550px] rounded-[2rem] border border-slate-700/50 shadow-[0_30px_80px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden" style="background:linear-gradient(145deg,#1a1f2e 0%,#141825 40%,#111520 100%);">
          <div class="absolute inset-0 opacity-[0.03]" style="background-image:repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,0.1) 60px,rgba(255,255,255,0.1) 61px);"></div>
          <div class="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/[0.02] to-transparent"></div>
          <div class="absolute top-12 right-12 desk-item"><Mouse :size="22" class="text-slate-800/30 rotate-12" /></div>

          <!-- Devices row: Phone → Tablet → PC -->
          <div class="absolute inset-0 flex items-center justify-center gap-10 md:gap-16 lg:gap-24 px-8">
            <!-- PHONE -->
            <div @click="activateDevice('phone')" class="cursor-pointer group desk-item flex flex-col items-center">
              <div class="transition-all duration-500 group-hover:-translate-y-6 group-hover:scale-105">
                <div class="absolute -bottom-4 left-4 right-4 h-8 bg-black/30 rounded-full blur-lg group-hover:blur-xl group-hover:-bottom-6 transition-all"></div>
                <div class="relative w-[100px] md:w-[120px] h-[180px] md:h-[220px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-700 rounded-[1.8rem] p-[3px] shadow-xl ring-1 ring-white/5">
                  <div class="w-full h-full bg-slate-950 rounded-[1.6rem] overflow-hidden flex flex-col items-center justify-center relative">
                    <div class="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-900 rounded-full"></div>
                    <div class="absolute inset-2 rounded-[1.2rem] bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-700"></div>
                    <Smartphone :size="28" class="text-slate-800 group-hover:text-emerald-500/60 transition-colors duration-500 mb-2" />
                    <span class="text-[7px] font-mono text-slate-800 group-hover:text-emerald-400/60 uppercase tracking-[0.2em] transition-colors">About</span>
                  </div>
                </div>
              </div>
              <span class="mt-6 text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] group-hover:text-emerald-400 transition-colors">{{ $t('about.deskPhone') }}</span>
            </div>

            <!-- TABLET -->
            <div @click="activateDevice('tablet')" class="cursor-pointer group desk-item flex flex-col items-center">
              <div class="transition-all duration-500 group-hover:-translate-y-6 group-hover:scale-105">
                <div class="absolute -bottom-4 left-6 right-6 h-8 bg-black/30 rounded-full blur-lg group-hover:blur-xl group-hover:-bottom-6 transition-all"></div>
                <div class="relative w-[200px] md:w-[260px] h-[140px] md:h-[170px] bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-[1.5rem] p-[3px] shadow-xl ring-1 ring-white/5">
                  <div class="w-full h-full bg-slate-950 rounded-[1.3rem] overflow-hidden flex flex-col items-center justify-center relative">
                    <div class="absolute top-1/2 left-1.5 -translate-y-1/2 w-1 h-5 bg-slate-900 rounded-full"></div>
                    <div class="absolute inset-2 rounded-[1rem] bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-700"></div>
                    <TabletIcon :size="32" class="text-slate-800 group-hover:text-blue-500/60 transition-colors duration-500 mb-2" />
                    <span class="text-[7px] font-mono text-slate-800 group-hover:text-blue-400/60 uppercase tracking-[0.2em] transition-colors">Skills</span>
                  </div>
                </div>
              </div>
              <span class="mt-6 text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">{{ $t('about.deskTablet') }}</span>
            </div>

            <!-- PC MONITOR -->
            <div @click="activateDevice('pc')" class="cursor-pointer group desk-item flex flex-col items-center">
              <div class="transition-all duration-500 group-hover:-translate-y-6 group-hover:scale-105">
                <div class="absolute -bottom-4 left-6 right-6 h-8 bg-black/30 rounded-full blur-lg group-hover:blur-xl group-hover:-bottom-6 transition-all"></div>
                <div class="relative w-[200px] md:w-[260px] h-[140px] md:h-[170px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-700 rounded-xl p-[3px] shadow-xl ring-1 ring-white/5">
                  <div class="w-full h-full bg-slate-950 rounded-[10px] overflow-hidden flex flex-col items-center justify-center relative">
                    <div class="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                    <div class="absolute inset-2 rounded-lg bg-violet-500/0 group-hover:bg-violet-500/10 transition-all duration-700"></div>
                    <Monitor :size="32" class="text-slate-800 group-hover:text-violet-500/60 transition-colors duration-500 mb-2" />
                    <span class="text-[7px] font-mono text-slate-800 group-hover:text-violet-400/60 uppercase tracking-[0.2em] transition-colors">Projects</span>
                  </div>
                </div>
                <div class="flex flex-col items-center"><div class="w-6 h-4 bg-slate-800 border-x border-slate-700/50"></div><div class="w-16 h-2 bg-slate-800 rounded-b-lg border border-t-0 border-slate-700/50"></div></div>
              </div>
              <span class="mt-2 text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] group-hover:text-violet-400 transition-colors">{{ $t('about.deskPc') }}</span>
            </div>
          </div>

          <div class="absolute bottom-6 right-8 text-[9px] font-mono text-slate-800/40 uppercase tracking-[0.5em]">Nizaar Workspace v4.0</div>
        </div>
        <div class="w-full h-4 rounded-b-2xl" style="background:linear-gradient(to bottom,#0f1219,#0a0d14);"></div>
        <div class="flex justify-between px-20"><div class="w-16 h-3 bg-slate-900/50 rounded-b-lg"></div><div class="w-16 h-3 bg-slate-900/50 rounded-b-lg"></div></div>
      </div>
      <p class="mt-14 text-slate-600 text-xs font-mono uppercase tracking-[0.4em] animate-pulse">{{ $t('about.deskHint') }}</p>
    </div>

    <!-- PHONE VIEW -->
    <div v-else-if="viewState==='phone'" class="w-full flex flex-col items-center">
      <button @click="resetToDesk" class="mb-8 flex items-center gap-3 px-6 py-3 bg-slate-900/80 border border-slate-700 hover:border-emerald-500/50 rounded-full text-slate-300 hover:text-emerald-400 text-sm font-mono uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"><RotateCcw :size="16" /> {{ $t('about.backToDesk') }}</button>
      <p class="text-slate-400 text-base md:text-lg text-center max-w-2xl mb-10 leading-relaxed gadget-desc">{{ $t('about.passion1') }} {{ $t('about.passion2') }}</p>
      <div class="active-gadget w-[320px] md:w-[350px]">
        <div class="bg-gradient-to-b from-slate-600 via-slate-800 to-slate-600 rounded-[3rem] p-[4px] shadow-[0_0_60px_rgba(16,185,129,0.1),0_25px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
          <div class="bg-slate-900 rounded-[2.8rem] p-[2px]">
            <div class="bg-slate-950 rounded-[2.7rem] overflow-hidden border border-slate-800/50 flex flex-col h-[650px]">
              <div class="h-10 bg-transparent flex items-center justify-between px-8 relative z-20">
                <span class="font-mono text-[10px] text-slate-400 font-bold">{{ time }}</span>
                <div class="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black flex items-center justify-end px-3 ring-1 ring-white/5"><div class="w-1.5 h-1.5 rounded-full bg-blue-500/40 ring-1 ring-blue-400/20"></div></div>
                <div class="flex items-center gap-1.5"><Signal :size="10" class="text-slate-400" /><Wifi :size="10" class="text-slate-400" /><Battery :size="12" class="text-emerald-500" /></div>
              </div>
              <div class="flex-1 overflow-hidden flex flex-col">
                <div class="p-8 pt-4 text-center">
                  <div class="relative w-36 h-36 mx-auto mb-6 group">
                    <div class="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img src="/img/Nizaar_serious.jpg" alt="Nizaar Znagui" class="w-full h-full rounded-full border-2 border-emerald-500/50 object-cover relative z-10 shadow-2xl" onerror="this.src='https://media.licdn.com/dms/image/v2/D4D03AQH4OVJTOC4kog/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725387166528?e=2147483647&v=beta&t=JQtCG49C2fqmPI2_u19zkK0BsbwK-ySIDkF0NiQxPsM'" />
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-1">Nizaar Znagui</h3>
                  <p class="text-emerald-400 text-[10px] font-mono mb-10 uppercase tracking-[0.4em] font-black">FULL STACK DEVELOPER</p>
                  <div class="space-y-4">
                    <div class="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800/50 rounded-2xl text-left">
                      <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400"><MapPin :size="20" /></div>
                      <div><div class="text-[9px] text-slate-500 uppercase font-mono tracking-widest">{{ $t('about.stats.locationLabel') }}</div><div class="text-sm text-slate-200 font-bold">{{ $t('about.stats.locationValue') }}</div></div>
                    </div>
                    <div class="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800/50 rounded-2xl text-left">
                      <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400"><Calendar :size="20" /></div>
                      <div><div class="text-[9px] text-slate-500 uppercase font-mono tracking-widest">{{ $t('about.stats.ageLabel') }}</div><div class="text-sm text-slate-200 font-bold">21 {{ locale==='fr'?'ans':'years old' }}</div></div>
                    </div>
                  </div>
                </div>
                <div class="px-8 pb-10 mt-auto grid grid-cols-2 gap-4">
                  <div class="p-5 bg-slate-900/80 border border-slate-800/50 rounded-2xl text-center shadow-lg"><div class="text-2xl font-bold text-emerald-400 font-mono">5+</div><div class="text-[8px] text-slate-500 uppercase tracking-widest font-mono font-bold">{{ $t('about.stats.expLabel') }}</div></div>
                  <div class="p-5 bg-slate-900/80 border border-slate-800/50 rounded-2xl text-center shadow-lg"><div class="text-2xl font-bold text-blue-400 font-mono">10+</div><div class="text-[8px] text-slate-500 uppercase tracking-widest font-mono font-bold">{{ $t('about.stats.projectsLabel') }}</div></div>
                </div>
              </div>
              <div class="h-10 bg-slate-950 flex items-center justify-center border-t border-slate-900/50 relative"><div class="w-16 h-1 bg-slate-800 rounded-full"></div><span class="absolute bottom-2 text-[8px] font-black text-slate-800 tracking-[0.4em] uppercase">NIZAAR</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TABLET VIEW -->
    <div v-else-if="viewState==='tablet'" class="w-full flex flex-col items-center">
      <button @click="resetToDesk" class="mb-8 flex items-center gap-3 px-6 py-3 bg-slate-900/80 border border-slate-700 hover:border-blue-500/50 rounded-full text-slate-300 hover:text-blue-400 text-sm font-mono uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"><RotateCcw :size="16" /> {{ $t('about.backToDesk') }}</button>
      <p class="text-slate-400 text-base md:text-lg text-center max-w-2xl mb-10 leading-relaxed gadget-desc">{{ $t('about.skillsIntro') }}</p>
      <div class="active-gadget w-full max-w-[950px] md:w-[1000px]">
        <div class="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 rounded-[2.5rem] p-[4px] shadow-[0_0_80px_rgba(59,130,246,0.1),0_40px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
          <div class="bg-slate-900 rounded-[2.3rem] p-[2px]">
            <div class="bg-slate-950 rounded-[2.2rem] overflow-hidden border border-slate-800/50 flex flex-col h-[550px] md:h-[600px]">
              <div class="h-12 bg-slate-900/50 flex items-center justify-between px-10 border-b border-slate-800/50">
                <div class="flex items-center gap-4"><div class="w-2.5 h-2.5 rounded-full bg-slate-800 ring-1 ring-white/5"></div><span class="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest">Nizaar Workspace v4.0</span></div>
                <div class="flex items-center gap-8"><span class="text-xs font-mono text-slate-400 font-bold">{{ time }}</span><div class="flex items-center gap-3"><Wifi :size="14" class="text-slate-500" /><Battery :size="16" class="text-emerald-500" /></div></div>
              </div>
              <div class="flex flex-1 overflow-hidden">
                <div class="w-24 md:w-28 bg-slate-900/50 border-r border-slate-800/50 flex flex-col items-center py-10 gap-10">
                  <button v-for="s in skills" :key="s.category" @click="activeSkillTab=s.category" class="p-4 rounded-2xl transition-all duration-300 group relative" :class="activeSkillTab===s.category?'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-110':'text-slate-500 hover:text-slate-300 hover:bg-slate-800'">
                    <component :is="s.icon" :size="28" />
                    <span class="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-slate-700 uppercase font-mono tracking-widest">{{ s.category }}</span>
                  </button>
                </div>
                <div class="flex-1 p-8 md:p-10 overflow-y-auto custom-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent)]">
                  <div class="flex items-center justify-between mb-8">
                    <div><h2 class="text-3xl font-bold text-white tracking-tight">{{ activeSkillTab }}</h2><p class="text-[10px] text-slate-500 font-mono tracking-[0.3em] uppercase">Authorized System Modules</p></div>
                    <div class="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center"><component :is="skills.find(s=>s.category===activeSkillTab).icon" :size="32" :class="skills.find(s=>s.category===activeSkillTab).color" /></div>
                  </div>
                  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div v-for="item in filteredSkills" :key="item.name" class="group p-3 md:p-3.5 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-emerald-500/40 hover:bg-slate-800 transition-all cursor-default flex flex-col items-center text-center gap-2 shadow-lg">
                      <div class="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-950 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300 shadow-inner"><img :src="getIconUrl(item.slug)" :alt="item.name" class="w-full h-full object-contain" /></div>
                      <span class="text-[10px] md:text-[11px] font-bold text-slate-300 tracking-wide truncate w-full">{{ item.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-12 bg-slate-950 flex items-center justify-center relative border-t border-slate-900/50"><div class="w-16 h-1.5 bg-slate-800 rounded-full"></div><span class="absolute right-10 text-[10px] font-black text-slate-800 tracking-[0.6em] uppercase">NIZAAR TAB PRO</span></div>
            </div>
          </div>
        </div>
      </div>
      </div>

    <!-- PC VIEW -->
    <div v-else-if="viewState==='pc'" class="w-full flex flex-col items-center">
      <button @click="resetToDesk" class="mb-8 flex items-center gap-3 px-6 py-3 bg-slate-900/80 border border-slate-700 hover:border-violet-500/50 rounded-full text-slate-300 hover:text-violet-400 text-sm font-mono uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"><RotateCcw :size="16" /> {{ $t('about.backToDesk') }}</button>
      <p class="text-slate-400 text-base md:text-lg text-center max-w-2xl mb-4 leading-relaxed gadget-desc">{{ $t('about.projectsIntro') }}</p>
      <div class="active-gadget w-full overflow-visible">
        <Projects />
      </div>
    </div>

  </div>
</section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar{width:4px;height:4px}
.custom-scrollbar::-webkit-scrollbar-track{background:transparent}
.custom-scrollbar::-webkit-scrollbar-thumb{background:rgba(148,163,184,0.1);border-radius:10px}
.custom-scrollbar:hover::-webkit-scrollbar-thumb{background:rgba(148,163,184,0.2)}
</style>
