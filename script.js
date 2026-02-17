// ================= ROTATION COMPONENT =================
AFRAME.registerComponent('model-rotator', {
    tick: function (time, delta) {
        this.el.object3D.rotation.y += 0.0015 * delta;
    }
});

// ================= MAIN SCRIPT =================
window.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.car-btn');
    const carContainer = document.getElementById('carContainer');
    const carName = document.getElementById('carName');

    buttons.forEach(button => {

        button.addEventListener('click', () => {

            // Remove previous model
            while (carContainer.firstChild) {
                carContainer.removeChild(carContainer.firstChild);
            }

            const modelId = button.getAttribute('data-model');
            const name = button.getAttribute('data-name');

            const newModel = document.createElement('a-entity');

            newModel.setAttribute('gltf-model', '#' + modelId);
            newModel.setAttribute('scale', '1 1 1');
            newModel.setAttribute('position', '0 0 0');
            newModel.setAttribute('model-rotator', '');

            carContainer.appendChild(newModel);

            carName.setAttribute('value', name);
        });

    });

});
