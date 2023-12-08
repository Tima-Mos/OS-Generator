export function getGenitiveCase(name) {
    if (name.length < 1) return ;
    const endings = {
        а: 'ы',
        я: 'и',
        и: 'и',
        ь: 'я',
        й: 'я'
    };

    const lastChar = name[name.length - 1];

    if (endings.hasOwnProperty(lastChar)) {
        name = name.slice(0, -1) + endings[lastChar];
    } else {
        name += 'а';
    }

    return name;
}