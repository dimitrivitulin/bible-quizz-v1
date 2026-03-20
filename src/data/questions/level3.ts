import type { Question } from '@/types'

// Niveau 3 — Facile-Intermédiaire | Ancien Testament en détail | Référence : Louis Segond 1910
const questions: Question[] = [
  { id: 'l3q01', level: 3, question: 'À quel âge Abraham a-t-il quitté Ur des Chaldéens avec sa famille ?', options: ['60 ans', '75 ans', '100 ans', '85 ans'], correctIndex: 1, reference: 'Genèse 12:4' },
  { id: 'l3q02', level: 3, question: 'Quelle était la dixième plaie d\'Égypte ?', options: ['La mort des premiers-nés', 'Les ténèbres', 'La grêle', 'Les sauterelles'], correctIndex: 0, reference: 'Exode 12:29' },
  { id: 'l3q03', level: 3, question: 'Combien d\'années les Israélites ont-ils erré dans le désert ?', options: ['20 ans', '30 ans', '40 ans', '50 ans'], correctIndex: 2, reference: 'Nombres 14:33' },
  { id: 'l3q04', level: 3, question: 'Quel prophète a affronté les 450 prophètes de Baal sur le mont Carmel ?', options: ['Élisée', 'Ézéchiel', 'Jérémie', 'Élie'], correctIndex: 3, reference: '1 Rois 18:19-40' },
  { id: 'l3q05', level: 3, question: 'Qui était l\'épouse de Jacob qu\'il aimait le plus ?', options: ['Léa', 'Bilha', 'Zilpa', 'Rachel'], correctIndex: 3, reference: 'Genèse 29:18' },
  { id: 'l3q06', level: 3, question: 'Quel objet l\'arc-en-ciel représente-t-il dans la Bible ?', options: ['La gloire de Dieu', 'L\'alliance entre Dieu et toute créature vivante', 'La promesse d\'un fils', 'Le pardon des péchés'], correctIndex: 1, reference: 'Genèse 9:12-13' },
  { id: 'l3q07', level: 3, question: 'Qui était le père d\'Abraham selon la Genèse ?', options: ['Nachor', 'Sérug', 'Térah', 'Réu'], correctIndex: 2, reference: 'Genèse 11:26' },
  { id: 'l3q08', level: 3, question: 'Quel juge d\'Israël était une femme ?', options: ['Ruth', 'Débora', 'Myriam', 'Anne'], correctIndex: 1, reference: 'Juges 4:4' },
  { id: 'l3q09', level: 3, question: 'Quelle was la source de force de Samson ?', options: ['Sa foi', 'Sa prière quotidienne', 'Sa ceinture', 'Sa chevelure'], correctIndex: 3, reference: 'Juges 16:17' },
  { id: 'l3q10', level: 3, question: 'Quelle femme a coupé les cheveux de Samson ?', options: ['Orpa', 'Rahab', 'Dalila', 'Abigaïl'], correctIndex: 2, reference: 'Juges 16:19' },
  { id: 'l3q11', level: 3, question: 'Quel était le vrai prénom de l\'apôtre Pierre ?', options: ['Simon', 'André', 'Jean', 'Jacques'], correctIndex: 0, reference: 'Matthieu 16:17' },
  { id: 'l3q12', level: 3, question: 'Combien de livres compte l\'Ancien Testament (canon protestant) ?', options: ['27', '33', '39', '46'], correctIndex: 2, reference: 'Canon biblique protestant' },
  { id: 'l3q13', level: 3, question: 'Quel roi d\'Israël a eu 700 femmes et 300 concubines ?', options: ['David', 'Saül', 'Roboam', 'Salomon'], correctIndex: 3, reference: '1 Rois 11:3' },
  { id: 'l3q14', level: 3, question: 'Quel peuple Dieu a-t-il ordonné à Josué de détruire à Jéricho ?', options: ['Les Philistins', 'Les Cananéens', 'Les Moabites', 'Les Édomites'], correctIndex: 1, reference: 'Josué 6:2' },
  { id: 'l3q15', level: 3, question: 'Quel prophète a annoncé la naissance d\'un fils appelé Emmanuel ?', options: ['Jérémie', 'Michée', 'Ésaïe', 'Osée'], correctIndex: 2, reference: 'Ésaïe 7:14' },
  { id: 'l3q16', level: 3, question: 'Qui était le successeur du prophète Élie ?', options: ['Amos', 'Jérémie', 'Samuel', 'Élisée'], correctIndex: 3, reference: '1 Rois 19:19' },
  { id: 'l3q17', level: 3, question: 'Dans quel pays Daniel a-t-il servi comme conseiller royal ?', options: ['L\'Égypte', 'L\'Assyrie', 'La Perse / Babylone', 'Canaan'], correctIndex: 2, reference: 'Daniel 1:6-7' },
  { id: 'l3q18', level: 3, question: 'Comment s\'appelait la femme de Job que la Bible mentionne ?', options: ['La Bible ne donne pas son nom', 'Dinaïa', 'Sémira', 'Tsilla'], correctIndex: 0, reference: 'Job 2:9' },
  { id: 'l3q19', level: 3, question: 'Quel était le nom hébreu de Daniel à Babylone ?', options: ['Sadrac', 'Abednego', 'Beltschatsar', 'Méschac'], correctIndex: 2, reference: 'Daniel 1:7' },
  { id: 'l3q20', level: 3, question: 'Combien de fois par jour Daniel priait-il selon le livre de Daniel ?', options: ['1 fois', '2 fois', '3 fois', '5 fois'], correctIndex: 2, reference: 'Daniel 6:11' },
  { id: 'l3q21', level: 3, question: 'Quel outil Néhémie a-t-il utilisé pour reconstruire les murs de Jérusalem ?', options: ['Il a supervisé le peuple qui travaillait', 'Ses propres mains', 'Des esclaves babyloniens', 'Des architectes phéniciens'], correctIndex: 0, reference: 'Néhémie 2:17-18' },
  { id: 'l3q22', level: 3, question: 'Quel prophète a épousé une femme infidèle par ordre de Dieu ?', options: ['Amos', 'Joël', 'Osée', 'Michée'], correctIndex: 2, reference: 'Osée 1:2' },
  { id: 'l3q23', level: 3, question: 'Combien de livres compte le Nouveau Testament ?', options: ['21', '23', '25', '27'], correctIndex: 3, reference: 'Canon biblique' },
  { id: 'l3q24', level: 3, question: 'Qui a écrit la majorité des Épîtres du Nouveau Testament ?', options: ['Pierre', 'Jean', 'Paul', 'Jacques'], correctIndex: 2, reference: 'Romains 1:1' },
  { id: 'l3q25', level: 3, question: 'Quel était le nom de la ville où Saul (Paul) est né ?', options: ['Antioche', 'Thessalonique', 'Corinthe', 'Tarse'], correctIndex: 3, reference: 'Actes 21:39' },
  { id: 'l3q26', level: 3, question: 'Quel prophète a vu la roue dans sa vision de Dieu ?', options: ['Ésaïe', 'Ézéchiel', 'Daniel', 'Zacharie'], correctIndex: 1, reference: 'Ézéchiel 1:16' },
  { id: 'l3q27', level: 3, question: 'Sur quelle montagne Moïse a-t-il vu le buisson ardent ?', options: ['Le mont Sinaï', 'Le mont Horeb', 'Le mont Nebo', 'Le mont Carmel'], correctIndex: 1, reference: 'Exode 3:1-2' },
  { id: 'l3q28', level: 3, question: 'Quel est le plus long livre de la Bible (en nombre de chapitres) ?', options: ['Genèse', 'Jérémie', 'Les Psaumes', 'Ésaïe'], correctIndex: 2, reference: 'Psaumes (150 chapitres)' },
  { id: 'l3q29', level: 3, question: 'Quel peuple Esther a-t-elle sauvé de l\'extermination ?', options: ['Les Israélites', 'Les Juifs en Perse', 'Les Lévites', 'Les Benjaminites'], correctIndex: 1, reference: 'Esther 8:3-8' },
  { id: 'l3q30', level: 3, question: 'Qui a construit la tour de Babel selon la Genèse ?', options: ['Les Chaldéens', 'Les descendants de Noé', 'Les descendants de Caïn', 'Les Élamites'], correctIndex: 1, reference: 'Genèse 11:1-9' },
]

export default questions
