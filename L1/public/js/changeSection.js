
const sections = document.querySelectorAll('.section');
export function changeSection(buttons, check) {
    if (!check.classList.contains('active')) {
        buttons.forEach((button) => {
            button.classList.toggle('active');
        })
        sections.forEach((section) => {
            section.classList.toggle('active');
        });
    }
}