<script setup>
import { Mail, Send, Github, Linkedin, MapPin, ArrowUpRight, CheckCircle, AlertCircle } from 'lucide-vue-next'

const formState = ref('idle') // idle, loading, success, error
const errorMessage = ref('')

const handleSubmit = async (e) => {
  const form = e.target
  const formData = new FormData(form)
  
  formState.value = 'loading'
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      formState.value = 'success'
      form.reset()
      setTimeout(() => { formState.value = 'idle' }, 5000)
    } else {
      const data = await response.json()
      // If Formspree returns an error, it's usually because of the ID
      errorMessage.value = "Form not found. Please check your Formspree ID at line 51 of Contact.vue."
      formState.value = 'error'
    }
  } catch (err) {
    errorMessage.value = "Network Error. Check your connection."
    formState.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="min-h-screen bg-transparent relative flex flex-col items-center justify-center py-24 px-4 md:px-6 overflow-hidden">

    <div class="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl flex flex-col items-center">
      <!-- Header -->
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-4xl font-mono font-bold tracking-[0.2em] text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">> {{ $t('contact.title') }} _</h2>
        <div class="h-1 w-24 bg-emerald-500/50 mx-auto rounded-full"></div>
        <p class="text-slate-400 text-base md:text-lg max-w-xl mx-auto">{{ $t('contact.subtitle') }}</p>
      </div>

      <!-- Contact Card -->
      <div class="w-full max-w-2xl bg-slate-950/90 border border-emerald-500/10 rounded-3xl p-8 md:p-12 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_40px_rgba(16,185,129,0.05)]">
        <!-- Terminal header -->
        <div class="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800/50">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div class="w-3 h-3 rounded-full bg-amber-500/60"></div>
            <div class="w-3 h-3 rounded-full bg-emerald-500/60"></div>
          </div>
          <span class="text-xs font-mono text-slate-500 ml-3">~/contact/send_message.sh</span>
        </div>

        <!-- FORM: IMPORTANT -> Replace 'mykozqrw' with your REAL Formspree ID -->
        <form 
          @submit.prevent="handleSubmit" 
          action="https://formspree.io/f/mykozqrw" 
          method="POST" 
          class="space-y-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.3em]">{{ $t('contact.subject') }}</label>
              <input type="text" name="subject" required class="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white font-mono placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all" :placeholder="$t('contact.subject')">
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.3em]">{{ $t('contact.email') }}</label>
              <input type="email" name="email" required class="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white font-mono placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all" :placeholder="$t('contact.email')">
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.3em]">{{ $t('contact.message') }}</label>
            <textarea name="message" rows="5" required class="w-full bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white font-mono placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all resize-none" :placeholder="$t('contact.message')"></textarea>
          </div>
          
          <!-- Submit Button States -->
          <button 
            type="submit" 
            :disabled="formState === 'loading'"
            style="cursor: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%2310b981\' d=\'M18 11V6a2 2 0 0 0-4 0v5h-1V4a2 2 0 0 0-4 0v7H8V7a2 2 0 0 0-4 0v10a7 7 0 0 0 14 0v-6z\'/%3E%3C/svg%3E') 10 0, pointer !important;"
            class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-sm uppercase tracking-[0.3em] rounded-xl hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 !cursor-pointer disabled:opacity-50 disabled:cursor-wait"
          >
            <template v-if="formState === 'idle'">
              <Send :size="16" />
              {{ $t('contact.send') }}
            </template>
            <template v-else-if="formState === 'loading'">
              <div class="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </template>
            <template v-else-if="formState === 'success'">
              <CheckCircle :size="16" />
              Message Received!
            </template>
            <template v-else-if="formState === 'error'">
              <AlertCircle :size="16" />
              Retry
            </template>
          </button>

          <!-- Feedback messages -->
          <p v-if="formState === 'success'" class="text-center text-xs font-mono text-emerald-400 animate-pulse">
            Transmission complete. I'll get back to you soon.
          </p>
          <p v-if="formState === 'error'" class="text-center text-xs font-mono text-red-400">
            Error: {{ errorMessage }}
          </p>
        </form>

        <!-- Divider -->
        <div class="flex items-center gap-4 my-8">
          <div class="flex-1 h-px bg-slate-800"></div>
          <span class="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">{{ $t('contact.or') }}</span>
          <div class="flex-1 h-px bg-slate-800"></div>
        </div>

        <!-- Social Links -->
        <div class="flex items-center justify-center gap-6">
          <a href="https://github.com/Nizi7582" target="_blank" style="cursor: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%2310b981\' d=\'M18 11V6a2 2 0 0 0-4 0v5h-1V4a2 2 0 0 0-4 0v7H8V7a2 2 0 0 0-4 0v10a7 7 0 0 0 14 0v-6z\'/%3E%3C/svg%3E') 10 0, pointer !important;" class="group flex items-center gap-3 px-5 py-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-600 transition-all !cursor-pointer">
            <Github :size="20" class="text-slate-400 group-hover:text-white transition-colors" />
            <span class="text-sm font-mono text-slate-400 group-hover:text-white transition-colors">GitHub</span>
            <ArrowUpRight :size="14" class="text-slate-700 group-hover:text-emerald-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/nizaar-znagui-919140230/" target="_blank" style="cursor: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%2310b981\' d=\'M18 11V6a2 2 0 0 0-4 0v5h-1V4a2 2 0 0 0-4 0v7H8V7a2 2 0 0 0-4 0v10a7 7 0 0 0 14 0v-6z\'/%3E%3C/svg%3E') 10 0, pointer !important;" class="group flex items-center gap-3 px-5 py-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-600 transition-all !cursor-pointer">
            <Linkedin :size="20" class="text-slate-400 group-hover:text-white transition-colors" />
            <span class="text-sm font-mono text-slate-400 group-hover:text-white transition-colors">LinkedIn</span>
            <ArrowUpRight :size="14" class="text-slate-700 group-hover:text-emerald-400 transition-colors" />
          </a>
          <a href="mailto:znagui.nizaar@outlook.fr" style="cursor: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%2310b981\' d=\'M18 11V6a2 2 0 0 0-4 0v5h-1V4a2 2 0 0 0-4 0v7H8V7a2 2 0 0 0-4 0v10a7 7 0 0 0 14 0v-6z\'/%3E%3C/svg%3E') 10 0, pointer !important;" class="group flex items-center gap-3 px-5 py-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-600 transition-all !cursor-pointer">
            <Mail :size="20" class="text-slate-400 group-hover:text-white transition-colors" />
            <span class="text-sm font-mono text-slate-400 group-hover:text-white transition-colors">Email</span>
            <ArrowUpRight :size="14" class="text-slate-700 group-hover:text-emerald-400 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
