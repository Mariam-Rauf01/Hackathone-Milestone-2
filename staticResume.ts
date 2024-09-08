document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn') as HTMLButtonElement | null;
    const additionalInfoSection = document.getElementById('additional-info') as HTMLElement | null;

    if (!toggleBtn || !additionalInfoSection) {
        console.error('Required elements are missing from the DOM');
        return;
    }

    let isVisible = false;
    additionalInfoSection.classList.add('hidden');

    toggleBtn.addEventListener('click', () => {
        if (isVisible) {
            additionalInfoSection.classList.add('hidden');
            toggleBtn.textContent = 'Additional Information';
        } else {
            additionalInfoSection.classList.remove('hidden');
            toggleBtn.textContent = 'Additional Information';
        }
        isVisible = !isVisible;
    });
});
