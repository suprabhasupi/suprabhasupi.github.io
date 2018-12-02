<template>
  <div class="home-page-wrapper">
    <!-- header bar -->
    <div class="header">
      <a href="#" class="logo">
        <img src="https://st2.depositphotos.com/3867453/5745/v/950/depositphotos_57451597-stock-illustration-letter-s-logo-icon-design.jpg">
      </a>
      <div class="nav-bar">
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </div>
    <!-- Homesection -->
    <div class="home-wrapper">
      <div class="info">
        <div class="name">Suprabha</div>
        <h1>A Software Engineer</h1>
        <div class="company-name">
          <a href="http://zoomcar.com">@Zoomcar</a>
        </div>
        <div class="social">
          <div class="social-links">
            <a href="https://github.com/suprabhasupi">
              <img src="../../assets/icons/github.svg" style="width: 30px;">
              Github
            </a>
          </div>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/suprabha-s/">
              <img src="../../assets/icons/linkedin.svg" style="width: 30px;">
              LinkedIn
            </a>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/suprabha-s/" class="hire-me" target="_blank">Hire Me</a>
      </div>
      <div class="bio">
        <div class="bio-wrapper">
        </div>

        <img src="../../assets/icons/seetings.svg" class="setting-1">
        <img src="../../assets/icons/seetings.svg" class="setting-2">

        <img src="../../assets/img/wiki2.svg" class="girl-with-lappy">
        <img src="../../assets/img/plant_near_wiki.svg" class="plant-near-girl">
      </div>
    </div>

    <Skills id="skills" />
    <Projects id="projects" />
    <Footer />
  </div>
</template>

<script>
import './home.scss'
import HomePage from './home'
export default HomePage
</script>
