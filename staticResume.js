document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');
    var additionalInfoSection = document.getElementById('additional-info');
    if (!toggleBtn || !additionalInfoSection) {
        console.error('Required elements are missing from the DOM');
        return;
    }
    var isVisible = false;
    additionalInfoSection.classList.add('hidden');
    toggleBtn.addEventListener('click', function () {
        if (isVisible) {
            additionalInfoSection.classList.add('hidden');
            toggleBtn.textContent = 'Additional Information';
        }
        else {
            additionalInfoSection.classList.remove('hidden');
            toggleBtn.textContent = 'Additional Information';
        }
        isVisible = !isVisible;
    });
});
