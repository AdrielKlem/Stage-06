// classe que vai conter a lógica dos dados
// como os dados erão estruturados 
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

// classe que vai crair a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update() {
        this.removeAllTr()
    }

    removeAllTr() {
        const tbody = this.root.querySelector("table tbody")

        tbody.querySelectorAll('tr')
        .forEach(tr => {
          tr.remove()      
        })
    }
}