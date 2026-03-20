import type { Question } from '@/types'

// Niveau 1 — Très facile | Grands récits et personnages célèbres | Référence : Louis Segond 1910
const questions: Question[] = [
  { id: 'l1q01', level: 1, question: 'Qui a construit l\'arche selon la Bible ?', options: ['Noé', 'Moïse', 'Abraham', 'Isaac'], correctIndex: 0, reference: 'Genèse 6:14' },
  { id: 'l1q02', level: 1, question: 'Combien d\'apôtres Jésus a-t-il choisis ?', options: ['10', '7', '12', '14'], correctIndex: 2, reference: 'Matthieu 10:1-4' },
  { id: 'l1q03', level: 1, question: 'Quel est le premier livre de la Bible ?', options: ['L\'Exode', 'La Genèse', 'Les Psaumes', 'Le Lévitique'], correctIndex: 1, reference: 'Genèse 1:1' },
  { id: 'l1q04', level: 1, question: 'Qui a tué le géant Goliath ?', options: ['Saül', 'Samson', 'David', 'Jonathan'], correctIndex: 2, reference: '1 Samuel 17:49-50' },
  { id: 'l1q05', level: 1, question: 'Dans quelle ville Jésus est-il né ?', options: ['Nazareth', 'Jérusalem', 'Jéricho', 'Bethléem'], correctIndex: 3, reference: 'Luc 2:4-7' },
  { id: 'l1q06', level: 1, question: 'Quel est le dernier livre de la Bible ?', options: ['L\'Épître de Jude', 'L\'Apocalypse', 'L\'Épître aux Hébreux', 'L\'Évangile de Jean'], correctIndex: 1, reference: 'Apocalypse 1:1' },
  { id: 'l1q07', level: 1, question: 'Qui a trahi Jésus pour trente pièces d\'argent ?', options: ['Pierre', 'Thomas', 'Judas Iscariote', 'Barthélemy'], correctIndex: 2, reference: 'Matthieu 26:14-16' },
  { id: 'l1q08', level: 1, question: 'Combien de jours Jésus a-t-il jeûné dans le désert ?', options: ['30 jours', '7 jours', '3 jours', '40 jours'], correctIndex: 3, reference: 'Matthieu 4:2' },
  { id: 'l1q09', level: 1, question: 'Qui était la mère de Jésus ?', options: ['Marthe', 'Élisabeth', 'Marie', 'Rachel'], correctIndex: 2, reference: 'Luc 1:30-31' },
  { id: 'l1q10', level: 1, question: 'Qui a baptisé Jésus ?', options: ['Pierre', 'Jean-Baptiste', 'André', 'Philippe'], correctIndex: 1, reference: 'Matthieu 3:13-17' },
  { id: 'l1q11', level: 1, question: 'Avec quoi David a-t-il abattu Goliath ?', options: ['Une épée', 'Un arc et une flèche', 'Une fronde et une pierre', 'Un javelot'], correctIndex: 2, reference: '1 Samuel 17:49' },
  { id: 'l1q12', level: 1, question: 'Dans quelle ville Jésus a-t-il grandi ?', options: ['Bethléem', 'Capharnaüm', 'Jéricho', 'Nazareth'], correctIndex: 3, reference: 'Luc 2:51' },
  { id: 'l1q13', level: 1, question: 'Qui était le premier homme selon la Bible ?', options: ['Abel', 'Seth', 'Noé', 'Adam'], correctIndex: 3, reference: 'Genèse 2:7' },
  { id: 'l1q14', level: 1, question: 'Quel était le nom de la première femme selon la Bible ?', options: ['Sara', 'Rachel', 'Ève', 'Rébecca'], correctIndex: 2, reference: 'Genèse 3:20' },
  { id: 'l1q15', level: 1, question: 'Qui a reçu les dix commandements sur le mont Sinaï ?', options: ['Aaron', 'Josué', 'Abraham', 'Moïse'], correctIndex: 3, reference: 'Exode 20:1' },
  { id: 'l1q16', level: 1, question: 'Comment s\'appelait le premier fils d\'Adam et Ève ?', options: ['Abel', 'Seth', 'Caïn', 'Noé'], correctIndex: 2, reference: 'Genèse 4:1' },
  { id: 'l1q17', level: 1, question: 'Qui était le roi d\'Israël avant David ?', options: ['Salomon', 'Samuel', 'Saül', 'Roboam'], correctIndex: 2, reference: '1 Samuel 10:1' },
  { id: 'l1q18', level: 1, question: 'Quel fils de David était célèbre pour sa sagesse ?', options: ['Absalom', 'Roboam', 'Jonathan', 'Salomon'], correctIndex: 3, reference: '1 Rois 3:12' },
  { id: 'l1q19', level: 1, question: 'Dans quel fleuve Jésus a-t-il été baptisé ?', options: ['Le Nil', 'L\'Euphrate', 'Le Jourdain', 'Le Yarmouk'], correctIndex: 2, reference: 'Matthieu 3:13' },
  { id: 'l1q20', level: 1, question: 'Qui a découvert le bébé Moïse dans son panier sur le Nil ?', options: ['La mère de Moïse', 'Sa sœur Myriam', 'La fille de Pharaon', 'Une esclave hébraïque'], correctIndex: 2, reference: 'Exode 2:5' },
  { id: 'l1q21', level: 1, question: 'Quel animal a parlé à Ève dans le jardin d\'Éden ?', options: ['Un aigle', 'Un lion', 'Un âne', 'Le serpent'], correctIndex: 3, reference: 'Genèse 3:1' },
  { id: 'l1q22', level: 1, question: 'Combien de fils Jacob avait-il au total ?', options: ['7', '10', '12', '14'], correctIndex: 2, reference: 'Genèse 35:22-26' },
  { id: 'l1q23', level: 1, question: 'Quel apôtre a renié Jésus trois fois avant le chant du coq ?', options: ['Jean', 'André', 'Jacques', 'Pierre'], correctIndex: 3, reference: 'Matthieu 26:69-75' },
  { id: 'l1q24', level: 1, question: 'Quel était le métier de Matthieu avant de suivre Jésus ?', options: ['Pêcheur', 'Collecteur d\'impôts', 'Charpentier', 'Berger'], correctIndex: 1, reference: 'Matthieu 9:9' },
  { id: 'l1q25', level: 1, question: 'Qui était le cousin de Jésus selon l\'Évangile de Luc ?', options: ['Lazare', 'Jean-Baptiste', 'Barnabas', 'Étienne'], correctIndex: 1, reference: 'Luc 1:36' },
  { id: 'l1q26', level: 1, question: 'Quelle étendue d\'eau Moïse a-t-il traversée avec les Israélites ?', options: ['La mer Méditerranée', 'La mer Morte', 'La mer de Galilée', 'La mer Rouge'], correctIndex: 3, reference: 'Exode 14:21-22' },
  { id: 'l1q27', level: 1, question: 'Qui est monté au ciel dans un char de feu ?', options: ['Élisée', 'Énoch', 'Moïse', 'Élie'], correctIndex: 3, reference: '2 Rois 2:11' },
  { id: 'l1q28', level: 1, question: 'Quel est le livre des louanges et des prières au centre de la Bible ?', options: ['Les Proverbes', 'L\'Ecclésiaste', 'Les Psaumes', 'Les Lamentations'], correctIndex: 2, reference: 'Psaumes 1:1' },
  { id: 'l1q29', level: 1, question: 'Combien de jours Jonas a-t-il passés dans le ventre du grand poisson ?', options: ['7 jours', '1 jour', '3 jours', '40 jours'], correctIndex: 2, reference: 'Jonas 2:1' },
  { id: 'l1q30', level: 1, question: 'Quel était le nom du jardin où vivaient Adam et Ève ?', options: ['Le jardin de Canaan', 'Le jardin de Goshen', 'Le jardin d\'Éden', 'Le jardin d\'Horeb'], correctIndex: 2, reference: 'Genèse 2:8' },
]

export default questions
