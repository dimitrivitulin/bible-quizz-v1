import type { Question } from '@/types'

// Niveau 4 — Intermédiaire | Détails des récits bibliques | Référence : Louis Segond 1910
const questions: Question[] = [
  { id: 'l4q01', level: 4, question: 'Combien de chapitres compte le livre de l\'Apocalypse ?', options: ['18', '20', '22', '25'], correctIndex: 2, reference: 'Apocalypse (22 chapitres)' },
  { id: 'l4q02', level: 4, question: 'Quelle tribu d\'Israël était chargée du service au Temple ?', options: ['Juda', 'Dan', 'Lévi', 'Siméon'], correctIndex: 2, reference: 'Nombres 3:6-7' },
  { id: 'l4q03', level: 4, question: 'Combien de pains Jésus a-t-il utilisés pour nourrir 4000 hommes ?', options: ['5', '6', '7', '10'], correctIndex: 2, reference: 'Matthieu 15:34-36' },
  { id: 'l4q04', level: 4, question: 'Quel est le premier miracle de Jésus selon l\'Évangile de Jean ?', options: ['La guérison d\'un aveugle', 'La résurrection de Lazare', 'La transformation d\'eau en vin', 'La marche sur l\'eau'], correctIndex: 2, reference: 'Jean 2:1-11' },
  { id: 'l4q05', level: 4, question: 'Quelle ville Paul et Silas ont-ils évangélisée en premier en Europe ?', options: ['Corinthe', 'Thessalonique', 'Athènes', 'Philippes'], correctIndex: 3, reference: 'Actes 16:12' },
  { id: 'l4q06', level: 4, question: 'Combien d\'hommes accompagnaient Abraham pour libérer Lot ?', options: ['118', '318', '418', '518'], correctIndex: 1, reference: 'Genèse 14:14' },
  { id: 'l4q07', level: 4, question: 'Qui a remplacé Judas Iscariote parmi les douze apôtres ?', options: ['Barnabas', 'Matthias', 'Paul', 'Étienne'], correctIndex: 1, reference: 'Actes 1:26' },
  { id: 'l4q08', level: 4, question: 'Quelle est la signification du nom « Jésus » en hébreu ?', options: ['Fils de Dieu', 'L\'Éternel sauve', 'Agneau de Dieu', 'Lumière du monde'], correctIndex: 1, reference: 'Matthieu 1:21' },
  { id: 'l4q09', level: 4, question: 'Dans quelle ville Paul a-t-il prononcé le discours sur l\'Aréopage ?', options: ['Corinthe', 'Éphèse', 'Athènes', 'Philippes'], correctIndex: 2, reference: 'Actes 17:22' },
  { id: 'l4q10', level: 4, question: 'Combien de fils Noé avait-il ?', options: ['2', '3', '4', '5'], correctIndex: 1, reference: 'Genèse 6:10' },
  { id: 'l4q11', level: 4, question: 'Quel était le nom du fils que Noé avait et dont la descendance peupla Canaan ?', options: ['Sem', 'Japhet', 'Canaan', 'Cham'], correctIndex: 3, reference: 'Genèse 9:18' },
  { id: 'l4q12', level: 4, question: 'Quel prophète a été avalé par un grand poisson ?', options: ['Amos', 'Michée', 'Jonas', 'Nahoum'], correctIndex: 2, reference: 'Jonas 1:17' },
  { id: 'l4q13', level: 4, question: 'À Caïn, Dieu a mis une marque pour le protéger. Où Caïn s\'est-il établi ?', options: ['Au pays de Nod', 'À l\'est d\'Éden', 'Les deux réponses sont correctes', 'Au pays de Cheth'], correctIndex: 2, reference: 'Genèse 4:16' },
  { id: 'l4q14', level: 4, question: 'Quel était le métier de Joseph (père adoptif de Jésus) ?', options: ['Pêcheur', 'Berger', 'Forgeron', 'Charpentier'], correctIndex: 3, reference: 'Matthieu 13:55' },
  { id: 'l4q15', level: 4, question: 'Combien de béatitudes Jésus a-t-il prononcées dans le Sermon sur la montagne ?', options: ['7', '8', '9', '10'], correctIndex: 1, reference: 'Matthieu 5:3-10' },
  { id: 'l4q16', level: 4, question: 'Quel roi a pleuré et déchiré ses vêtements en entendant la Loi lue par Hilqiya ?', options: ['Ézéchias', 'Josias', 'Jéhoshaphat', 'Asa'], correctIndex: 1, reference: '2 Rois 22:11' },
  { id: 'l4q17', level: 4, question: 'De quelle montagne Moïse a-t-il vu la Terre promise sans pouvoir y entrer ?', options: ['Le mont Horeb', 'Le mont Carmel', 'Le mont Sinaï', 'Le mont Nebo'], correctIndex: 3, reference: 'Deutéronome 34:1' },
  { id: 'l4q18', level: 4, question: 'Quel est le plus court livre de l\'Ancien Testament ?', options: ['Abdias', 'Philémon', 'Nahum', 'Obadiah'], correctIndex: 0, reference: 'Abdias (1 chapitre)' },
  { id: 'l4q19', level: 4, question: 'Qui était l\'auteur principal du livre des Proverbes selon la tradition biblique ?', options: ['David', 'Asaph', 'Salomon', 'Ézéchias'], correctIndex: 2, reference: 'Proverbes 1:1' },
  { id: 'l4q20', level: 4, question: 'À quel endroit Jésus a-t-il transfiguré devant ses disciples ?', options: ['Le mont des Oliviers', 'Le mont Sinaï', 'Le mont Thabor', 'Le mont Carmel'], correctIndex: 2, reference: 'Matthieu 17:1-2' },
  { id: 'l4q21', level: 4, question: 'Combien de semaines de jours est-ce que 70 semaines de Daniel représentent ?', options: ['70 ans', '490 ans', '700 ans', '7 ans'], correctIndex: 1, reference: 'Daniel 9:24' },
  { id: 'l4q22', level: 4, question: 'Quel est le premier mot de la Bible en hébreu (traduit en français) ?', options: ['Lumière', 'Commencement', 'Dieu', 'Terre'], correctIndex: 1, reference: 'Genèse 1:1 — «בְּרֵאשִׁית» = Au commencement' },
  { id: 'l4q23', level: 4, question: 'Quel ange a combattu contre le prince du royaume de Perse selon Daniel ?', options: ['Gabriel', 'Raphaël', 'Uriel', 'Michel'], correctIndex: 3, reference: 'Daniel 10:13' },
  { id: 'l4q24', level: 4, question: 'Combien de langues différentes les disciples ont-ils parlé à la Pentecôte ?', options: ['La Bible dit « toutes les langues »', 'Douze', 'Sept', 'Soixante-dix'], correctIndex: 0, reference: 'Actes 2:4-11' },
  { id: 'l4q25', level: 4, question: 'Quel apôtre a écrit l\'Apocalypse ?', options: ['Paul', 'Pierre', 'Jean', 'Jacques'], correctIndex: 2, reference: 'Apocalypse 1:1,9' },
  { id: 'l4q26', level: 4, question: 'Combien de jours après son ascension au ciel le Saint-Esprit est-il descendu ?', options: ['7 jours', '10 jours', '40 jours', '50 jours'], correctIndex: 1, reference: 'Actes 1:3 + 2:1' },
  { id: 'l4q27', level: 4, question: 'Qui a oint Saül comme premier roi d\'Israël ?', options: ['Élie', 'Nathan', 'Samuel', 'Gad'], correctIndex: 2, reference: '1 Samuel 10:1' },
  { id: 'l4q28', level: 4, question: 'Comment s\'appelait l\'ami fidèle de David qui était le fils de Saül ?', options: ['Abner', 'Yoab', 'Jonathan', 'Abisaï'], correctIndex: 2, reference: '1 Samuel 18:1' },
  { id: 'l4q29', level: 4, question: 'Quelle femme de la Bible a tué le général Sisera avec un piquet de tente ?', options: ['Débora', 'Rahab', 'Yaël', 'Abigaïl'], correctIndex: 2, reference: 'Juges 4:21' },
  { id: 'l4q30', level: 4, question: 'Combien d\'années a duré la construction du temple de Salomon ?', options: ['3 ans', '5 ans', '7 ans', '10 ans'], correctIndex: 2, reference: '1 Rois 6:38' },
]

export default questions
