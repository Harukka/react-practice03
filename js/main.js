const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 400,
    height: 533.33,
    showCover: true,
    usePortrait: true,
    // size: "stretch",
    // minWidth: 315,
    // maxWidth: 1000,
    // minHeight: 420,
    // maxHeight: 1350,
    // drawShadow: true,
    flippingTime: 2000,
    // usePortrait: true,
    startZIndex: 1,
    autoSize: true
  });
  
  pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));