export const jobListings = [
  {
    title: "Ingénieurs Supports Plateforme MFS",
    description: "Nous cherchons pour l'un de nos clients, des Ingénieurs Supports Plateforme MFS Niveau 2...",
    date: "mars 30, 2023",
    fullDescription: getFullDescription('Ingénieur Support Plateforme MFS', 'Nous recherchons un Ingénieur Support Plateforme MFS pour gérer et maintenir notre infrastructure MFS.', [
      'Gestion et support technique de la plateforme MFS.',
      'Analyse des incidents et résolution des problèmes.',
      'Collaboration avec les équipes pour améliorer la performance de la plateforme.',
    ], [
      'Diplôme en informatique ou télécommunications.',
      'Expérience en gestion et support des plateformes MFS.',
    ], [
      'Maîtrise des technologies MFS et des protocoles associés.',
      'Excellente communication et compétences en résolution de problèmes.',
    ], 'recrutement@entreprise.com')
  },
  {
    title: "Développeur Fullstack JavaScript",
    description: "Nous recherchons un développeur Fullstack JavaScript expérimenté pour rejoindre notre équipe.",
    date: "février 15, 2025",
    fullDescription: getFullDescription('Développeur Fullstack JavaScript', 'Rejoignez notre équipe dynamique en tant que développeur Fullstack JavaScript pour construire des applications web modernes.', [
      'Développement et maintenance des applications web côté frontend et backend.',
      'Collaboration avec les équipes produits pour concevoir des solutions efficaces.',
    ], [
      'Maîtrise de JavaScript (ES6+), Node.js, React, et bases de données NoSQL.',
    ], [
      'Excellente compréhension des principes de développement web.',
      'Capacité à travailler en équipe et à résoudre des problèmes complexes.',
    ], 'recrutement@entreprise.com')
  },
  // Add more listings here...
];

function getFullDescription(title, introText, responsibilities, qualifications, skills, email) {
  return `
    <section>
      <h2 class="text-2xl font-semibold text-blue-600 mb-2">${title}</h2>
      <p>${introText}</p>
      
      <h3 class="font-semibold mt-4">Responsabilités :</h3>
      <ul class="list-disc pl-6">
        ${responsibilities.map(item => `<li>${item}</li>`).join('')}
      </ul>
      
      <h3 class="font-semibold mt-4">Qualifications :</h3>
      <ul class="list-disc pl-6">
        ${qualifications.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <h3 class="font-semibold mt-4">Compétences requises :</h3>
      <ul class="list-disc pl-6">
        ${skills.map(item => `<li>${item}</li>`).join('')}
      </ul>
      
      <h3 class="font-semibold mt-4">Processus de candidature :</h3>
      <p>Envoyez votre candidature par email à : <a href="mailto:${email}" class="text-blue-500">${email}</a>.</p>
    </section>
  `;
}
