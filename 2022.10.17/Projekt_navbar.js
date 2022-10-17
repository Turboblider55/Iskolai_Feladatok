const navbartext = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="../2022.10.12/themoviedb.html">Movie Database<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../2022.10.11/react-tours.html">Tours</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../2022.10.10./piros.html">Hol a piros</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="../2022.10.06/bolygok0.html">Bolygók</a>
    </li>
  </ul>
</div>
</nav>`;
document.querySelector("body").insertAdjacentHTML("beforebegin",navbartext);