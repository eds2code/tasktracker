<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="timetracker">
          <!--
          <div class="header">
            <div class="logo-sputnik"></div>
            <div class="header__title">Таск трекер</div>
          </div>
          -->

          <Tasks />
          <Report />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tasks from './tasks/tasks';
import Report from './report/report';

export default {
  components: {
    Tasks, Report,
  },
};
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }

  @media screen and (max-width: 767px) {
    .header {
      justify-content: center;
    }
  }

  .header__title {
    margin-left: 30px;
    font-size: 24px;
    color: #444;
  }

  @media screen and (max-width: 767px) {
    .header__title {
      font-size: 16px;
    }
  }

  .logo-sputnik {
    width: 200px;
    height: 100px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxNDhweCIgaGVpZ2h0PSIyNS41cHgiIHZpZXdCb3g9IjAgMCAxNDggMjUuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQ4IDI1LjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWy5zdDB7ZmlsbDojMjMxRjIwO3N0cm9rZTojMjMxRjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30uc3Qxe2ZpbGw6IzIzMUYyMDt9LnN0MntmaWxsOiNGRkQzMDA7fS5zdDN7ZmlsbDojRkZGRkZGO3N0cm9rZTojMjMxRjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO31dXT48L3N0eWxlPjxnPjxnPjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNy44LDkuOSAxLjYsMTQuNyAxLjYsMTUuNyA3LjUsMTIuOSAiLz48cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1LjMsMTYuMSAxMiwyMy4yIDExLDIzLjQgMTIuNCwxNyAiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNy41LDE4Yy0wLjItMC45LTAuNC03LjYsMS0xMS4xYzEuMi0zLjEsMy43LTUuNiw2LjYtNS45YzEuNS0wLjEsMy4zLDAuMSw1LDEuNkMyMS45LDQsMjIuNCw1LjUsMjIuNiw3YzAuNCwzLTEuNiw1LjktNC4zLDcuN2MtMy4xLDIuMS0xMC40LDMuNC0xMC42LDMuNEM3LjYsMTguMSw3LjUsMTguMSw3LjUsMTh6Ii8+PGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTYuMSIgY3k9IjcuOCIgcj0iMy40Ii8+PGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMTYuMSIgY3k9IjcuOCIgcj0iMi4yIi8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNC42LDIwYy0yLDAtMy45LTAuNy01LjQtMS42bDEtMi42YzEuNCwwLjksMywxLjUsNC41LDEuNWMyLDAsMi44LTEsMi44LTJjMC0xLjEtMC42LTEuOC0zLjYtMi45Yy0zLjItMS4yLTQuMy0yLjctNC4zLTQuN2MwLTIuNSwyLTQuOCw1LjUtNC44YzEuOCwwLDMuNSwwLjUsNC42LDEuMWwtMC45LDIuNmMtMS0wLjUtMi40LTEuMS0zLjctMS4xYy0xLjcsMC0yLjUsMS0yLjUsMi4xYzAsMS4xLDAuOSwxLjcsMy4yLDIuNmMzLjcsMS40LDQuNywyLjksNC43LDUuMUM0MC42LDE4LjIsMzguMywyMCwzNC42LDIweiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00OS40LDE0Ljl2NC44aC0yLjlWMy4yaDUuMWM0LjQsMCw2LjYsMi40LDYuNiw1LjljMCwzLjUtMi4yLDUuOS03LjIsNS45SDQ5LjR6IE00OS40LDUuOXY2LjVoMS45YzIuNywwLDMuNy0xLjUsMy43LTMuM2MwLTEuOC0wLjktMy4yLTMuNy0zLjJINDkuNHoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjMuNiwzLjJoMi45djkuN2MwLDMuMiwxLjQsNC41LDMuOSw0LjVjMi41LDAsNC0xLjMsNC00LjVWMy4yaDIuOXY5LjdjMCw0LjktMi44LDcuMS02LjksNy4xYy00LjEsMC02LjgtMi4yLTYuOC03LjFWMy4yeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04Mi4zLDMuMmgxMy45djIuN2gtNS40djEzLjhoLTIuOVY1LjloLTUuNVYzLjJ6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTEwMS4yLDMuMWgwLjlsMTAuMiwxMC42VjMuMmgyLjl2MTYuNmgtMC44TDEwNC4xLDkuNXYxMC4zaC0yLjlWMy4xeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjIuNCwzLjJoMi45djE2LjVoLTIuOVYzLjJ6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTEzMi41LDMuMmgyLjl2OC4xbDctOC4xaDMuNWwtNy42LDguN2w4LDcuOGgtMy42bC03LjMtNy4xdjcuMWgtMi45VjMuMnoiLz48L2c+PC9nPjwvc3ZnPg==);
  }

  @media screen and (max-width: 767px) {
    .logo-sputnik {
      width: 100px;
      height: 50px;
    }
  }
</style>
