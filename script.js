const views = {
    landing: {
        view: document.getElementById('landing-view'),
        button: document.getElementById('landing-button')
    },
    item: {
        view: document.getElementById('item-view'),
        button: document.getElementById('item-button')
    },
    about: {
        view: document.getElementById('about-view'),
        button: document.getElementById('about-button')
    },


};

function updateView(view) {
    const allViews = document.querySelectorAll('.view');
    for(let i = 0; i < allViews.length; i++) {
        allViews[i].classList.add('hidden');
    }
    view.classList.remove('hidden');
}

for(const key in views) {
    views[key].button.addEventListener('click', (e) => {
        updateView(views[key].view);
    });
}


updateView(views.about.view);