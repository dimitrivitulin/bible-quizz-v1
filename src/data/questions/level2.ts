import type { Question } from '@/types'

// Niveau 2 — Facile+ | Personnages et détails connus | Référence : Louis Segond 1910
const questions: Question[] = [
  { id: 'l2q01', level: 2, question: 'Comment s\'appelait le frère de Moïse qui parlait en son nom ?', options: ['Josué', 'Caleb', 'Aaron', 'Nun'], correctIndex: 2, reference: 'Exode 4:14-16' },
  { id: 'l2q02', level: 2, question: 'Quel roi a construit le premier temple à Jérusalem ?', options: ['David', 'Saül', 'Salomon', 'Ézéchias'], correctIndex: 2, reference: '1 Rois 6:1' },
  { id: 'l2q03', level: 2, question: 'Qui était la belle-mère de Ruth ?', options: ['Orpa', 'Débora', 'Naomi', 'Anne'], correctIndex: 2, reference: 'Ruth 1:3-4' },
  { id: 'l2q04', level: 2, question: 'Quel était le prénom du fils qu\'Abraham a failli sacrifier ?', options: ['Ismaël', 'Isaac', 'Jacob', 'Ésaü'], correctIndex: 1, reference: 'Genèse 22:2' },
  { id: 'l2q05', level: 2, question: 'Combien de plaies Dieu a-t-il envoyées sur l\'Égypte ?', options: ['7', '9', '10', '12'], correctIndex: 2, reference: 'Exode 7-12' },
  { id: 'l2q06', level: 2, question: 'Qui a interprété les rêves du Pharaon en Égypte ?', options: ['Moïse', 'Daniel', 'Joseph', 'Aaron'], correctIndex: 2, reference: 'Genèse 41:15-16' },
  { id: 'l2q07', level: 2, question: 'Quel apôtre a marché sur l\'eau vers Jésus ?', options: ['Jean', 'André', 'Jacques', 'Pierre'], correctIndex: 3, reference: 'Matthieu 14:29' },
  { id: 'l2q08', level: 2, question: 'Qui était la sœur de Moïse ?', options: ['Débora', 'Rahab', 'Myriam', 'Rébecca'], correctIndex: 2, reference: 'Exode 15:20' },
  { id: 'l2q09', level: 2, question: 'Quel prophète a été emporté dans un char de feu sans mourir ?', options: ['Moïse', 'Élisée', 'Samuel', 'Élie'], correctIndex: 3, reference: '2 Rois 2:11' },
  { id: 'l2q10', level: 2, question: 'Dans quelle fosse Joseph a-t-il été jeté par ses frères ?', options: ['Un puits sans eau', 'Une citerne pleine', 'Une prison', 'Un cachot'], correctIndex: 0, reference: 'Genèse 37:24' },
  { id: 'l2q11', level: 2, question: 'Combien de talents d\'argent Judas a-t-il reçus pour trahir Jésus ?', options: ['20', '15', '30', '40'], correctIndex: 2, reference: 'Matthieu 26:15' },
  { id: 'l2q12', level: 2, question: 'Qui a annoncé la naissance de Jésus à Marie ?', options: ['Gabriel', 'Michel', 'Raphaël', 'Uriel'], correctIndex: 0, reference: 'Luc 1:26-28' },
  { id: 'l2q13', level: 2, question: 'De quel peuple Goliath était-il originaire ?', options: ['Les Moabites', 'Les Édomites', 'Les Philistins', 'Les Ammonites'], correctIndex: 2, reference: '1 Samuel 17:4' },
  { id: 'l2q14', level: 2, question: 'Quel est le plus court verset de la Bible (dans les Évangiles) ?', options: ['"Priez sans cesse."', '"Jésus pleura."', '"Dieu est amour."', '"Réjouissez-vous toujours."'], correctIndex: 1, reference: 'Jean 11:35' },
  { id: 'l2q15', level: 2, question: 'Qui était la femme d\'Abraham ?', options: ['Rébecca', 'Rachel', 'Ruth', 'Sara'], correctIndex: 3, reference: 'Genèse 11:29' },
  { id: 'l2q16', level: 2, question: 'Quel animal Samson a-t-il tué à mains nues ?', options: ['Un ours', 'Un lion', 'Un serpent', 'Un taureau'], correctIndex: 1, reference: 'Juges 14:5-6' },
  { id: 'l2q17', level: 2, question: 'Combien de jours Noé a-t-il attendu entre chaque envoi de colombe ?', options: ['3 jours', '10 jours', '7 jours', '40 jours'], correctIndex: 2, reference: 'Genèse 8:10-12' },
  { id: 'l2q18', level: 2, question: 'Qui a guéri Naaman de sa lèpre ?', options: ['Élie', 'Samuel', 'Ézéchiel', 'Élisée'], correctIndex: 3, reference: '2 Rois 5:14' },
  { id: 'l2q19', level: 2, question: 'Quelle femme a caché les deux espions envoyés par Josué à Jéricho ?', options: ['Débora', 'Ruth', 'Rahab', 'Myriam'], correctIndex: 2, reference: 'Josué 2:1-4' },
  { id: 'l2q20', level: 2, question: 'Qui a conduit les Israélites à Canaan après la mort de Moïse ?', options: ['Caleb', 'Aaron', 'Éléazar', 'Josué'], correctIndex: 3, reference: 'Josué 1:1-3' },
  { id: 'l2q21', level: 2, question: 'Combien de personnes Jésus a-t-il nourries avec cinq pains et deux poissons ?', options: ['3 000', '4 000', '5 000', '10 000'], correctIndex: 2, reference: 'Matthieu 14:21' },
  { id: 'l2q22', level: 2, question: 'Quel arbre Zachée avait-il grimpé pour voir Jésus ?', options: ['Un palmier', 'Un figuier', 'Un sycomore', 'Un cèdre'], correctIndex: 2, reference: 'Luc 19:4' },
  { id: 'l2q23', level: 2, question: 'Qui était le père de Jean-Baptiste ?', options: ['Siméon', 'Éléazar', 'Zacharie', 'Joseph'], correctIndex: 2, reference: 'Luc 1:13' },
  { id: 'l2q24', level: 2, question: 'Quel roi a fait jeter Daniel dans la fosse aux lions ?', options: ['Nébucadnetsar', 'Cyrus', 'Darius', 'Assuérus'], correctIndex: 2, reference: 'Daniel 6:17' },
  { id: 'l2q25', level: 2, question: 'Combien de pierres David a-t-il ramassées avant de combattre Goliath ?', options: ['1', '3', '5', '7'], correctIndex: 2, reference: '1 Samuel 17:40' },
  { id: 'l2q26', level: 2, question: 'Qui était la mère de Samuel ?', options: ['Peninna', 'Débora', 'Ruth', 'Anne'], correctIndex: 3, reference: '1 Samuel 1:20' },
  { id: 'l2q27', level: 2, question: 'Quel apôtre était un médecin et l\'auteur d\'un Évangile ?', options: ['Marc', 'Jean', 'Matthieu', 'Luc'], correctIndex: 3, reference: 'Colossiens 4:14' },
  { id: 'l2q28', level: 2, question: 'Quel nom Dieu a-t-il donné à Jacob après avoir lutté avec lui ?', options: ['Israël', 'Abraham', 'Lévi', 'Édom'], correctIndex: 0, reference: 'Genèse 32:28' },
  { id: 'l2q29', level: 2, question: 'Qui était la reine qui a rendu visite au roi Salomon pour éprouver sa sagesse ?', options: ['La reine d\'Assyrie', 'La reine d\'Égypte', 'La reine de Saba', 'La reine de Tyr'], correctIndex: 2, reference: '1 Rois 10:1' },
  { id: 'l2q30', level: 2, question: 'Quel apôtre était un Zélote selon les listes des apôtres ?', options: ['Simon', 'Thaddée', 'André', 'Philippe'], correctIndex: 0, reference: 'Matthieu 10:4' },
]

export default questions
