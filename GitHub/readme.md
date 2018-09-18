# Comment envoyer son code sur GitHub ?

## Si c'est le premier commit :

![alt text](https://github.com/LaManuAmiens/lessons/blob/master/GitHub/GitHub1.png)
Se rendre sur https://github.com et cliquer en haut à droite sur votre photo de profil

![alt text](https://github.com/LaManuAmiens/lessons/blob/master/GitHub/GitHub2.png)
Cliquer sur "Your repositories"

![alt text](https://github.com/LaManuAmiens/lessons/blob/master/GitHub/GitHub3.png)
Cliquer sur "New"

![alt text](https://github.com/LaManuAmiens/lessons/blob/master/GitHub/GitHub4.png)
Choisir un nom pour le repo, une description et cliquer sur "Create repository"

![alt text](https://github.com/LaManuAmiens/lessons/blob/master/GitHub/GitHub5.png)

Avec le terminal, se rendre dans le dossier à envoyer et exécuter ce code :


```
git init
git add "le_fichier_que_vous_envoyez"
git commit -m "first commit"
git remote add origin "le_lien_de_votre_repo_sur_GitHub"
git push -u origin master
```

Indiquer ses identifiants GitHub et voilà c'est push 

----

## Si c'est pour envoyer une modification :

Avec le terminal, se rendre dans le dossier à envoyer et exécuter ce code :

```
git add "le_fichier_modifié"
git commit -m "commentaire_sur_la_modification"
git push
```

----

## Si c'est pour ajouter un fichier :

Avec le terminal, se rendre dans le dossier à envoyer et exécuter ce code :

```
git add "le_fichier_ajouté"
git commit -m "commentaire_sur_l'ajout"
git push
```

----

### Autres commandes à retenir :

Documentation officielle : https://doc.ubuntu-fr.org/git

`git status` : permet de savoir tout ce qui n’a pas encore été commit ou push dans le dossier

`git pull` : permet de mettre à jour le dossier dans lequel on est

`git stash` : permet d'effacer toutes les modifications et de revenir au dernier commit
