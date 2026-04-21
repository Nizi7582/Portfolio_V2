<script setup>
import { onMounted, ref } from 'vue'
import { Star } from 'lucide-vue-next'

const staticStars = ref([])

onMounted(() => {
  // Setup SVG stars
  staticStars.value = Array.from({ length: 12 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.floor(Math.random() * 16) + 12,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 3 + 2}s`,
    opacity: Math.random() * 0.3 + 0.1,
    rotation: `rotate(${Math.random() * 360}deg)`
  }))

  // Setup Canvas
  const canvas = document.getElementById('stars-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  let animationFrameId
  
  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', resize)
  resize()

  const stars = []
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      speed: Math.random() * 0.15 + 0.05
    })
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    stars.forEach(star => {
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI)
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
      ctx.fill()
      
      star.y -= star.speed
      if (star.y < 0) {
        star.y = canvas.height
        star.x = Math.random() * canvas.width
      }
    })
    animationFrameId = requestAnimationFrame(render)
  }
  render()
})
</script>

<template>
  <div class="min-h-screen selection:bg-emerald-500/30 relative z-10 text-slate-200 font-sans">
    <Navbar />
    
    <NuxtPage />

    <!-- Background Decoration -->
    <div class="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#0f172a]">
      <!-- Falling particle stars -->
      <canvas id="stars-canvas" class="absolute inset-0 w-full h-full opacity-80"></canvas>
      
      <!-- Static SVG star icons -->
      <Star 
        v-for="(star, index) in staticStars" 
        :key="index"
        class="absolute text-emerald-100 animate-pulse transition-transform"
        :size="star.size"
        :style="{ 
          top: star.top, 
          left: star.left, 
          animationDelay: star.delay, 
          animationDuration: star.duration, 
          opacity: star.opacity,
          transform: star.rotation
        }"
      />

      <!-- Color gradients -->
      <div class="absolute top-0 right-0 w-[50vw] h-[50vh] bg-emerald-500/10 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-cyan-500/10 blur-[120px] rounded-full"></div>
    </div>
  </div>
</template>

<style>
/* Global styles are in assets/css/main.css */
</style>
