<script setup>
const mainRef = ref(null)

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const sections = gsap.utils.toArray('.gsap-reveal-target')
  sections.forEach((section) => {
    gsap.fromTo(section, 
      { y: 60, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    )
  })
})
</script>

<template>
  <main ref="mainRef" class="relative">
    <Hero class="gsap-reveal-target" />
    <About />
    <Contact />
    <footer class="py-6 border-t border-white/5 bg-slate-900/80 backdrop-blur-md">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-center md:text-left">
          <p class="text-slate-500 text-xs">© {{ new Date().getFullYear() }} Nizaar Znagui. {{ $t('footer.copyright') }}</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  </main>
</template>
