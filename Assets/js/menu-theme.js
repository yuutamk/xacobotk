// Tema oscuro
const button = document.getElementById('toggle-theme');
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('header nav');

button.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');

    // Alternar el tema
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);

    // Cambiar los íconos según el tema
    const newMoonIcon = newTheme === 'dark' ? './Assets/image/icons/moon2.svg' : './Assets/image/icons/sun2.svg';
    const newMenuIcon = newTheme === 'dark' ? './Assets/image/icons/menu.svg' : './Assets/image/icons/menu-dark.svg';

    // Actualizar íconos
    button.setAttribute('src', newMoonIcon);
    menuIcon.setAttribute('src', newMenuIcon);

    // Actualizar el texto alternativo del ícono (opcional)
    button.setAttribute('alt', newTheme === 'dark' ? 'modo claro' : 'modo oscuro');
});

// Menú hamburguesa
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active'); // Mostrar/ocultar el menú
});
