const size = {
    tabletM: '680px',
    laptop: '1220px',
    desktop: '1600px',
    ultra: '2500px',
};

export const device = {
    tabletM: `(min-width: ${size.tabletM})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
    ultra: `(min-width: ${size.ultra})`,
};
