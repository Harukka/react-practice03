const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 400,
    height: 533.33,
    showCover: true,
    usePortrait: true,
  });
  
  pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));　