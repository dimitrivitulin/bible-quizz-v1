import type { Question } from '@/types'

// Thème : L'Évangile | Difficulté : Facile | Référence : Louis Segond 1910
const questions: Question[] = [
  { id: 'ev_f_01', themeId: 'evangile', difficulty: 'facile', question: 'Qui est le Fils de Dieu envoyé pour sauver le monde ?', options: ['Jean-Baptiste', 'Moïse', 'Jésus-Christ', 'Élie'], correctIndex: 2, reference: 'Jean 3:16' },
  { id: 'ev_f_02', themeId: 'evangile', difficulty: 'facile', question: 'Dans quelle ville Jésus est-il né ?', options: ['Nazareth', 'Jérusalem', 'Jéricho', 'Bethléem'], correctIndex: 3, reference: 'Luc 2:4-7' },
  { id: 'ev_f_03', themeId: 'evangile', difficulty: 'facile', question: 'Quel ange a annoncé la naissance de Jésus à Marie ?', options: ['Michel', 'Gabriel', 'Raphaël', 'Uriel'], correctIndex: 1, reference: 'Luc 1:26-31' },
  { id: 'ev_f_04', themeId: 'evangile', difficulty: 'facile', question: 'Combien de jours après sa mort Jésus est-il ressuscité ?', options: ['Au 1er jour', 'Au 7ème jour', 'Au 3ème jour', 'Au 40ème jour'], correctIndex: 2, reference: '1 Corinthiens 15:4' },
  { id: 'ev_f_05', themeId: 'evangile', difficulty: 'facile', question: 'Qui a baptisé Jésus dans le Jourdain ?', options: ['Pierre', 'André', 'Jean-Baptiste', 'Philippe'], correctIndex: 2, reference: 'Matthieu 3:13-16' },
  { id: 'ev_f_06', themeId: 'evangile', difficulty: 'facile', question: 'Quel est le premier miracle public de Jésus selon Jean ?', options: ['La guérison d\'un aveugle', 'La multiplication des pains', 'La marche sur les eaux', 'Changer l\'eau en vin à Cana'], correctIndex: 3, reference: 'Jean 2:1-11' },
  { id: 'ev_f_07', themeId: 'evangile', difficulty: 'facile', question: 'Qui a trahi Jésus pour trente pièces d\'argent ?', options: ['Pierre', 'Thomas', 'Judas Iscariote', 'Jean'], correctIndex: 2, reference: 'Matthieu 26:14-16' },
  { id: 'ev_f_08', themeId: 'evangile', difficulty: 'facile', question: 'Quelle est la signification du nom Emmanuel ?', options: ['Dieu sauve', 'Dieu est fort', 'Dieu avec nous', 'Dieu est lumière'], correctIndex: 2, reference: 'Matthieu 1:23' },
  { id: 'ev_f_09', themeId: 'evangile', difficulty: 'facile', question: 'Combien d\'apôtres Jésus a-t-il choisis ?', options: ['7', '10', '14', '12'], correctIndex: 3, reference: 'Luc 6:13' },
  { id: 'ev_f_10', themeId: 'evangile', difficulty: 'facile', question: 'Sur quel lieu Jésus a-t-il été crucifié ?', options: ['Le mont des Oliviers', 'Le Golgotha', 'Le mont Sinaï', 'Le mont Carmel'], correctIndex: 1, reference: 'Jean 19:17' },
  { id: 'ev_f_11', themeId: 'evangile', difficulty: 'facile', question: 'Qui était la mère de Jésus ?', options: ['Marthe', 'Marie-Madeleine', 'Marie', 'Élisabeth'], correctIndex: 2, reference: 'Luc 1:30-31' },
  { id: 'ev_f_12', themeId: 'evangile', difficulty: 'facile', question: 'Dans quel désert Jésus a-t-il été tenté par le diable ?', options: ['Le désert de Juda', 'Le désert du Sinaï', 'Le désert de Néguev', 'Le désert de Paran'], correctIndex: 0, reference: 'Matthieu 4:1' },
]

export default questions
