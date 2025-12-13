    $(function () {
      $("#accordion").accordion({
        heightStyle: "content",
        active: false,
        collapsible: true
      });

      const params = new URLSearchParams(window.location.search);
      const noticia = params.get("noticia");
      if (noticia) {
        $("#accordion").accordion("option", "active", parseInt(noticia) - 1);
      }
    });