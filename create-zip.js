const AdmZip = require('adm-zip');
const zip = new AdmZip();

// Ajout des fichiers au ZIP
zip.addLocalFile("index.html");
zip.addLocalFile("styles.css");

// Création du fichier ZIP
zip.writeZip("premium-auto-clean-site.zip");
console.log("Archive ZIP créée avec succès !");