<template>
  <div id="parallax-canvas">
    <div class="star-field" id="star-field"></div>
    <div class="moon" id="parallax-moon"></div>

    <div class="deco-cross" id="cross1" style="top:25vh;left:5vw;">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <line x1="12" y1="0" x2="12" y2="24" stroke="#9b30ff" stroke-width="1"/>
        <line x1="0" y1="12" x2="24" y2="12" stroke="#9b30ff" stroke-width="1"/>
      </svg>
    </div>

    <div class="deco-cross" id="cross2" style="top:55vh;right:8vw;opacity:0.08;">
      <svg width="16" height="16" viewBox="0 0 24 24">
        <line x1="12" y1="0" x2="12" y2="24" stroke="#00e5ff" stroke-width="1"/>
        <line x1="0" y1="12" x2="24" y2="12" stroke="#00e5ff" stroke-width="1"/>
      </svg>
    </div>

    <div class="deco-cross" id="cross3" style="top:80vh;left:15vw;opacity:0.07;">
      <svg width="32" height="32" viewBox="0 0 24 24">
        <line x1="12" y1="0" x2="12" y2="24" stroke="#d600ff" stroke-width="0.8"/>
        <line x1="0" y1="12" x2="24" y2="12" stroke="#d600ff" stroke-width="0.8"/>
      </svg>
    </div>

    <div id="deco-circle" style="
      position:absolute;
      top:40vh; left:3vw;
      width:120px; height:120px;
      border-radius:50%;
      border:1px solid rgba(0,229,255,0.08);
      pointer-events:none;
      will-change:transform;
    "></div>
  </div>
</template>
