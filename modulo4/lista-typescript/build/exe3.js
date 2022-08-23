"use strict";
var GENRE;
(function (GENRE) {
    GENRE["ACTION"] = "a\u00E7\u00E3o";
    GENRE["DRAMA"] = "drama";
    GENRE["COMEDY"] = "com\u00E9dia";
    GENRE["ROMANCE"] = "romance";
    GENRE["HORROR"] = "terror";
})(GENRE || (GENRE = {}));
const exe3 = (movie) => {
    return movie;
};
console.table(exe3({
    name: "Duna",
    yearRelease: 2021,
    genre: GENRE.ACTION,
}));
//# sourceMappingURL=exe3.js.map