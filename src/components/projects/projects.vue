<template>
  <div class="projects-wrapper">
    <div class="title"><span>M</span>y project</div>
    <div class="all-project-list">

      <div class="project-list">
        <img class="target alpha-target" src="../../assets/img/project2.png" alt="Masked image">
        <div class="project-info">
          <div class="project-title">Fooodie App</div>
          <p>I designed and build this App while learning React Native which has 1000+ downloads in play store.</p>
          <a href="https://play.google.com/store/apps/details?id=store.fooodie">Live Demo</a>
        </div>
      </div>

      <div class="project-list">
        <img class="target alpha-target" src="../../assets/img/project1.png" alt="Masked image">
        <div class="project-info">
          <div class="project-title">Ecommerce Website</div>
          <p>It's an Ecommerce responsive website which is built in using Vue.js. API integration with Majento.</p>
          <a href="http://hobber.in">Live Demo</a>
        </div>
      </div>

      <div class="project-list">
        <img class="target alpha-target" src="../../assets/img/project3.png" alt="Masked image">
        <div class="project-info">
          <div class="project-title">Diamond Game</div>
          <p>Build this diamond puzzle game in vanilla js, where user have to find all the diamonds. If user doesn't open diamond box it shows the direction of the nearest diamond.</p>
          <a href="http://suprabha.me/diamond-game">Live Demo</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import './projects.scss'
import Projects from './projects'
export default Projects
</script>
