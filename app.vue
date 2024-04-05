<template>
  <div class="relative">
    <!-- Part 1 -->
    <div
      class="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 border-[0.7vh] border-gray-200"
    >
      <div class="w-full h-full grid grid-cols-3">
        <div class="flex flex-col p-[2vw]">
          <h1 class="text-[2vw] flex text-green-500 uppercase tracking-widest">
            <span class="font-bold pr-[0.5vw]">Portfolio</span>
          </h1>
          <div class="bg-gray-200 h-[0.5vh] w-full my-[6vh]"></div>

          <h1 class="text-[2vw] flex text-gray-200 uppercase tracking-widest">
            <span class="pr-[0.5vw]">My name is</span>
          </h1>

          <h1
            class="text-[5vw] flex flex-col items-center -space-y-[2vw] font-bold text-green-500 pt-[6vh]"
          >
            <div class="police">Nizaar</div>
            <div>Znagui</div>
          </h1>
          <h1
            class="text-[2vw] flex justify-end text-gray-200 uppercase tracking-widest pt-[8vh]"
          >
            developer
          </h1>

          <a href="https://cv-nizaarznagui.tiiny.site" target="_blank" class="relative mx-auto mt-[8vh]">
            <span
              class="absolute top-0 left-0 mt-[0.3vw] ml-[0.3vw] h-full w-full rounded bg-gray-700"
            ></span>
            <span
              class="fold-bold relative inline-block h-[5vh] w-[14vw] rounded flex justify-center items-center text-center border-2 border-black bg-black font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-green-500 text-[1.2vw]"
            >
              Check my cv
            </span>
          </a>
        </div>
        <div class="overflow-hidden">
          <img
            src="/src/assets/img/Nizaar_states.jpg"
            class="h-full mx-auto border-b-[0.7vh] border-gray-200"
          />
        </div>
        <div class="flex flex-col mx-auto pt-[2vw] px-[1vw] flex-wrap">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/017/217/318/small/white-speech-bubble-quotes-box-text-box-frame-talk-chat-box-conversation-bubble-decoration-png.png"
            class="w-[30vw]"
          />

          <div
            class="absolute text-[1.7vw] flex justify-center items-center mx-auto rounded-3xl pl-[2vw] pt-[2.5vh] font-extrabold"
          >
            <div>
              A
              <span class="police">passionate</span>
              developer who is always
              <span class="police">curious</span>
              about web technologies
            </div>
          </div>

          <div class="flex flex-col pl-[0.8vw] pt-[9vh] space-y-[8vh]">
            <div class="flex items-center space-x-[3vh] h-[5vh] police">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="20vh"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#0b67b2"
                  d="M16.101 433.477c51.257 11.934 102.515 11.496 153.772 6.648v-.146c106.749-10.903 213.498-42.724 320.248-17.049c9.944 2.392 19.499-5.177 19.499-15.405V94.03c0-.632-.05-1.253-.123-1.868c-2.445-6.466-8.167-12.093-14.835-13.639c-97.449-22.688-194.899-.69-292.348 11.399c-10.813 1.452-21.626 2.773-32.439 3.878v-.3c-51.257 4.848-102.515 5.286-153.772-6.648C7.209 84.79 0 89.89 0 98.788v314.424c0 8.886 7.209 18.204 16.101 20.265"
                />
                <path
                  fill="#ff473e"
                  d="M509.619 92.532c-2.364-6.619-8.163-12.435-14.959-14.01c-51.638-12.022-103.276-11.49-154.914-6.54v346.626c51.638-4.95 103.276-5.482 154.914 6.54c6.795 1.575 12.595-1.041 14.959-6.328z"
                />
                <path
                  fill="#e8e8e8"
                  d="M169.873 440.125c56.624-5.356 113.249-16.089 169.873-21.517V71.982c-56.624 5.428-113.249 16.161-169.873 21.517z"
                />
              </svg>
              <div class="font-bold text-white text-[2vw] tracking-wide">
                French developer
              </div>
            </div>
            <div class="flex items-center space-x-[3vh] h-[5vh] police">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="20vh"
                viewBox="0 0 36 36"
              >
                <ellipse cx="18" cy="26" fill="#8899a6" rx="18" ry="10" />
                <ellipse cx="18" cy="24.25" fill="#ccd6dd" rx="18" ry="10" />
                <path
                  fill="#a06b40"
                  d="M32.675 23.685c0 4.26-6.57 7.712-14.675 7.712S3.325 27.945 3.325 23.685c0-4.258 6.57-7.711 14.675-7.711c8.104 0 14.675 3.453 14.675 7.711"
                />
                <path
                  fill="#6f4c2f"
                  d="M32.233 22.543c0 9.854-28.466 9.854-28.466 0v-8.759h28.466z"
                />
                <path
                  fill="#a06b40"
                  d="M17.984 18.166c-8.984 0-14.218-4.132-14.218-4.132s-.016.924-.016 1.685c0 0 .032 4.898 2.572 4.898c2.459 0 2.28 2.348 3.834 2.591c1.541.241 1.712-.938 3.625-.938s2.25 2.106 4.203 2.106c2.289 0 2.477-2.106 4.389-2.106s2.132 1.224 3.386.885c1.507-.408.814-2.537 3.887-2.537c2.54 0 2.603-4.648 2.603-4.648c0-.76-.017-1.935-.017-1.935s-5.263 4.131-14.248 4.131"
                />
                <path
                  fill="#b57745"
                  d="M32.675 12.737c0 4.259-6.57 7.712-14.675 7.712S3.325 16.996 3.325 12.737S9.895 5.025 18 5.025c8.104 0 14.675 3.453 14.675 7.712"
                />
                <path
                  fill="#fff8e8"
                  d="M25.664 13.784c-.605 0-1.095-.49-1.095-1.095V5.025a1.095 1.095 0 1 1 2.19 0v7.664c0 .605-.49 1.095-1.095 1.095"
                />
                <path
                  fill="#fdac3a"
                  d="M25.664 6.667c-1.162 0-2.076-.532-2.445-1.423c-.32-.773-.479-2.45 2.058-4.986a.547.547 0 0 1 .774 0c2.537 2.537 2.378 4.213 2.058 4.986c-.369.891-1.283 1.423-2.445 1.423"
                />
                <path
                  fill="#fff8e8"
                  d="M18 17.068c-.605 0-1.095-.49-1.095-1.095V8.31a1.095 1.095 0 1 1 2.19 0v7.664c0 .604-.49 1.094-1.095 1.094"
                />
                <path
                  fill="#fdac3a"
                  d="M18 9.952c-1.162 0-2.076-.532-2.445-1.423c-.321-.773-.479-2.45 2.058-4.986a.547.547 0 0 1 .774 0c2.537 2.537 2.378 4.213 2.058 4.986c-.369.891-1.283 1.423-2.445 1.423"
                />
                <path
                  fill="#fff8e8"
                  d="M10.336 13.784c-.605 0-1.095-.49-1.095-1.095V5.025a1.095 1.095 0 1 1 2.19 0v7.664c0 .605-.49 1.095-1.095 1.095"
                />
                <path
                  fill="#fdac3a"
                  d="M10.336 6.667c-1.162 0-2.076-.532-2.445-1.423c-.321-.773-.479-2.45 2.058-4.986a.547.547 0 0 1 .774 0c2.537 2.537 2.378 4.213 2.058 4.986c-.369.891-1.283 1.423-2.445 1.423"
                />
              </svg>
              <div class="font-bold text-white text-[2vw] tracking-wide">
                19 years old
              </div>
            </div>
            <div class="flex items-center space-x-[3vh] h-[5vh] police">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="20vh"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#464c4f"
                  d="M19.64 35.33c.09-.26-.09-4.82 2.45-8.41s5.87-4.12 8.33-4.56c2.98-.53 10.17-1.4 11.31 1.05c1.14 2.45.26 3.77 2.1 4.47s-1.49 4.82-1.49 4.82zm88.25-.09s.72-4.43-1.81-7.42c-3.8-4.51-9.75-5.97-15.38-5.97c-1.81 0-3.98.35-4.68 2.51c-.4 1.25-.68 2.77-1.56 2.94c-.87.18 17.73 5.93 23.43 7.94"
                />
                <path
                  fill="#5e6268"
                  d="M39.04 81.29c-2.99 2.32-6.96 18.32-13.17 22.55s-20.28 1.97-21.34-6.66c-.93-7.61.76-23.61 5-39.96s7.5-24.45 17.41-27.1c7.95-2.13 23.53-3.63 38.66-3.48c15.14.15 28.39.15 36.72 3.33c7.47 2.85 12.56 10.6 16.05 25.73c3.48 15.14 6.17 33.34 5.75 39.36c-.61 8.78-13.02 14.38-22.25 7.57c-7.35-5.42-8.78-19.22-12.56-21.19s-47.55-2.27-50.27-.15"
                />
                <path
                  fill="#9e9e9e"
                  d="M93.25 77.17c-.72.9.94 2.24 2.12 5.17c1.18 2.93 4.22 12.63 7.17 15.34c3.68 3.37 6.55 2.74 7.11 1.68s-2.62-3.8-6.36-9.91s-8.54-14.15-10.04-12.28m-82.73-2.49c-1.11.2-4.05 14.96-1.87 21.2c1.82 5.2 8.79 5.49 11.41 4.74c5.22-1.49 6.86-6.55 5.67-7.11c-1.18-.56-5.32 3.4-9.23 1.56c-4.36-2.06-4.3-7.86-4.86-13.72c-.5-5.28-.06-6.86-1.12-6.67m27.49-32.73c-.41 0-4.01-.02-4.01-.02l.02-4.35s.08-3.51-3.68-3.43c-3.37.07-3.3 2.88-3.3 3.43s-.02 4.32-.02 4.32s-3.82-.04-4.53-.02s-3.37.06-3.37 3.49c0 3.24 2.75 3.47 3.37 3.49s4.51.02 4.51.02s-.03 3.63-.02 4.22s.12 3.37 3.49 3.37c3.68 0 3.49-3.37 3.49-3.37l.02-4.19s3.44.03 4.04.02c.86-.02 3.39-.25 3.43-3.68c.03-3.39-3.02-3.3-3.44-3.3"
                />
                <circle cx="48.4" cy="62.42" r="8.54" fill="#afafaf" />
                <circle cx="77.75" cy="62.55" r="8.54" fill="#afafaf" />
                <circle cx="48.39" cy="62.21" r="5.71" fill="#c8c8c8" />
                <circle cx="77.75" cy="62.4" r="5.71" fill="#c8c8c8" />
                <circle cx="85.82" cy="45.67" r="4.6" fill="#2086fa" />
                <circle cx="94.94" cy="54.48" r="4.6" fill="#06ac48" />
                <circle cx="104.12" cy="46.4" r="4.6" fill="#f72e26" />
                <circle cx="95.02" cy="37.01" r="4.6" fill="#fdb700" />
              </svg>

              <div class="font-bold text-white text-[2vw] tracking-wide">
                Games lovers
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="bg-gray-200 h-[0.5vh] w-full mt-[10vh]"></div>
          </div>

          <div class="flex justify-between">
            <a href="https://github.com/Nizi7582" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="20vh"
                viewBox="0 0 16 16"
              >
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/nizaar-znagui-919140230/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="20vh"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                />
              </svg>
            </a>

            <a href="mailto:znagui.nizaar@outlook.fr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4vw"
                height="20vh"
                viewBox="0 0 36 36"
              >
                <path
                  fill="white"
                  d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z"
                  class="clr-i-solid clr-i-solid-path-1"
                />
                <path
                  fill="white"
                  d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z"
                  class="clr-i-solid clr-i-solid-path-2"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Part 2 -->
    <div
      class="sticky top-0 h-screen flex items-center justify-center bg-gray-800 border-t-[0.7vh] border-gray-200"
    >
      <div class="w-full h-full grid grid-cols-3">
        <div class="grid grid-cols-3">


        </div>
        <div class="flex flex-col items-center p-[2vw] ">
          <h1 class="text-[2vw] flex text-green-500 uppercase tracking-widest">
            <span class="font-bold pr-[0.5vw]">My projects</span>
          </h1>
          <div class="bg-gray-200 h-[0.5vh] w-full my-[6vh]"></div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style>
.police {
  font-family: 'Segoe Print';
}

/* DEMO-SPECIFIC STYLES */
.typed-out {
  overflow: hidden;
  border-right: 0.15em solid orange;
  animation: typing 1s steps(20, end) forwards;
  font-size: 1.6rem;
  width: 0;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
