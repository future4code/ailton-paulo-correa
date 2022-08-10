function exe7(dna: string): string {
  let rna: string = "";
  for (const item of dna) {
    if (item === "A") {
      rna += "U";
    } else if (item === "T") {
      rna += "A";
    } else if (item === "C") {
      rna += "G";
    } else if (item === "G") {
      rna += "C";
    } else {
      rna += item;
    }
  }
  return rna;
}
console.log(exe7("ATT GCT GCG CAT TAA CGA CGC GTA"));
