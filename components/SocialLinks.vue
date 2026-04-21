<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
</script>

<template>
  <div class="flex items-center space-x-6">
    <a 
      href="https://github.com/Nizi7582" 
      target="_blank" 
      class="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
      aria-label="GitHub"
    >
      <Github :size="28" />
    </a>
    <a 
      href="https://www.linkedin.com/in/nizaar-znagui-919140230/" 
      target="_blank" 
      class="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
      aria-label="LinkedIn"
    >
      <Linkedin :size="28" />
    </a>
    <a 
      href="mailto:znagui.nizaar@outlook.fr" 
      class="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
      aria-label="Email"
    >
      <Mail :size="28" />
    </a>
  </div>
</template>
