
// Particles.js Configuration
particlesJS('particles-js', {
particles: {
number: {
   value: 50,  // Jumlah partikel
   density: {
       enable: true,
       value_area: 800
   }
},
shape: {
   type: 'circle',
},
size: {
   value: 5,
   random: true,
   anim: {
       enable: true,
       speed: 4,
       size_min: 0.3
   }
},
line_linked: {
   enable: false, // Menonaktifkan penghubung antar partikel
},
move: {
   enable: true,
   speed: 6,
   direction: 'none',
   random: true,
   straight: false,
   out_mode: 'out',
   bounce: false
}
},
interactivity: {
detect_on: 'canvas',
events: {
   onhover: {
       enable: true,
       mode: 'repulse' // Mode interaktif saat hover
   }
}
},
retina_detect: true
});


window.onload = () => {
   const audio = document.getElementById('backgroundMusic');
   audio.muted = false; // Hapus mute setelah halaman dimuat
};
