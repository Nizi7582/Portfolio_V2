<script setup>
onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  // Setup entrance animations for sections using GSAP ScrollTrigger
  const sections = gsap.utils.toArray('.gsap-section')
  
  sections.forEach((section) => {
    gsap.fromTo(section, 
      { 
        y: 100, 
        opacity: 0 
      }, 
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
  <main>
    <!-- Hero Section -->
    <Hero class="gsap-section" />

    <!-- About Section -->
    <About class="gsap-section" />

    <!-- Projects Section -->
    <Projects class="gsap-section" />
  </main>

  <!-- Footer -->
  <footer class="py-12 border-t border-white/5 bg-slate-900/80 backdrop-blur-md">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div class="space-y-2 text-center md:text-left">
        <h2 class="text-xl font-bold text-gradient italic">Nizaar Znagui</h2>
        <p class="text-slate-500 text-sm">© {{ new Date().getFullYear() }} Nizaar Znagui. {{ $t('footer.copyright') }}</p>
      </div>
      
      <SocialLinks />
    </div>
  </footer>
</template>
