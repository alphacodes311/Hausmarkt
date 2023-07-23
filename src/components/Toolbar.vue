<template>
  <header class="toolbar">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/rentProperty">Rent</a></li>
        <!-- Add more navigation links as needed -->
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.toolbar {
  background-color: #f0f0f0;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
}

.toolbar ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.toolbar li {
  margin-right: 10px;
}

.toolbar a {
  text-decoration: none;
  color: #333;
}
</style>
