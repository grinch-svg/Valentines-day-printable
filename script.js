/* GENERAL PAGE STYLING */
body {
  font-family: 'Arial', sans-serif;
  background: #ffe6f0;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#card-container {
  position: relative;
}

/* PAGE STYLING */
.page {
  min-height: 100vh;
  padding: 40px;
  text-align: center;
  position: relative;
}

.hidden {
  display: none;
}

/* FRONT PAGE */
.front-title {
  font-family: 'Pacifico', cursive;
  font-size: 60px;
  color: #ff3366;
  text-shadow: 0 0 20px #ff99cc, 0 0 40px #ff6699;
  margin-bottom: 20px;
}

.heart-btn {
  font-size: 60px;
  background: none;
  border: none;
  cursor: pointer;
  animation: pulse 1.5s infinite;
}

/* BACK PAGE */
.back-title {
  font-family: 'Sacramento', cursive;
  font-size: 50px;
  color: #ff6699;
  text-shadow: 0 0 15px #ff99cc;
  margin-bottom: 20px;
}

#card-preview {
  position: relative;
  background: #fff8ff;
  padding: 20px;
  border-radius: 20px;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 400px;
}

/* SCATTERED PHOTO SLOTS */
.photo-slot {
  width: 120px;
  height: 120px;
  border: 2px dashed #ff6699;
  position: absolute; /* scattered positions */
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  transform: rotate(calc(-15deg + 30deg*var(--i))); /* random rotation */
}

/* assign different positions */
#photo1 { top: 20px; left: 30px; --i: 0; }
#photo2 { top: 180px; left: 200px; --i: 1; }
#photo3 { top: 100px; left: 350px; --i: 2; }

textarea {
  width: 90%;
  height: 120px;
  margin-top: 250px;
  padding: 15px;
  font-family: 'Pacifico', cursive;
  font-size: 22px;
  border: 2px solid #ff6699;
  border-radius: 12px;
  box-shadow: 0 0 10px #ff99cc;
}

/* BUTTON */
button {
  font-size: 20px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  background: #ff3366;
  border: none;
  border-radius: 12px;
  color: white;
}

/* FLOATING DECORATIONS */
.floating {
  /* FLOATING DECORATIONS RANDOM MOVEMENT */
.floating {
  position: absolute;
  width: 60px;
  pointer-events: none; /* so it doesn't block clicks */
  animation: floatAnim linear infinite;
}

/* smaller versions */
.floating.small { width: 40px; }

/* different speeds */
.heart { animation-duration: 6s; }
.flower { animation-duration: 8s; }
.cartoon { animation-duration: 10s; }

/* random float keyframes: moves horizontally and vertically */
@keyframes floatAnim {
  0% {
    transform: translate(var(--start-x, 0px), var(--start-y, 0px)) rotate(0deg);
  }
  25% {
    transform: translate(calc(var(--start-x) + 20px), calc(var(--start-y) - 10px)) rotate(15deg);
  }
  50% {
    transform: translate(calc(var(--start-x) - 15px), calc(var(--start-y) + 15px)) rotate(-10deg);
  }
  75% {
    transform: translate(calc(var(--start-x) + 10px), calc(var(--start-y) - 5px)) rotate(10deg);
  }
  100% {
    transform: translate(var(--start-x, 0px), var(--start-y, 0px)) rotate(0deg);
  }
}

/* HEART BUTTON PULSE */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
