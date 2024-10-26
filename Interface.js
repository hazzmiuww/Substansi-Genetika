function transcribe() {
    var inputDNA = document.getElementById("inputDNA").value.toUpperCase();
    var displaymRNA = document.getElementById("displaymRNA");
    var displayAminoAcids = document.getElementById("displayAminoAcids");

    // Transcribe DNA to mRNA
    var mRNA = inputDNA.replace(/A|T|G|C/g, function(match) {
        switch (match) {
            case 'A':
                return 'U';
            case 'T':
                return 'A';
            case 'G':
                return 'C';
            case 'C':
                return 'G';
            default:
                return match;
        }
    });

    // Transcribe mRNA to Amino Acids using the genetic code table
    var aminoAcidsMap = {
        'UUU': 'Phe', 'UUC': 'Phe',
        'UUA': 'Leu', 'UUG': 'Leu',
        'CUU': 'Leu', 'CUC': 'Leu', 'CUA': 'Leu', 'CUG': 'Leu',
        'AUU': 'Ile', 'AUC': 'Ile', 'AUA': 'Ile',
        'AUG': 'Met',
        'GUU': 'Val', 'GUC': 'Val', 'GUA': 'Val', 'GUG': 'Val',
        'UCU': 'Ser', 'UCC': 'Ser', 'UCA': 'Ser', 'UCG': 'Ser',
        'CCU': 'Pro', 'CCC': 'Pro', 'CCA': 'Pro', 'CCG': 'Pro',
        'ACU': 'Thr', 'ACC': 'Thr', 'ACA': 'Thr', 'ACG': 'Thr',
        'GCU': 'Ala', 'GCC': 'Ala', 'GCA': 'Ala', 'GCG': 'Ala',
        'UAU': 'Tyr', 'UAC': 'Tyr',
        'UAA': 'Stop', 'UAG': 'Stop', 'UGA': 'Stop',
        'CAU': 'His', 'CAC': 'His',
        'CAA': 'Gln', 'CAG': 'Gln',
        'AAU': 'Asn', 'AAC': 'Asn',
        'AAA': 'Lys', 'AAG': 'Lys',
        'GAU': 'Asp', 'GAC': 'Asp',
        'GAA': 'Glu', 'GAG': 'Glu',
        'UGU': 'Cys', 'UGC': 'Cys',
        'UGG': 'Trp',
        'CGU': 'Arg', 'CGC': 'Arg', 'CGA': 'Arg', 'CGG': 'Arg',
        'AGU': 'Ser', 'AGC': 'Ser',
        'AGA': 'Arg', 'AGG': 'Arg',
        'GGU': 'Gly', 'GGC': 'Gly', 'GGA': 'Gly', 'GGG': 'Gly'
    };

    var aminoAcids = mRNA.match(/.{1,3}/g).map(function(codon) {
        return aminoAcidsMap[codon] || '???';
    }).join(' ');

    displaymRNA.textContent = mRNA;
    displayAminoAcids.textContent = aminoAcids;
}
