

// Niveau 7 — Difficile | Prophètes, rois, détails précis | Référence : Louis Segond 1910
const questions: Question[] = [
  { id: 'l7q01', level: 7, question: 'Quel prophète a annoncé la destruction de Ninive ?', options: ['Amos', 'Joël', 'Nahoum', 'Abdias'], correctIndex: 2, reference: 'Nahoum 1:1' },
  { id: 'l7q02', level: 7, question: 'Quel roi de Juda a détruit le serpent d\'airain que Moïse avait fait ?', options: ['Josias', 'Ézéchias', 'Jéhoshaphat', 'Asa'], correctIndex: 1, reference: '2 Rois 18:4' },
  { id: 'l7q03', level: 7, question: 'Qui était le père biologique de Salomon ?', options: ['Saül', 'Joab', 'David', 'Natan'], correctIndex: 2, reference: '2 Samuel 12:24' },
  { id: 'l7q04', level: 7, question: 'Quelle ville était la capitale du royaume du Nord (Israël) ?', options: ['Jérusalem', 'Hébron', 'Samarie', 'Béthel'], correctIndex: 2, reference: '1 Rois 16:24' },
  { id: 'l7q05', level: 7, question: 'Combien de fois le mot « Sélah » apparaît-il dans les Psaumes (environ) ?', options: ['30 fois', '50 fois', '71 fois', '100 fois'], correctIndex: 2, reference: 'Psaumes — 71 occurrences environ' },
  { id: 'l7q06', level: 7, question: 'Quel prophète a écrit un livre entier sur la destruction de Jérusalem (Lamentations) ?', options: ['Ésaïe', 'Jérémie', 'Ézéchiel', 'Daniel'], correctIndex: 1, reference: 'Lamentations 1:1 — attribué à Jérémie' },
  { id: 'l7q07', level: 7, question: 'Quel est le nom du grand-père de Samuel ?', options: ['Tsouf', 'Élqana', 'Pinehas', 'Éli'], correctIndex: 0, reference: '1 Samuel 1:1' },
  { id: 'l7q08', level: 7, question: 'Quelle nation a détruit le premier temple de Jérusalem ?', options: ['L\'Assyrie', 'La Perse', 'Babylone', 'La Grèce'], correctIndex: 2, reference: '2 Rois 25:9' },
  { id: 'l7q09', level: 7, question: 'Selon Ésaïe 53:3, le Serviteur souffrant était-il... ?', options: ['Glorieux et admiré', 'Méprisé et rejeté des hommes', 'Puissant et victorieux', 'Un roi couronné'], correctIndex: 1, reference: 'Ésaïe 53:3' },
  { id: 'l7q10', level: 7, question: 'Quel apôtre est mort en premier parmi les Douze selon le livre des Actes ?', options: ['Étienne', 'Jacques fils de Zébédée', 'Jean', 'André'], correctIndex: 1, reference: 'Actes 12:2' },
  { id: 'l7q11', level: 7, question: 'Quelle est la première mention du Saint-Esprit dans la Bible ?', options: ['Genèse 1:2', 'Exode 31:3', 'Nombres 11:25', 'Juges 3:10'], correctIndex: 0, reference: 'Genèse 1:2 — « l\'Esprit de Dieu se mouvait sur les eaux »' },
  { id: 'l7q12', level: 7, question: 'Quel prophète a épousé une femme nommée Gomer fille de Diblaïm ?', options: ['Amos', 'Joël', 'Michée', 'Osée'], correctIndex: 3, reference: 'Osée 1:3' },
  { id: 'l7q13', level: 7, question: 'Quelle était la profession de Lydie, la première convertie en Europe ?', options: ['Tisserande', 'Marchande de pourpre', 'Potière', 'Parfumeuse'], correctIndex: 1, reference: 'Actes 16:14' },
  { id: 'l7q14', level: 7, question: 'Quel est le nom hébreu de Jésus (forme hébraïque complète) ?', options: ['Yeshua', 'Yeshayahou', 'Yehoshua', 'Yossef'], correctIndex: 0, reference: 'Matthieu 1:21 — Yeshua (forme araméenne/hébreu tardif)' },
  { id: 'l7q15', level: 7, question: 'Dans quelle ville Jésus a-t-il ressuscité Lazare ?', options: ['Jérusalem', 'Béthanie', 'Capharnaüm', 'Jéricho'], correctIndex: 1, reference: 'Jean 11:1' },
  { id: 'l7q16', level: 7, question: 'Quel est le livre biblique qui ne mentionne pas le nom de Dieu explicitement ?', options: ['Ruth', 'Esther', 'Job', 'Cantique des Cantiques'], correctIndex: 1, reference: 'Esther — le nom de Dieu n\'y apparaît pas explicitement' },
  { id: 'l7q17', level: 7, question: 'Selon Proverbes 31, que vaut une femme vertueuse (Louis Segond) ?', options: ['Plus que l\'or', 'Plus que les rubis', 'Plus que les perles', 'Plus que l\'argent'], correctIndex: 2, reference: 'Proverbes 31:10 — LS 1910 : « bien au-dessus des perles »' },
  { id: 'l7q18', level: 7, question: 'Quel est le nom du serviteur d\'Abraham envoyé chercher une femme pour Isaac ?', options: ['Éliézer', 'Doeg', 'Tsiba', 'Guéhazi'], correctIndex: 0, reference: 'Genèse 24:2 — tradition l\'identifie à Éliézer de Damas (Gn 15:2)' },
  { id: 'l7q19', level: 7, question: 'Quel est le verset le plus connu sur la sanctification dans 1 Thessaloniciens ?', options: ['1 Th 4:3 — «votre sanctification»', '1 Th 5:16 — «réjouissez-vous»', '1 Th 2:13 — «la parole de Dieu»', '1 Th 1:5 — «notre évangile»'], correctIndex: 0, reference: '1 Thessaloniciens 4:3' },
  { id: 'l7q20', level: 7, question: 'Quel était le nom de l\'épouse de Zacharie, mère de Jean-Baptiste ?', options: ['Anne', 'Élisabeth', 'Marie', 'Marthe'], correctIndex: 1, reference: 'Luc 1:5' },
  { id: 'l7q21', level: 7, question: 'Quel prophète a prédit que Jésus naîtrait à Bethléem ?', options: ['Ésaïe', 'Osée', 'Michée', 'Zacharie'], correctIndex: 2, reference: 'Michée 5:1' },
  { id: 'l7q22', level: 7, question: 'Quelle est la dernière parole de Jésus sur la croix selon l\'Évangile de Jean ?', options: ['"Mon Dieu, pourquoi m\'as-tu abandonné ?"', '"Père, pardonne-leur"', '"C\'est accompli"', '"Père, entre tes mains je remets mon esprit"'], correctIndex: 2, reference: 'Jean 19:30' },
  { id: 'l7q23', level: 7, question: 'Quel roi perse a autorisé les Juifs à retourner en Israël ?', options: ['Darius', 'Assuérus', 'Cyrus', 'Artaxerxès'], correctIndex: 2, reference: 'Esdras 1:1-3' },
  { id: 'l7q24', level: 7, question: 'Quel est le verset souvent cité sur la création de l\'homme à l\'image de Dieu ?', options: ['Genèse 1:26-27', 'Genèse 2:7', 'Genèse 1:1', 'Genèse 5:1'], correctIndex: 0, reference: 'Genèse 1:26-27' },
  { id: 'l7q25', level: 7, question: 'Quel prophète a mangé un rouleau de livre sur l\'ordre de Dieu ?', options: ['Ésaïe', 'Jérémie', 'Ézéchiel', 'Zacharie'], correctIndex: 2, reference: 'Ézéchiel 3:3' },
  { id: 'l7q26', level: 7, question: 'À qui Jésus a-t-il dit en premier « Je suis la résurrection et la vie » ?', options: ['Marie de Magdala', 'Marthe', 'Marie sœur de Lazare', 'Les disciples'], correctIndex: 1, reference: 'Jean 11:25' },
  { id: 'l7q27', level: 7, question: 'Quelle nation a détruit Samarie et déporté les dix tribus du Nord ?', options: ['Babylone', 'L\'Assyrie', 'La Perse', 'L\'Égypte'], correctIndex: 1, reference: '2 Rois 17:6' },
  { id: 'l7q28', level: 7, question: 'Quel ange a dit à Marie : « Tu as trouvé grâce auprès de Dieu » ?', options: ['Michel', 'Gabriel', 'Raphaël', 'Un ange sans nom'], correctIndex: 1, reference: 'Luc 1:28-30' },
  { id: 'l7q29', level: 7, question: 'Dans quel chapitre de Romains Paul parle-t-il du conflit entre la chair et l\'Esprit ?', options: ['Romains 5', 'Romains 6', 'Romains 7', 'Romains 8'], correctIndex: 2, reference: 'Romains 7:14-25' },
  { id: 'l7q30', level: 7, question: 'Combien de prophètes Achab et Jézabel ont-ils fait tuer selon 1 Rois 18 ?', options: ['100', '200', '400', '450'], correctIndex: 0, reference: '1 Rois 18:4 — Abdias a caché 100 prophètes' },
]

export default questions
