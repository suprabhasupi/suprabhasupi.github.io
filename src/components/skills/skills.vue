<template>
  <div class="skills-wrapper">
    <div class="title"><span>I</span>mportant attributes of skills </div>
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1601.05 217.26">
        <g id="curve1" data-name="Layer 1-2">
          <path class="cls-1" d="M1600.55.5H.5v99C63.85,169.34,152,198.35,255.89,210.41c96,11.14,205.1,9,331.17-17.57,168-41.77,205.1-80.86,251.82-103,24.4-11.51,70.71-33.34,114.77-46.4a685.57,685.57,0,0,1,72.89-19.84s92.37-18.17,107.3-17.77c30.88-3.65,126-4.83,126-4.83l118.35,5.5S1458,15.37,1476,18.61s124.5,27.52,124.5,27.52Z"/>
        </g>
      </svg>

      <!-- svg for plant -->
      <img src="../../assets/img/tree_bottom.svg" class="plant">
      <div class="svg-skill">Skills</div>
      <div class="all-skills">
        <div class="skills-info">
          <div class="skill-icons">
            <img src="../../assets/icons/coding.svg">
          </div>
          <p><b>Frontend Development</b></p>
          <p>Javascript(ES6), React Native, React, Vue, HTML, CSS, SCSS, GraphQL, jQuery</p>
        </div>

        <div class="skills-info">
          <div class="skill-icons">
            <img src="../../assets/icons/paint1.svg">
          </div>
          <p><b>Design Tools</b></p>
          <p>Zeplin, Photoshop, Illustator, Sketch, Invision</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './skills.scss'
import Skills from './skills'
export default Skills
</script>
