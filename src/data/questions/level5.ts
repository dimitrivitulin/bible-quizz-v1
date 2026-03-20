import type { Question } from '@/types'

// Niveau 5 — Intermédiaire | Chiffres, lieux, chronologie | Référence : Louis Segond 1910
const questions: Question[] = [
  { id: 'l5q01', level: 5, question: 'Quel âge avait Abraham quand Isaac est né ?', options: ['90 ans', '99 ans', '100 ans', '110 ans'], correctIndex: 2, reference: 'Genèse 21:5' },
  { id: 'l5q02', level: 5, question: 'Combien d\'années Jacob a-t-il travaillé pour obtenir Rachel comme femme ?', options: ['7 + 7 = 14 ans', '7 ans', '10 ans', '21 ans'], correctIndex: 0, reference: 'Genèse 29:18-30' },
  { id: 'l5q03', level: 5, question: 'Quel était l\'âge de Moïse quand il est mort ?', options: ['100 ans', '110 ans', '120 ans', '130 ans'], correctIndex: 2, reference: 'Deutéronome 34:7' },
  { id: 'l5q04', level: 5, question: 'Combien de portes avait la nouvelle Jérusalem selon l\'Apocalypse ?', options: ['6', '8', '10', '12'], correctIndex: 3, reference: 'Apocalypse 21:12' },
  { id: 'l5q05', level: 5, question: 'Combien de sceaux y a-t-il dans le livre de l\'Apocalypse ?', options: ['4', '6', '7', '12'], correctIndex: 2, reference: 'Apocalypse 6-8' },
  { id: 'l5q06', level: 5, question: 'À quel âge David est-il devenu roi d\'Israël ?', options: ['20 ans', '25 ans', '30 ans', '35 ans'], correctIndex: 2, reference: '2 Samuel 5:4' },
  { id: 'l5q07', level: 5, question: 'Combien d\'années Salomon a-t-il régné sur Israël ?', options: ['30 ans', '33 ans', '40 ans', '45 ans'], correctIndex: 2, reference: '1 Rois 11:42' },
  { id: 'l5q08', level: 5, question: 'Combien de psaumes attribués à David le livre des Psaumes contient-il ?', options: ['50', '63', '73', '150'], correctIndex: 2, reference: 'Psaumes (73 psaumes portent le nom de David)' },
  { id: 'l5q09', level: 5, question: 'Quelle lettre grecque est le titre de Jésus en Apocalypse 1:8 ?', options: ['Oméga seulement', 'Alpha seulement', 'Alpha et Oméga', 'Tau'], correctIndex: 2, reference: 'Apocalypse 1:8' },
  { id: 'l5q10', level: 5, question: 'Combien de jours dura le festin d\'Assuérus mentionné en Esther 1 ?', options: ['7 jours', '30 jours', '90 jours', '180 jours'], correctIndex: 3, reference: 'Esther 1:4' },
  { id: 'l5q11', level: 5, question: 'Combien de chapitres compte le livre d\'Ésaïe ?', options: ['52', '60', '66', '72'], correctIndex: 2, reference: 'Ésaïe (66 chapitres)' },
  { id: 'l5q12', level: 5, question: 'Dans quelle mer Paul a-t-il fait naufrage en allant à Rome ?', options: ['La mer Ionienne', 'La mer Méditerranée / mer d\'Adria', 'La mer Égée', 'La mer Rouge'], correctIndex: 1, reference: 'Actes 27:27' },
  { id: 'l5q13', level: 5, question: 'Quel est le nombre de la bête dans l\'Apocalypse ?', options: ['444', '616', '666', '777'], correctIndex: 2, reference: 'Apocalypse 13:18' },
  { id: 'l5q14', level: 5, question: 'Combien de fois Naaman a-t-il dû se plonger dans le Jourdain pour être guéri ?', options: ['1 fois', '3 fois', '5 fois', '7 fois'], correctIndex: 3, reference: '2 Rois 5:14' },
  { id: 'l5q15', level: 5, question: 'Combien de jours Jésus est-il apparu à ses disciples après sa résurrection ?', options: ['3 jours', '14 jours', '40 jours', '50 jours'], correctIndex: 2, reference: 'Actes 1:3' },
  { id: 'l5q16', level: 5, question: 'Combien de livres prophétiques (grands et petits prophètes) l\'AT protestant contient-il ?', options: ['12', '16', '17', '21'], correctIndex: 2, reference: 'AT protestant : 5 grands + 12 petits = 17 livres' },
  { id: 'l5q17', level: 5, question: 'Quelle montagne est mentionnée comme le lieu de l\'ascension de Jésus ?', options: ['Le mont Sinaï', 'Le mont Thabor', 'Le mont des Oliviers', 'Le mont Carmel'], correctIndex: 2, reference: 'Actes 1:12' },
  { id: 'l5q18', level: 5, question: 'Combien de fois Pierre est-il tombé endormi alors que Jésus priait à Gethsémané ?', options: ['1 fois', '2 fois', '3 fois', '4 fois'], correctIndex: 2, reference: 'Matthieu 26:40-45' },
  { id: 'l5q19', level: 5, question: 'Quel est l\'âge de Mathusalem, l\'homme le plus âgé de la Bible ?', options: ['777 ans', '900 ans', '930 ans', '969 ans'], correctIndex: 3, reference: 'Genèse 5:27' },
  { id: 'l5q20', level: 5, question: 'Combien de tribus d\'Israël y avait-il ?', options: ['10', '11', '12', '13'], correctIndex: 2, reference: 'Genèse 49:28' },
  { id: 'l5q21', level: 5, question: 'Combien de chevaux blancs sont mentionnés dans l\'Apocalypse ?', options: ['1', '2', '3', '4'], correctIndex: 1, reference: 'Apocalypse 6:2 et 19:11' },
  { id: 'l5q22', level: 5, question: 'Combien d\'années Israël a été esclave en Égypte selon Exode 12:40 ?', options: ['200 ans', '300 ans', '400 ans', '430 ans'], correctIndex: 3, reference: 'Exode 12:40' },
  { id: 'l5q23', level: 5, question: 'Combien de fois par semaine le Pharisien mentionné dans la parabole jeûnait-il ?', options: ['1 fois', '2 fois', '3 fois', '5 fois'], correctIndex: 1, reference: 'Luc 18:12' },
  { id: 'l5q24', level: 5, question: 'Quel est le nombre de générations citées entre Abraham et Jésus selon Matthieu 1 ?', options: ['14 + 14 + 14 = 42', '12 + 12 + 12 = 36', '7 + 7 + 7 = 21', '21 + 21 = 42'], correctIndex: 0, reference: 'Matthieu 1:17' },
  { id: 'l5q25', level: 5, question: 'Combien de langues différentes les gens de Jérusalem entendaient-ils à la Pentecôte selon Actes 2 ?', options: ['La Bible ne les compte pas', '7', '12', '70'], correctIndex: 0, reference: 'Actes 2:5-11' },
  { id: 'l5q26', level: 5, question: 'Quel âge avait Josué quand il est mort ?', options: ['100 ans', '110 ans', '120 ans', '130 ans'], correctIndex: 1, reference: 'Josué 24:29' },
  { id: 'l5q27', level: 5, question: 'Combien d\'années Paul a-t-il passées en prison à Rome lors de son premier emprisonnement ?', options: ['1 an', '2 ans', '3 ans', '5 ans'], correctIndex: 1, reference: 'Actes 28:30' },
  { id: 'l5q28', level: 5, question: 'Combien de fils Job avait-il avant ses épreuves ?', options: ['3', '7', '10', '12'], correctIndex: 1, reference: 'Job 1:2' },
  { id: 'l5q29', level: 5, question: 'Quel est l\'âge d\'Adam à sa mort selon la Genèse ?', options: ['777 ans', '900 ans', '930 ans', '969 ans'], correctIndex: 2, reference: 'Genèse 5:5' },
  { id: 'l5q30', level: 5, question: 'Combien d\'épîtres Paul a-t-il écrites selon le canon biblique protestant ?', options: ['11', '13', '14', '16'], correctIndex: 1, reference: 'Romains à Philémon = 13 épîtres' },
]

export default questions
